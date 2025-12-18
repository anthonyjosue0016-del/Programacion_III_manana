import { useReducer } from 'react';
import type { ChangeEvent } from 'react';

interface State {
  radio: string;
  area: number;
}

interface Action {
  name: string;
  value: string;
}

const initialState: State = {
  radio: '',
  area: 0,
};

function reducer(state: State, action: Action): State {
  const newState = { ...state, [action.name]: action.value };

  if (action.name === 'radio') {
    const r = parseFloat(action.value);
    newState.area = !isNaN(r) ? Math.PI * r * r : 0;
  }

  return newState;
}

export default function AreaCirculoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({ name: e.target.name, value: e.target.value });
  }

  return (
    <form>
      <input
        type="number"
        name="radio"
        value={state.radio}
        onChange={handleChange}
        placeholder="Radio del círculo"
      />

      <p>Área: {state.area.toFixed(2)}</p>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </form>
  );
}
