import { FC } from 'react';

// components
import { Counter } from 'components/Counter';
import { GlobalStyles } from 'styles/theme';

interface props {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

export const Main: FC<props> = ({ toggleTheme, isDarkTheme }) => {
  return (
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
  );
};
