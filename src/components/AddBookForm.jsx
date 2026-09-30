import React, { useState } from 'react';
import { isValidBook, isWebUrl, isWikipediaUrl } from '../storage.js';

export default function AddBookForm({ onSave, onCancel }) {
  // State remembers values while typing. Updating state redraws this component.
  const [authors, setAuthors] = useState([{ name: '', wiki: '', bio: '' }]);
  const [chapters, setChapters] = useState([{ title: '', takeaway: '' }]);
  const [error, setError] = useState('');

  function updateAuthor(index, field, value) {
    // map creates a new array. React state should not be changed directly.
    setAuthors(
      authors.map((author, position) =>
        position === index ? { ...author, [field]: value } : author,
      ),
    );
  }

  function updateChapter(index, field, value) {
    setChapters(
      chapters.map((chapter, position) =>
        position === index ? { ...chapter, [field]: value } : chapter,
      ),
    );
  }

  function handleSubmit(event) {
    event.preventDefault(); // Stop the browser from reloading after form submission.
    const form = new FormData(event.currentTarget);
    const coverUrl = form.get('coverUrl').trim();
    const sourceUrl = form.get('sourceUrl').trim();
    if (coverUrl && !isWebUrl(coverUrl))
      return setError('Use an http:// or https:// URL for the cover.');
    if (sourceUrl && !isWebUrl(sourceUrl))
      return setError('Use an http:// or https:// URL for the reference.');
    if (authors.some((author) => !isWikipediaUrl(author.wiki.trim())))
      return setError(
        'Each author link must point to wikipedia.org. A Wikipedia search link is also accepted.',
      );

    const book = {
      id: crypto.randomUUID(), // Each added book gets its own unique identifier.
      custom: true,
      title: form.get('title').trim(),
      subtitle:
        form.get('subtitle').trim() || 'Reader-contributed book summary',
      category: form.get('category'),
      year: Number(form.get('year')),
      publisher: form.get('publisher').trim(),
      isbn: form.get('isbn').trim(),
      edition: form.get('edition').trim(),
      coverUrl,
      summary: form.get('summary').trim(),
      idea: form.get('idea').trim(),
      citation: form.get('citation').trim(),
      authors: authors.map((author) => ({
        name: author.name.trim(),
        wiki: author.wiki.trim(),
        bio: author.bio.trim(),
        search: author.wiki.includes('search='),
      })),
      chapters: chapters.map((chapter) => ({
        title: chapter.title.trim(),
        takeaway: chapter.takeaway.trim(),
      })),
      sources: sourceUrl
        ? [{ label: 'Additional reading source', url: sourceUrl }]
        : [],
    };
    if (!isValidBook(book))
      return setError(
        'Please complete all required fields with text, including every author and chapter.',
      );
    // App returns an error message if browser storage cannot save the new book.
    const message = onSave(book);
    if (message) setError(message);
  }

  return (
    <section className="add-page" aria-labelledby="form-title">
      <div className="eyebrow">CONTRIBUTE TO YOUR LIBRARY</div>
      <h1 id="form-title">Add a book</h1>
      <p className="subtitle">A good book deserves a page of its own.</p>
      <div className="form-notice">
        Saved in this browser on this device. Required fields are marked with *.
        Keep a separate copy of important notes; clearing browser data removes
        added books.
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Book details</h2>
        <div className="form-grid">
          <label>
            Book title *
            <input autoFocus name="title" required maxLength={160} />
          </label>
          <label>
            Subtitle
            <input name="subtitle" maxLength={240} />
          </label>
          <label>
            Year *
            <input name="year" type="number" min="1" max="9999" required />
          </label>
          <label>
            Category
            <select name="category">
              <option>Learning</option>
              <option>Focus</option>
              <option>Habits</option>
              <option>Wellbeing</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Publisher *<input name="publisher" required maxLength={160} />
          </label>
          <label>
            Edition used *
            <input
              name="edition"
              required
              placeholder="e.g. 2020 first edition"
              maxLength={160}
            />
          </label>
          <label>
            ISBN
            <input name="isbn" maxLength={30} />
          </label>
          <label>
            Cover image URL
            <input
              name="coverUrl"
              type="url"
              placeholder="https://example.com/cover.jpg"
            />
            <small>
              Optional. A text cover appears if the image is unavailable.
            </small>
          </label>
        </div>

        <h2>Authors</h2>
        {authors.map((author, index) => (
          <fieldset key={index}>
            <legend>Author {index + 1}</legend>
            <div className="form-grid">
              <label>
                Name *
                <input
                  required
                  value={author.name}
                  onChange={(event) =>
                    updateAuthor(index, 'name', event.target.value)
                  }
                />
              </label>
              <label>
                Wikipedia URL *
                <input
                  required
                  type="url"
                  value={author.wiki}
                  onChange={(event) =>
                    updateAuthor(index, 'wiki', event.target.value)
                  }
                  placeholder="https://en.wikipedia.org/wiki/…"
                />
              </label>
            </div>
            <label>
              Short biography *
              <textarea
                required
                rows="2"
                value={author.bio}
                onChange={(event) =>
                  updateAuthor(index, 'bio', event.target.value)
                }
              />
            </label>
            {authors.length > 1 && (
              <button
                type="button"
                className="text-button"
                onClick={() =>
                  setAuthors(
                    authors.filter((item, position) => position !== index),
                  )
                }
              >
                Remove author {index + 1}
              </button>
            )}
          </fieldset>
        ))}
        <button
          type="button"
          className="secondary-button"
          onClick={() =>
            setAuthors([...authors, { name: '', wiki: '', bio: '' }])
          }
        >
          + Add another author
        </button>

        <h2>Your reading notes</h2>
        <label>
          Overall summary *
          <textarea
            name="summary"
            required
            rows="5"
            placeholder="Explain the book’s main argument in your own words."
          />
        </label>
        <label>
          One idea to remember *<input name="idea" required maxLength={300} />
        </label>
        <h2>Chapter-wise key takeaways</h2>
        {chapters.map((chapter, index) => (
          <fieldset key={index}>
            <legend>Chapter {index + 1}</legend>
            <label>
              Chapter title or topic *
              <input
                required
                value={chapter.title}
                onChange={(event) =>
                  updateChapter(index, 'title', event.target.value)
                }
              />
            </label>
            <label>
              Key takeaways *
              <textarea
                required
                rows="3"
                value={chapter.takeaway}
                onChange={(event) =>
                  updateChapter(index, 'takeaway', event.target.value)
                }
              />
            </label>
            {chapters.length > 1 && (
              <button
                type="button"
                className="text-button"
                onClick={() =>
                  setChapters(
                    chapters.filter((item, position) => position !== index),
                  )
                }
              >
                Remove chapter {index + 1}
              </button>
            )}
          </fieldset>
        ))}
        <button
          type="button"
          className="secondary-button"
          onClick={() =>
            setChapters([...chapters, { title: '', takeaway: '' }])
          }
        >
          + Add another chapter
        </button>

        <h2>Citations & bibliography</h2>
        <label>
          Book citation *
          <textarea
            name="citation"
            required
            rows="3"
            placeholder="Author. (Year). Book title. Publisher."
          />
        </label>
        <label>
          Additional source URL
          <input name="sourceUrl" type="url" placeholder="https://…" />
        </label>
        {error && (
          <p role="alert" className="error-message">
            {error}
          </p>
        )}
        <div className="form-actions">
          <button className="primary-button" type="submit">
            Save book
          </button>
          <button className="secondary-button" type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
