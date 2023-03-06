// redux
import type { RootState } from 'redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from 'redux/reducers/themeSlice';

// components
import { Counter } from 'components/Counter';
import { GlobalStyles } from 'styles/theme';

export const Main = () => {
  // theme
  const theme = useSelector((state: RootState) => state.theme.currentTheme);
  const dispatch = useDispatch();

  return (
    <>
      <GlobalStyles />
      <h1>Hello!</h1>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === 'dark' ? (
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
