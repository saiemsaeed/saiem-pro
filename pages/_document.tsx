import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  const setInitialTheme = `
    function getUserTheme() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }

    document.documentElement.classList.add(getUserTheme());
`;

  return (
    <Html lang='en'>
      <Head>
        <Script
          id='theme'
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{ __html: setInitialTheme }}
        />
      </Head>
      <body className={`bg-background text-foreground text-[0.9rem] antialiased `}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
