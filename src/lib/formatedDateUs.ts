/**
 * Converts a Date object to a string in the format 'YYYY-MM-DD'.
 * If the date is null, it returns null.
 *
 * @param {Date | null} date - The date to format.
 * @return {string | null} The formatted date string or null if the date is null.
 */
export const formatedDateUs = (date: Date | null): string | null => {
  return date ? date.toISOString().split('T')[0] : null;
};
