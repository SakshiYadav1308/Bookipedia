import React, { useEffect, useState } from 'react';
import { starterBooks } from './books.js';
import { loadBooks, saveBooks } from './storage.js';
import BookArticle from './components/BookArticle.jsx';
import AddBookForm from './components/AddBookForm.jsx';

function readSavedLibrary() {
  // Access itself can fail if the browser blocks storage entirely.
  try {
    return loadBooks(window.localStorage);
  } catch {
    return {
      books: [],
      message:
        'Browser storage is unavailable. You can still read the original seven books.',
    };
  }
}

export default function App() {
  const [savedLibrary, setSavedLibrary] = useState(readSavedLibrary);
  const [selectedId, setSelectedId] = useState('make-it-stick');
  const [addingBook, setAddingBook] = useState(false);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');

  // Derived values do not need their own state: calculate them from existing state.
  const books = [...starterBooks, ...savedLibrary.books];
  const selectedBook = books.find((book) => book.id === selectedId) || books[0];
  const matchingBooks = books.filter((book) =>
    `${book.title} ${book.authors.map((author) => author.name).join(' ')}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );

  useEffect(() => {
    document.title = addingBook
      ? 'Add a book — Bookipedia'
      : `${selectedBook.title} — Bookipedia`;
  }, [addingBook, selectedBook.title]);

  function selectBook(id) {
    setSelectedId(id);
    setAddingBook(false);
    setNotice('');
    // Remove the old section anchor so the new article opens at its beginning.
    window.history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search,
    );
    window.scrollTo(0, 0);
  }

  function addBook(book) {
    if (savedLibrary.message)
      return 'Saving is paused because existing storage could not be read. Check your browser storage settings before trying again.';
    const updatedBooks = [...savedLibrary.books, book];
    try {
      saveBooks(window.localStorage, updatedBooks);
      setSavedLibrary({ books: updatedBooks, message: '' });
      selectBook(book.id);
      setQuery('');
      setNotice('Your book was saved in this browser.');
      return '';
    } catch {
      return 'This browser could not save your book. Storage may be blocked or full. Your form is still here; copy your notes before leaving.';
    }
  }

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <button
          className="brand"
          onClick={() => selectBook('make-it-stick')}
          aria-label="Bookipedia home"
        >
          <img
  src={`${import.meta.env.BASE_URL}favicon.svg`}
  alt=""
  width="46"
  height="46"
/>
          <span>
            <strong>BOOKIPEDIA</strong>
            <small>The reading companion</small>
          </span>
        </button>
        <div className="header-description">Good books. Lasting ideas.</div>
        <button
          className="primary-button"
          onClick={() => {
            setAddingBook(true);
            setNotice('');
            window.scrollTo(0, 0);
          }}
        >
          + Add a book
        </button>
      </header>

      <div className="page-layout">
        <aside className="sidebar">
          <div className="sidebar-heading">
            Your library <span>{books.length}</span>
          </div>
          <label className="search-box">
            <span className="sr-only">Find a book or author</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10" cy="10" r="6" />
              <path d="m15 15 5 5" />
            </svg>
            <input
              type="search"
              placeholder="Find a book…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <nav className="book-nav" aria-label="Books">
            {matchingBooks.map((book) => (
              <button
                key={book.id}
                className={
                  !addingBook && book.id === selectedId ? 'selected' : ''
                }
                aria-current={
                  !addingBook && book.id === selectedId ? 'page' : undefined
                }
                onClick={() => selectBook(book.id)}
              >
                {book.title}
                <span>{book.category}</span>
              </button>
            ))}
          </nav>
          {matchingBooks.length === 0 && (
            <p className="empty-message" role="status">
              No books found. Try another title or author.
            </p>
          )}
          <div className="sidebar-bottom">
            <span className="small-rule"></span>
            <p>
              A little reading.
              <br />A lot to take away.
            </p>
            <small>
              A personal collection of ideas
              <br />
              worth coming back to.
            </small>
          </div>
        </aside>

        <main id="main-content" tabIndex="-1">
          {savedLibrary.message && (
            <p className="error-message" role="alert">
              {savedLibrary.message}
            </p>
          )}
          {notice && (
            <p className="success-message" role="status">
              {notice}
            </p>
          )}
          {addingBook ? (
            <AddBookForm
              onSave={addBook}
              onCancel={() => setAddingBook(false)}
            />
          ) : (
            <BookArticle key={selectedBook.id} book={selectedBook} />
          )}
          <footer>
            <span>Bookipedia</span>
            <p>
              An independent learning project. Not affiliated with Wikipedia or
              the Wikimedia Foundation.
            </p>
            <a href="#main-content">Back to top ↑</a>
          </footer>
        </main>
      </div>
    </>
  );
}
