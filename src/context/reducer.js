const store = JSON.parse(localStorage.getItem("store"))
export const initialState = store || {
    count:0,
    saved:[],
    token:null,
    lang:null
}

export const reducer = (state, action) => {
    switch(action.type){
        case "change":
            return {...state, lang: state.lang = action.payload}
        case "SAVED":

            let index = state.saved.findIndex(({id}) => id === action.payload.id)
            let store = null
            if(index < 0){
                return {...state, saved: [...state.saved, action.payload]}
            }else{
                store = {...state, saved: state.saved.filter(({id}) => id !== action.payload.id)}
            }
            localStorage.setItem("store", JSON.stringify(store))
            return store
        default:
            return state
    }
}