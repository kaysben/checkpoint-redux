import { ADD, DELETE, EDIT, DONE } from "./../Actions/ActionTypes";

const initalstate = {
  tasks: [
    {
      id: Math.random(),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "Task1",
      isDone: false,
    },
    {
      id: Math.random(),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "Task2",
      isDone: false,
    },
    {
      id: Math.random(),
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      title: "Task3",
      isDone: false,
    },
  ],
};

const Reducer = (state = initalstate, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case EDIT:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                title: action.payload.title,
                description: action.payload.description,
              }
            : task
        ),
      };
    case DONE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
