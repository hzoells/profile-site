import React, {memo, useMemo} from 'react'

export interface GlobalFontsProps {
  path: string
}

export function GlobalFonts({path}: GlobalFontsProps) {
  // Fonts used:
  // Poppins (400, 500, 600, 700)
  const fonts = useMemo(
    () => `
      @font-face {
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Helvetica Regular'), local('Helvetica-Regular'),
          url('${path}/Helvetica.ttf');
      }

      @font-face {
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Helvetica Bold'), local('Helvetica-Bold'),
          url('${path}/Helvetica-Bold.ttf');
      }

      @font-face {
        font-family: 'Helvetica';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: local('Helvetica Oblique'), local('Helvetica-Oblique'),
          url('${path}/Helvetica-Oblique.ttf');
      }

      @font-face {
        font-family: 'Helvetica';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: local('Helvetica BoldItalic'), local('Helvetica-BoldItalic'),
          url('${path}/Helvetica-BoldOblique.ttf');
      }

      @font-face {
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local('Helvetica Light'), local('Helvetica-Light'),
          url('${path}/Helvetica-Light.ttf');
      }
    `,
    [path]
  )

  return <style dangerouslySetInnerHTML={{__html: fonts}} />
}

export default memo(GlobalFonts)
