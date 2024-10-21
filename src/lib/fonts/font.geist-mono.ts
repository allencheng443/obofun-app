import localFont from 'next/font/local';

/**
 * This function loads and configures the 'Geist Mono' font for use in a Next.js application.
 * It uses the `localFont` function from Next.js to load the font file from the specified path.
 * The function also sets the CSS variable `--font-geist-mono` to the loaded font,
 * allowing it to be used in CSS styles.
 *
 * @param {Object} options - The configuration options for the font.
 * @param {string} options.src - The path to the font file.
 * @param {string} options.variable - The CSS variable name to store the loaded font.
 * @param {string} options.weight - The font weights to load.
 *
 * @returns {Object} - The loaded font object.
 */
const font = localFont({
  src: './GeistMonoVF.woff',
  display: 'swap',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default font;
