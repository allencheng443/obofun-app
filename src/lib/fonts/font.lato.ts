import { Lato } from 'next/font/google';

/**
 * This function loads and configures the 'Lato' font for use in a Next.js application.
 * It uses the `Lato` function from Next.js' font module to load the font files from Google Fonts.
 * The function also sets the CSS variable `--font-lato` to the loaded font,
 * allowing it to be used in CSS styles.
 *
 * @param {Object} options - The configuration options for the font.
 * @param {string[]} options.weight - The font weights to load.
 * @param {'swap' | 'fallback' | 'optional'} options.display - The font display strategy.
 * @param {string[]} options.subsets - The font subsets to load.
 * @param {string} options.variable - The CSS variable name to store the loaded font.
 *
 * @returns {Object} - The loaded font object.
 */
const font = Lato({
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lato',
});

export default font;
