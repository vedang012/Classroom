import { createContext } from "react";

const darkMode = localStorage.getItem('dark' == 'true') || 'false';

export const isDarkMode = createContext(darkMode)