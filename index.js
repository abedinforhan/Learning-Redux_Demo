const redux=require('redux')
const createStore = redux.createStore

// action sstring constant
const BUY_CAKE='BUY_CAKE'    // string constant to avoid spelling mistake
// {
//     type: BUY_CAKE,
//     info:"First redux action"
// }

  // action creators          Action creator is a function that return an object. Must have a type property. Payload can be  given or not
const buy_cake=()=>{ 
    return {
        type: BUY_CAKE,
        info: "my first redux action"    //payLoad,
     
    }
}
//application state    is a object that holds the whole application
const  initialState={     
     numOfCakes: 10
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:  return {
            ...state,
             numOfCakes: state.numOfCakes-1
        }

        default: return state
    }
}
const store =createStore(reducer)  // redux store holding applicarion store

console.log('Initial Sate', store.getState() );  // to get current state

const unsubscribe=store.subscribe(()=> console.log('update state' , store.getState()))

store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
unsubscribe()