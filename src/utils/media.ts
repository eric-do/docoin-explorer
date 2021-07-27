const size = {
  mobile: '768px',
  tablet: '769px',
  desktop: '1024px',
  widescreen: '1216px',
  fullhd: '1408px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
  widescreen: `(min-width: ${size.widescreen})`,
  fullhd: `(min-width: ${size.fullhd})`,
};