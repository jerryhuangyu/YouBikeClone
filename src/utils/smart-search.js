import Fuse from "fuse.js";

const DEFAULT_OPTIONS = {
  ignoreLocation: true,
  useExtendedSearch: true, // https://www.fusejs.io/examples.html#extended-search
  threshold: 0.5,
};

/**
 * @typedef {Object} IFuseOptions
 * @property {any} [anyProperty] - Example property (replace with actual properties based on Fuse.js options)
 */

/**
 * Conducts a smart search in the provided data using a search string.
 *
 * @template T
 * @param {T[]} data - The data array to be searched.
 * @param {string} searchString - The string used to perform the search.
 * @param {IFuseOptions<T>} [options={}] - Options to configure the search (e.g., Fuse.js options).
 * @returns {T[]} - The filtered array of items that match the search criteria.
 */
export function smartSearch(data, searchString, options = {}) {
  if (!data) return []; // If data is null/undefined, return empty array
  if (!searchString) return data; // If searchString is empty, return the original data

  const fuse = new Fuse(data, { ...options, ...DEFAULT_OPTIONS });
  const trimmedSearchString = searchString.substring(0, 1024); // Prevent poor performance caused by long search strings

  // Match either:
  // A sequence of non-space, non-quote characters ([^\s"]+).
  // Or a quoted substring that may contain spaces ("[^"]*").
  const matches = trimmedSearchString.match(/(?:[^\s"]+|"[^"]*")+/g);
  if (!matches) return [];

  // Reference: https://www.fusejs.io/examples.html#extended-search
  const searchPattern = matches
    .map((match) => {
      // "this would be a phrase" is the way to escape white space in our smart search
      if (match.startsWith('"') && match.endsWith('"')) {
        return `=${match}`; // In fuse.js, to escape white space, use double quote ex. ="scheme language" for exact match.
      }
      return match;
    })
    .join(" | "); // Replace spaces with " | " to allow for OR search

  const fuseResult = fuse.search(searchPattern);
  return fuseResult.map((result) => result.item);
}
