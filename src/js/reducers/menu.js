import _ from 'lodash';


//reducers
 //reducerはreturnで返却するstateと

console.log('reducers(menu): このreducer名が以降でstateの名前になります'); //最初だけ読みこまれる

//初期値のid
const initialState = {
    menus: [{
        id: 'XXX',
        title: 'メニュー例',
        text: 'sample Menu1　こんな感じでメニューが表示されます 疲労度に合わせて最適なトレーニングが3日分作成されます',
        degree: '',
        isDone: false,
        date: '20XX年X月X日',
    }]
};
console.log('reducers: 初期値', initialState); //最初だけ読みとこまれる


//componentsから、dispachでactionsへメソッドを受け渡す
  //常にreducersではactionsが入ってくること
//(actionsは、componentsから送られたメソッドを受け取る)
//action で受け取った値を state に適用して更新する
// reducerはreturnで返却するstateと元のstateの差分があれば、再描画される
// reducer名がそのままstateの名前になる  (このコンポーネントのstateの情報ということ)
export default function menu(state = initialState, action) {
    console.log('reducers: reducersです');
    console.log('reducers: menuの内容', menu);
    //結果  stateとactionが入っている
        //var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
        //var action = arguments[1];
    
    switch (action.type) {
        case 'ADD':
            return {
                menus: [
                    ...state.menus,
                    {
                        id: action.id,
                        title: action.title,
                        isDone: false,
                        text: action.text,
                        date: action.date
                    }
                ]
            };
        case 'DELETE':
            return Object.assign({}, state, {
                menus: _.reject(state.menus, {'id': action.id})
            })
        case 'UPDATE':
            return Object.assign({}, state, {
                menus: state.menus.map((menu) => {
                    if (menu.id === action.id) {
                        return Object.assign({}, menu, {
                            text: action.text
                        })
                    }
                    return menu
                })
            });
        case 'TOGGLE_DONE':
            return Object.assign({}, state, {
                menus: state.menus.map((menu) => {
                    if (menu.id === action.id) {
                        return Object.assign({}, menu, {
                            idDone: !menu.isDone
                        })
                    }
                    return menu  
                })
            });
        case 'FIRST':  //疲労度が1です
            return {
                menus: [
                    ...state.menus,
                    {
                        id: action.id,
                        title: action.title,
                        isDone: false,
                        text: action.text,
                        degree: action.degree,
                        date: action.date
                    }
                ]
            } 
       
        default:
            return state; //当たり前だが、default値も設定させないとreducersを返せないようになる
    }
}
console.log('reducers抜けました。これからstoreに渡します。');