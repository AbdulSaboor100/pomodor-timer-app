export let data = {
  addToCart : [],
    
}

export function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
          let userClone = state.addToCart.slice(0)
          userClone.push(action.payload)
          console.log(userClone)
            return {
                ...state,
                addToCart: userClone
            }
        }
        
        
        default:
            return state;

    }
}