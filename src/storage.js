// localStorage only stores strings, so JSON converts between strings and objects.
// These helpers are separate from React to make saving and validation easy to study.
export const STORAGE_KEY = 'bookipedia-custom-books-v1';

export function isWebUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

export function isWikipediaUrl(value) {
  if (!isWebUrl(value)) return false;
  const host = new URL(value).hostname;
  return host === 'wikipedia.org' || host.endsWith('.wikipedia.org');
}

function hasText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

export function isValidBook(book) {
  // Saved browser data can be edited or damaged, so check before displaying it.
  if (!book || typeof book !== 'object') return false;
  const textFields = [
    'id',
    'title',
    'subtitle',
    'category',
    'publisher',
    'edition',
    'summary',
    'idea',
    'citation',
  ];
  if (!textFields.every((field) => hasText(book[field]))) return false;
  if (!Number.isInteger(book.year) || book.year < 1 || book.year > 9999)
    return false;
  if (typeof book.isbn !== 'string') return false;
  if (book.coverUrl && !isWebUrl(book.coverUrl)) return false;
  if (!Array.isArray(book.authors) || book.authors.length === 0) return false;
  if (
    !book.authors.every(
      (author) =>
        author &&
        hasText(author.name) &&
        hasText(author.bio) &&
        isWikipediaUrl(author.wiki),
    )
  )
    return false;
  if (!Array.isArray(book.chapters) || book.chapters.length === 0) return false;
  if (
    !book.chapters.every(
      (chapter) =>
        chapter && hasText(chapter.title) && hasText(chapter.takeaway),
    )
  )
    return false;
  if (!Array.isArray(book.sources)) return false;
  return book.sources.every(
    (source) => source && hasText(source.label) && isWebUrl(source.url),
  );
}

export function loadBooks(storage) {
  try {
    const saved = storage.getItem(STORAGE_KEY);
    if (!saved) return { books: [], message: '' };
    const books = JSON.parse(saved);
    if (!Array.isArray(books) || !books.every(isValidBook))
      throw new Error('Invalid saved data');
    if (new Set(books.map((book) => book.id)).size !== books.length)
      throw new Error('Duplicate IDs');
    return { books, message: '' };
  } catch {
    return {
      books: [],
      message:
        'Saved books could not be loaded. Your stored data has not been changed. The original seven books are still available.',
    };
  }
}

export function saveBooks(storage, books) {
  // Write before updating the screen. If storage is full, the form stays open.
  storage.setItem(STORAGE_KEY, JSON.stringify(books));
}
