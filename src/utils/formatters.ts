/**
 * Format a number as currency
 * @param amount - The amount to format
 * @param currency - The currency code (default: USD)
 * @param locale - The locale to use for formatting (default: en-US)
 * @returns Formatted currency string
 */
export const formatCurrency = (
  amount: number,
  currency: string = 'USD',
  locale: string = 'en-US'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Format a date
 * @param date - The date to format
 * @param format - The format to use (default: 'medium')
 * @param locale - The locale to use for formatting (default: en-US)
 * @returns Formatted date string
 */
export const formatDate = (
  date: Date | string | number,
  format: 'short' | 'medium' | 'long' = 'medium',
  locale: string = 'en-US'
): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  
  const options: Record<string, Intl.DateTimeFormatOptions> = {
    short: { month: 'numeric', day: 'numeric', year: '2-digit' },
    medium: { month: 'short', day: 'numeric', year: 'numeric' },
    long: { month: 'long', day: 'numeric', year: 'numeric', weekday: 'long' },
  };
  
  return new Intl.DateTimeFormat(locale, options[format]).format(dateObj);
};

/**
 * Format a percentage
 * @param value - The value to format as percentage
 * @param decimalPlaces - Number of decimal places (default: 2)
 * @param locale - The locale to use for formatting (default: en-US)
 * @returns Formatted percentage string
 */
export const formatPercentage = (
  value: number,
  decimalPlaces: number = 2,
  locale: string = 'en-US'
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(value / 100);
}; 