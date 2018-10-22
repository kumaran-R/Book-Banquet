import {CREATE_HALL} from "../Actions/hallActions"


export default function hallReducer(state = [], {type,payload}){
    switch (type){
        case CREATE_HALL:
            return {
                name:payload
            }
        default :
            return state
    }
   }