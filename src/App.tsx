import { useState } from 'react';

// router
import { Routes, Route } from 'react-router-dom';

// theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';

// redux
import { store } from './redux/store';
import { Provider } from 'react-redux';

// components
import { Main } from './components/Main';

import './App.css';

const App = () => {
  // theme
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Routes>
          <Route
            path='/'
            element={
              <Main toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            }
          />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
};
export default App;
