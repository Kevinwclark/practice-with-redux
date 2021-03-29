const defaultState = {
  user = ['no user']

}; 

export default function homePageReducer(state = defaultState, action) {
  switch(action.type){
    default:
      return state;
  }
}

// the store is just a giant object