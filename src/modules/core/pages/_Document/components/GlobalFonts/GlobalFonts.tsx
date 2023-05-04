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

      // 

      @font-face {
        font-family: 'Spacia';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: local('Spacia Bold'), local('Spacia-Bold'),
          url('${path}/Spacia-Bold.ttf');
      }

      @font-face {
        font-family: 'Spacia';
        font-style: italic;
        font-weight: 600;
        font-display: swap;
        src: local('Spacia BoldItalic'), local('Spacia-BoldItalic'),
          url('${path}/Spacia-BoldItalic.ttf');
      }

      @font-face {
        font-family: 'Spacia';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local('Spacia ExtraBold'), local('Spacia-ExtraBold'),
          url('${path}/Spacia-ExtraBold.ttf');
      }

      @font-face {
        font-family: 'Spacia';
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: local('Spacia ExtraBoldItalic'), local('Spacia-ExtraBoldItalic'),
          url('${path}/Spacia-ExtraBoldItalic.ttf');
      }

      @font-face {
        font-family: 'Spacia';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: local('Spacia Heavy'), local('Spacia-Heavy'),
          url('${path}/Spacia-Heavy.ttf');
      }

      @font-face {
        font-family: 'Spacia';
        font-style: italic;
        font-weight: 800;
        font-display: swap;
        src: local('Spacia HeavyItalic'), local('Spacia-HeavyItalic'),
          url('${path}/Spacia-HeavyItalic.ttf');
      }

      @font-face {
        font-family: 'Spacia';
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: local('Spacia Italic'), local('Spacia-Italic'),
          url('${path}/Spacia-Italic.ttf');
      }

      @font-face {
        font-family: 'Spacia';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local('Spacia Light'), local('Spacia-Light'),
          url('${path}/Spacia-Light.ttf');
      }

      @font-face {
        font-family: 'Spacia';
        font-style: italic;
        font-weight: 300;
        font-display: swap;
        src: local('Helvetica LightItalic'), local('Helvetica-LightItalic'),
          url('${path}/Helvetica-LightItalic.ttf');
      }

      @font-face {
        font-family: 'Spacia';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local('Helvetica Regular'), local('Helvetica-Regular'),
          url('${path}/Helvetica-Regular.ttf');
      }
    `,
    [path]
  )

  return <style dangerouslySetInnerHTML={{__html: fonts}} />
}

export default memo(GlobalFonts)
