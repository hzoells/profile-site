export const text = {
  fontFamily: {
    primary: "'Nunito', sans-serif",
    secondary: "'Helvetica', sans-serif",
  },
  fontStyle: {
    normal: 'normal',
    italic: 'italic',
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    heavy: 800,
  },
  textAlign: {
    center: 'center',
    end: 'end',
    left: 'left',
    right: 'right',
    start: 'start',
  },
  textTransform: {
    capitalize: 'capitalize',
    lowercase: 'lowercase',
    none: 'none',
    uppercase: 'uppercase',
  },
}

// TODO: deprecate
export default {
  primary: text.fontFamily.primary,
  style: text.fontStyle,
  weight: text.fontWeight,
}
