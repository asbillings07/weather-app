export const typography = (style) =>
  ({
    uppercase: `
      text-transform: uppercase;
    `,
    small: `
      font-size: 11px;
    `,
    medium: `
      font-size: 12px;
    `,
    default: `
      font-size: 14px;
    `,
    large: `
      font-size: 15px;
    `,
    defaultLineHeight: `
      line-height: 1.4em;
    `,
    bold: `
      font-weight: 600;
    `,
    letterSpacing: `
      letter-spacing: 0.05em;
    `,
  }[style]);
