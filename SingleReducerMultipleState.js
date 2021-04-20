const redux=require('redux')
const createStore = redux.createStore

const BUY_CAKE='BUY_CAKE'    // string constant to avoid spelling mistake
const BUY_ICECREAM='BUY_ICECREAM' // string constant
// {
//     type: BUY_CAKE,
//     info:"First redux action"
// }


 // action creators

const buyCake=()=>{  
    return {
        type: BUY_CAKE,
        info: "my first redux action"
    }
}

const buyIceCream=()=>{
    return {
        type: BUY_ICECREAM,
        info: "my  icecream"
    }
}




const  initialState={     //application state
     numOfCakes: 10,
     numOfIceCreams: 20
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:  return {
            ...state,
             numOfCakes: state.numOfCakes-1
        }

        case BUY_ICECREAM:  return {
            ...state,
            numOfIceCreams: state.numOfIceCreams-1
        }

        default: return state
    }
}
const store =createStore(reducer)  // redux store holding applicarion store
console.log('Initial Sate', store.getState() );  // to get current state

const unsubscribe=store.subscribe(()=> console.log('update state' , store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()