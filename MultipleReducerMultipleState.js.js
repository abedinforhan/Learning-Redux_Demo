const redux=require('redux')
const createStore = redux.createStore
const combineReducers =redux.combineReducers

const BUY_CAKE='BUY_CAKE'    // string constant to avoid spelling mistake
const BUY_ICECREAM='BUY_ICECREAM' // string constant

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

const  initialCakeState={     //application state
     numOfCakes: 10
    }
    const  initialIceCreamState={     //application state
         numOfIceCreams: 20
        }


const CakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:  return {
            ...state,
             numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}
const iceCreamReducer=(state=initialIceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:  return {
            ...state,
            numOfIceCreams: state.numOfIceCreams-1
        }
        default: return state
    }
}


const rootReducer= combineReducers({
    cake: CakeReducer,
    iceCream: iceCreamReducer,
    // buger: BugerReducer
})
const store =createStore(rootReducer)  // redux store holding applicarion store
//it accepts only one reducer


console.log('Initial Sate', store.getState() );  // to get current state

const unsubscribe=store.subscribe(()=> console.log('update state' , store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()