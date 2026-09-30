// Node's built-in test runner needs no extra testing package.
import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { starterBooks } from '../src/books.js';
import {
  STORAGE_KEY,
  isValidBook,
  isWebUrl,
  isWikipediaUrl,
  loadBooks,
  saveBooks,
} from '../src/storage.js';

test('all seven book records are valid, complete, and have local covers', () => {
  assert.equal(starterBooks.length, 7);
  assert.equal(new Set(starterBooks.map((book) => book.id)).size, 7);
  assert.deepEqual(
    starterBooks.map((book) => book.chapters.length),
    [8, 7, 20, 8, 14, 18, 33],
  );
  for (const book of starterBooks) {
    assert.ok(isValidBook(book), book.title);
    assert.ok(
      existsSync(new URL(`../public/covers/${book.id}.jpg`, import.meta.url)),
      book.title,
    );
  }
});

test('saved custom books survive a JSON round trip', () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key),
    setItem: (key, value) => values.set(key, value),
  };
  const book = { ...starterBooks[0], id: 'test-custom-book', custom: true };
  saveBooks(storage, [book]);
  assert.deepEqual(loadBooks(storage), { books: [book], message: '' });
  assert.equal(typeof values.get(STORAGE_KEY), 'string');
});

test('corrupt or incomplete stored data is not overwritten', () => {
  for (const raw of [
    'not json',
    '{}',
    '[null]',
    '[{"title":"Incomplete"}]',
    JSON.stringify([starterBooks[0], starterBooks[0]]),
  ]) {
    const storage = {
      getItem: () => raw,
      setItem: () => assert.fail('must not write'),
    };
    const result = loadBooks(storage);
    assert.deepEqual(result.books, []);
    assert.ok(result.message);
  }
});

test('blocked storage is reported and failed writes throw', () => {
  const storage = {
    getItem: () => {
      throw new Error('blocked');
    },
    setItem: () => {
      throw new Error('full');
    },
  };
  assert.ok(loadBooks(storage).message);
  assert.throws(() => saveBooks(storage, []), /full/);
});

test('unsafe URLs and lookalike Wikipedia hosts are rejected', () => {
  assert.equal(isWebUrl('javascript:alert(1)'), false);
  assert.equal(isWebUrl('data:text/html,test'), false);
  assert.equal(isWebUrl('https://example.com/cover.jpg'), true);
  assert.equal(
    isWikipediaUrl('https://en.wikipedia.org/wiki/Cal_Newport'),
    true,
  );
  assert.equal(
    isWikipediaUrl('https://wikipedia.org.evil.example/wiki/Test'),
    false,
  );
  assert.equal(isWikipediaUrl('https://example.com'), false);
});

test('whitespace-only notes and invalid nested fields are rejected', () => {
  assert.equal(isValidBook({ ...starterBooks[0], summary: '   ' }), false);
  assert.equal(isValidBook({ ...starterBooks[0], chapters: [] }), false);
  assert.equal(isValidBook({ ...starterBooks[0], authors: [null] }), false);
  assert.equal(isValidBook({ ...starterBooks[0], year: NaN }), false);
  assert.equal(
    isValidBook({
      ...starterBooks[0],
      sources: [{ label: 'Unsafe', url: 'javascript:alert(1)' }],
    }),
    false,
  );
});
