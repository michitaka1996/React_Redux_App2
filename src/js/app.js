import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MenuApp from './components/MenuApp'
import rootReducer from './reducers'



//これはstoreです。
 //すべてのReact-reduxを統括をするコンポーネント 
 //ここでstoreを作成する
console.log('app.js: storeへ流し込みます');

let store = createStore(rootReducer);

//providerでstore=　でstoreの値を使えるようにする
 //Providerの中で、componentの統括コンポーネントをして描画
ReactDOM.render(
    <Provider store={store}>
        <MenuApp/>
    </Provider>,
    document.getElementById('app')
);