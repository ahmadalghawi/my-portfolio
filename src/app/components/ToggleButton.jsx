"use client"
import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.querySelector('html');

    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleColorScheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      className="items-center px-3 py-2 border rounded border-slate-200 text-white shadow-md md:ml-5 lg:ml-10"
      onClick={toggleColorScheme}
    >
      {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5"/>}
    </button>
  );
}
