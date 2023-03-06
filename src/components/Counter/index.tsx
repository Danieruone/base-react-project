// redux
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from 'redux/store';
import { decrement, increment } from 'redux/reducers/counterSlice';

// styles
import { Container } from './styles';

export const Counter = () => {
  // redux
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Container>
      <button
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span>{count}</span>
      <button
        aria-label='Increment value'
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </Container>
  );
};
