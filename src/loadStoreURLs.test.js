import { deserializeURLs } from "./loadStoreURLs";

test("deserializes valid urls", () => {
  const serialized =
    '[{"originalLink":"foo.com","shortenedLink":"shortfoo.com"},{"originalLink":"bar.com","shortenedLink":"shortbar.com"}]';

  const expected = [
    { originalLink: "foo.com", shortenedLink: "shortfoo.com" },
    { originalLink: "bar.com", shortenedLink: "shortbar.com" },
  ];

  expect(deserializeURLs(serialized)).toStrictEqual(expected);
});

test("deserialize returns null if original link missing", () => {
  const serialized = '[{"shortenedLink":"shortfoo.com"}]';

  expect(deserializeURLs(serialized)).toBeNull();
});

test("deserialize returns null if shortened link missing", () => {
  const serialized = '[{"originalLink":"foo.com"}]';

  expect(deserializeURLs(serialized)).toBeNull();
});

test("deserialize returns null if not an array", () => {
  const serialized = "{}";

  expect(deserializeURLs(serialized)).toBeNull();
});
