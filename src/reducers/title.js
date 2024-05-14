const title = (state = 'Dashboard',action) => {
  switch(action.type){
    case "SET_TITLE" :
      return action.title;
    default:
      return state;
  }
}

export default title;