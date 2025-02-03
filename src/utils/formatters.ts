/**
 * Formats a cryptocurrency price with appropriate decimals and currency symbol
 *
 * @description
 * This function formats cryptocurrency prices following these rules:
 * @param {string | number} price - The price value to format
 * @returns {string} The formatted price string with currency symbols
 */
export const formatPricee = (price: string | number): string => {
  // Convert string to number if necessary
  const pricetoFormat = typeof price === 'string' ? parseFloat(price) : price;

  let priceF: string;

  // Format based on price range
  if (pricetoFormat >= 1) {
    // Regular price format with 2 decimals
    priceF = pricetoFormat.toFixed(2);
  } else if (pricetoFormat >= 0.000001) {
    // Small price format with up to 6 decimals, remove trailing zeros
    priceF = pricetoFormat.toFixed(6).replace(/\.?0+$/, '');
  } else {
    // Very small price format using scientific notation
    priceF = pricetoFormat.toExponential(6);
  }

  // Split into whole and decimal parts
  const [currency, currencyDecimal] = priceF.split('.');

  // Add thousands separators to whole part
  const currencyPart = currency.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Combine whole and decimal parts
  priceF = currencyDecimal
    ? `${currencyPart}.${currencyDecimal}`
    : currencyPart;

  // Return formatted price with currency symbols
  return `$${priceF} USD`;
};
