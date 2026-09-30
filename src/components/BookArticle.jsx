import React, { useState } from 'react';

export function AuthorLink({ author }) {
  return (
    <a href={author.wiki} target="_blank" rel="noreferrer">
      {author.name}
      {author.search && (
        <span className="search-label"> (Wikipedia search)</span>
      )}
    </a>
  );
}

function BookCover({ book }) {
  const [failed, setFailed] = useState(false);
  const source = book.custom
  ? book.coverUrl
  : `${import.meta.env.BASE_URL}covers/${book.id}.jpg`;

  // A failed image should never leave a broken-image icon in the article.
  if (!source || failed) {
    return (
      <div className="cover-fallback">
        <span>BOOKIPEDIA</span>
        <strong>{book.title}</strong>
        <small>Cover unavailable</small>
      </div>
    );
  }
  return (
    <img
      className="book-cover"
      src={source}
      alt={`${book.title} book cover`}
      onError={() => setFailed(true)}
    />
  );
}

export default function BookArticle({ book }) {
  return (
    <article className="article" aria-labelledby="book-title">
      <div className="eyebrow">
        THE BOOK LIBRARY <span>/</span> {book.category.toUpperCase()}
      </div>
      <h1 id="book-title">{book.title}</h1>
      <p className="subtitle">{book.subtitle}</p>

      {/* Normal anchor links jump to sections; no routing library is necessary. */}
      <nav className="article-tabs" aria-label="Article sections">
        <a href="#overview">Overview</a>
        <a href="#chapters">Chapter takeaways</a>
        <a href="#references">References</a>
        <span>Book article</span>
      </nav>
      <p className="byline">From Bookipedia, your reading companion</p>

      <div className="article-columns">
        <div className="article-body">
          <section id="overview">
            <p className="lead">
              <strong>{book.title}</strong> is a {book.year} book by{' '}
              {book.authors.map((author, index) => (
                <React.Fragment key={author.name}>
                  {index > 0 && ', '}
                  <AuthorLink author={author} />
                </React.Fragment>
              ))}
              . These notes introduce its central ideas and offer a
              chapter-by-chapter starting point for reflection.{' '}
              <a href="#references" className="reference-mark">
                [1]
              </a>
            </p>
            <div className="contents-box">
              <strong>Contents</strong>
              <span className="muted">On this page</span>
              <ol>
                <li>
                  <a href="#summary">Overall summary</a>
                </li>
                <li>
                  <a href="#chapters">Chapter-wise key takeaways</a>
                </li>
                <li>
                  <a href="#authors">
                    About the {book.authors.length > 1 ? 'authors' : 'author'}
                  </a>
                </li>
                <li>
                  <a href="#references">Citations & bibliography</a>
                </li>
              </ol>
            </div>
          </section>
          <section id="summary">
            <h2>Overall summary</h2>
            <p>{book.summary}</p>
            <aside className="key-idea">
              <span>THE IDEA TO REMEMBER</span>
              <p>{book.idea}</p>
            </aside>
          </section>
        </div>

        <aside className="infobox" aria-label="Book details">
          <div className="infobox-title">{book.title}</div>
          <figure>
            <BookCover key={book.id} book={book} />
            <figcaption>
              {book.custom
                ? 'Reader-added book'
                : 'Cover image via Open Library'}
            </figcaption>
          </figure>
          <dl>
            <dt>{book.authors.length > 1 ? 'Authors' : 'Author'}</dt>
            <dd>
              {book.authors.map((author) => (
                <div key={author.name}>
                  <AuthorLink author={author} />
                </div>
              ))}
            </dd>
            <dt>Published</dt>
            <dd>{book.year}</dd>
            <dt>Subject</dt>
            <dd>{book.category}</dd>
            <dt>Publisher</dt>
            <dd>{book.publisher}</dd>
            {book.isbn && (
              <>
                <dt>ISBN</dt>
                <dd>{book.isbn}</dd>
              </>
            )}
            <dt>Language</dt>
            <dd>English</dd>
          </dl>
        </aside>
      </div>

      <section id="chapters">
        <div className="section-heading">
          <h2>Chapter-wise key takeaways</h2>
          <span className="count-label">{book.chapters.length} entries</span>
        </div>
        <p className="section-note">
          {book.edition}.{' '}
          {book.custom
            ? 'Notes contributed by you.'
            : 'Topic headings and takeaways are paraphrased reading notes, not the original chapter text. Front and back matter are excluded.'}
        </p>
        <div className="chapter-list">
          {book.chapters.map((chapter, index) => (
            <div className="chapter" key={index}>
              <span className="chapter-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{chapter.title}</h3>
                <p>{chapter.takeaway}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="authors">
        <h2>About the {book.authors.length > 1 ? 'authors' : 'author'}</h2>
        {book.authors.map((author) => (
          <p key={author.name}>
            <strong>
              <AuthorLink author={author} />
            </strong>{' '}
            — {author.bio}
          </p>
        ))}
      </section>

      <section id="references">
        <h2>Citations & bibliography</h2>
        <ol className="references">
          <li>{book.citation}</li>
          {book.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.label} ↗
              </a>
            </li>
          ))}
        </ol>
        <p className="section-note">
          These brief notes accompany the cited book; editions may have
          different chapter arrangements. Cover artwork belongs to its
          respective rights holders.
        </p>
      </section>
      <div className="category-line">
        Category: <span>{book.category}</span> <span>Nonfiction</span>{' '}
        <span>Book summaries</span>
      </div>
    </article>
  );
}
