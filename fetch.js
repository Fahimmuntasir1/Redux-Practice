// constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_ERROR = "GET_TODOS_ERROR";

//state
const initialTodoState = {
  todos: [],
  isLoading: false,
  error: null,
};

//actions
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};
const getTodosError = (error) => {
  return {
    type: GET_TODOS_ERROR,
    error: error,
  };
};
const getTodosSuccess = (success) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: success,
  };
};

//reducer

const todoReducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
      break;

    default:
      break;
  }
};

// async action create
const fetchData = () => {};

//store
const store = createStore(todoReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData);
