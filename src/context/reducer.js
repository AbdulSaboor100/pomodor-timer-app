export let data = {
  workTime : [],
  shortBreakTime : [],
  longBreakTime : [],
    
}

export function reducer(state, action) {
    switch (action.type) {
        case "WORK_TIME": {
            return {
                ...state,
                workTime: action.payload
            }
        }
        case "SHORT_BREAK_TIME": {
          return {
              ...state,
              shortBreakTime: action.payload
          }
      }
      case "LONG_BREAK_TIME": {
        return {
            ...state,
            longBreakTime: action.payload
        }
    }
        
        
        default:
            return state;

    }
}