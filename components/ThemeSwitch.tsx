import { MoonIcon } from '@/icons/moon';
import { SunIcon } from '@/icons/sun';
import { FC, useEffect, useState } from 'react';

export const useTheme = () => {
  const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';

  return { isDarkTheme: theme === 'dark', isLightTheme: theme === 'light' };
};

const ThemeSwitch = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    document.documentElement.classList.contains('dark'),
  );

  const listener = (e: MediaQueryList | MediaQueryListEvent) => {
    setIsDarkTheme(e.matches);
    if (e.matches) document.documentElement.classList.replace('light', 'dark');
    else document.documentElement.classList.replace('dark', 'light');
  };

  useEffect(() => {
    if (localStorage.theme === 'dark' || localStorage.theme === 'light') return;

    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    listener(systemTheme);

    systemTheme.addEventListener('change', listener);

    return () => systemTheme.removeEventListener('change', () => {});
  }, []);

  const handleDarkMode = async () => {
    const switchOff = new Audio('./switch-off.mp3');
    await switchOff.play();
    setIsDarkTheme(true);
    localStorage.theme = 'dark';
    document.documentElement.classList.replace('light', 'dark');
  };

  const handleLightMode = async () => {
    const switchOn = new Audio('./switch-on.mp3');
    await switchOn.play();
    setIsDarkTheme(false);
    localStorage.theme = 'light';
    document.documentElement.classList.replace('dark', 'light');
  };

  return (
    <>
      {isDarkTheme && (
        <button
          onClick={handleLightMode}
          className='text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md flex h-7 w-7 items-center justify-center p-0'
        >
          <SunIcon />
        </button>
      )}
      {!isDarkTheme && (
        <button
          onClick={handleDarkMode}
          className='text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:foreground hover:text-accent-foreground rounded-md flex h-7 w-7 items-center justify-center p-0'
        >
          <MoonIcon />
        </button>
      )}
    </>
  );
};

export default ThemeSwitch;
