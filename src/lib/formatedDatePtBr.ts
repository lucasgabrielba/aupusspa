/**
 * Formats a given Date object to a string in the format 'DD/MM/YYYY' (Brazilian Portuguese locale).
 * Optionally includes time in the format 'HH:mm' or 'HH:mm:ss'.
 *
 * @param {Date} date - The date to format.
 * @param {boolean} [includeTime=false] - Whether to include time in the format 'HH:mm'.
 * @param {boolean} [includeSeconds=false] - Whether to include seconds in the time format 'HH:mm:ss'.
 * @returns {string} - The formatted date string in 'DD/MM/YYYY' format, optionally including time.
 *
 * @example
 * const formattedDate = formatedDatePtBr(new Date(2023, 9, 5)); // "05/10/2023"
 * const formattedDateWithTime = formatedDatePtBr(new Date(2023, 9, 5, 14, 30)); // "05/10/2023 14:30"
 * const formattedDateWithSeconds = formatedDatePtBr(new Date(2023, 9, 5, 14, 30, 45), true, true); // "05/10/2023 14:30:45"
 */
export const formatedDatePtBr = (
  stringDate: string,
  includeTime: boolean = false,
  includeSeconds: boolean = false
): string => {

  const date = new Date(stringDate);

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  if (includeTime) {
    options.hour = '2-digit';
    options.minute = '2-digit';
    if (includeSeconds) {
      options.second = '2-digit';
    }
  }

  return date.toLocaleDateString('pt-BR', options);
};