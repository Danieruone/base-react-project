import { useState } from 'react';

// theme
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';

// redux
import { store } from './redux/store';
import { Provider } from 'react-redux';

// components
import { Counter } from './components/Counter';

import './App.css';

const App = () => {
  // theme
  const [theme, setTheme] = useState('light');
  const isDarkTheme = theme === 'dark';
  const toggleTheme = () => setTheme(isDarkTheme ? 'light' : 'dark');

  return (
    <Provider store={store}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <>
          <GlobalStyles />
          <h1>Hello!</h1>
          <button onClick={toggleTheme}>
            {isDarkTheme ? (
              <span aria-label='Light mode' role='img'>
                🌞
              </span>
            ) : (
              <span aria-label='Dark mode' role='img'>
                🌜
              </span>
            )}
          </button>

          <Counter />
        </>
      </ThemeProvider>
    </Provider>
  );
};
export default App;
