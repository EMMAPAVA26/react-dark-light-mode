import React, { createContext, useState, useContext, useEffect } from 'react';

// 2. Creamos un "contenedor" para guardar la información del tema
const ThemeContext = createContext();

// 3. Creamos el componente principal que maneja el tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 8. Función para que otros componentes usen el tema
export const useTheme = () => useContext(ThemeContext);
