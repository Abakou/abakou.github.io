import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 
 * @param  {...string} inputs 
 * @returns 
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function getDefaultTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
}

export function htmlNodeClassList() {
  return window.document.querySelector('html').classList
}