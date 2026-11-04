import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

/**
 * Builds a phone-sized and a desktop-sized WebP for a CSS background image and
 * returns them as `--bg-sm` / `--bg-lg` custom properties for an inline style.
 * Pair it with the classes `bg-(image:--bg-sm) lg:bg-(image:--bg-lg)`.
 * These backgrounds sit under dark overlays, so a lower quality is not visible.
 */
export async function backgroundImage(src: ImageMetadata, quality = 55) {
  const [sm, lg] = await Promise.all([
    getImage({ src, width: 1080, format: 'webp', quality }),
    getImage({ src, width: 1920, format: 'webp', quality }),
  ]);
  return `--bg-sm:url(${sm.src});--bg-lg:url(${lg.src})`;
}
