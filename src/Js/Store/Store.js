import rootReducer from "../Reducer/Index";

const { createStore} = require("redux");



const Store= createStore(rootReducer)

export default Store
