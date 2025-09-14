export const CATEGORIES = ['Branding', 'Package', 'Graphic', 'illustration', 'UI/UX', 'Editorial'] as const;

export const CATEGORY_MAP: Record<string, string> = {
  Branding: 'BRANDING',
  Package: 'PACKAGE',
  Graphic: 'GRAPHIC',
  illustration: 'ILLUSTRATION',
  // cspell:disable-next-line
  'UI/UX': 'UIUX',
  Editorial: 'EDITORIAL',
};

export const REVERSE_CATEGORY_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_MAP).map(([key, value]) => [value, key]),
);