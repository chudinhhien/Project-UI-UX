const target = (state = [], action) => {
  switch (action.type) {
    case "ADD_TARGET": 
      if(state === null){
        return [action.value];
      }
      return [
        ...state,
        action.value
      ];
    case "CLOSE_MODAL_TARGET":
      return [];
    case "OPEN_KPI":
      return action.value;
    default:
      return state;
  }
}

export default target;
