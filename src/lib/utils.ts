import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single class name string, merging Tailwind classes where applicable.
 * This function uses `clsx` to conditionally combine class names and `tailwind-merge` to merge Tailwind CSS classes.
 *
 * @param {...ClassValue[]} inputs - The class names to combine.
 * @return {string} The combined class name string.
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
