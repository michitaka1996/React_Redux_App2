//これはreducerを統括するためのコンポーネント
  //ここで実際にreducerを作っている


//reducersを実際に作るためにcombimeReducersを使う
//

import { combineReducers } from "redux"
import menu from "./menu"

console.log('reducersを読み込みます');
console.log('reducers: メニュー', menu);
const reducer = combineReducers({
    menu
});




export default reducer;