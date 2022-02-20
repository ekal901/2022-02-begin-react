import { useCallback, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ON_CHANGE':
      return {
        ...state,
        [action.name]: action.value,
      };
    case 'RESET':
      return {
        username: '',
        email: '',
      };
    default:
      throw new Error('Unhandled reducer');
  }
}

function useInputs(initialForm) {
  // const [form, setForm] = useState(initialForm)
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    // setForm(form => ({
    //     ...form,
    //     [name]: value
    // }))
    dispatch({
      type: 'ON_CHANGE',
      name,
      value,
    });
  }, []);

  // const reset = useCallback(() => setForm(initialForm), [initialForm])
  const reset = useCallback(() => {
    dispatch({
      type: 'RESET',
      initialForm,
    });
  }, [initialForm]);

  // return [form, onChange, reset]
  return [state, onChange, reset];
}

export default useInputs;
