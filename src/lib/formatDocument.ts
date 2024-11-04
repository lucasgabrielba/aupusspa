/**
 * Formats a given string as either a CPF or CNPJ number, based on its length.
 * CPF and CNPJ are Brazilian individual taxpayer registry identification and company registry identification numbers, respectively.
 *
 * @param {string} value - The input string representing a document number. It can contain non-numeric characters which will be removed during the formatting process.
 * @returns {string} - The formatted document number as a string. If the input length corresponds to a CPF, it will be formatted as a CPF. If it corresponds to a CNPJ, it will be formatted as a CNPJ. If the input length does not match either, the original string with non-numeric characters removed will be returned.
 *
 * @example
 * const cpf = formatDocument("12345678901"); // "123.456.789-01"
 * const cnpj = formatDocument("12345678000195"); // "12.345.678/0001-95"
 * const rg = formatDocument("1234567"); // "1234567"
 */
export const formatDocument = (value: string): string => {
  // Remove non-numeric characters
  value = value?.replace(/\D/g, '');

  if (value?.length <= 11) {
    // CPF
    value = value?.replace(/(\d{3})(\d)/, '$1.$2');
    value = value?.replace(/(\d{3})(\d)/, '$1.$2');
    value = value?.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  } else if (value?.length <= 14) {
    // CNPJ
    value = value?.replace(/^(\d{2})(\d)/, '$1.$2');
    value = value?.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
    value = value?.replace(/\.(\d{3})(\d)/, '.$1/$2');
    value = value?.replace(/(\d{4})(\d)/, '$1-$2');
  } // RG does not have a fixed format, so no regex is applied.

  return value;
};
