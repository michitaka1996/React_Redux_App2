import { connect } from 'react-redux'
import {  updateMenu, deleteMenu, toggleDone } from '../actions'
import MenuList from '../components/MenuList';
import MenuCreater from '../components/MenuCreater';

//Reduxのcontainerは、だいたい決まった形になる

console.log('containers: 親component(MenuList)へdispachやstateをマッピングします');


//state　重要
//stateっていうのは、reducer名がそのままstateの名前になる  (このコンポーネントのstateの情報ということ)  task.~~で使うことができる
  //つまりreducerで指定しているデータの総称が、stateとして使うことができる
  //reducersで、storeに流すデータを設定した(初期値)が、その中のデータを取り出したい場合は
  　//state.reducer名.プロパティ名になるので注意!
const mapStateToProps = state => {
    return {
        menus: state.menu.menus
    }
};






//MenuListでコールバックさせるためのメソッドをマッピングする    引数もマッピングさせるイメージで考える
const mapDispachToProps = dispatch => {

    return {
        onEnterUpdateMenu: (id, text) => {     
            dispatch(updateMenu(id, text));
        },
        onClickRemove: id => {
            dispatch(deleteMenu(id));
        },
        onClickToggleDone: id => {
            dispatch(toggleDone(id));
        }
        // createFirstMenu: (id, text, date) => {
        //     dispatch(firstMenu(id, text, date));   
        // }
    }
};

console.log('containers: mapDispachToPropの値', mapDispachToProps);



//containerで第２引数で渡したいコンポーネント
　//第１引数のでは、state,action
　//stateをそのまま第２引数のコンポーネントで受け取る場合は、第１引数ではstate => state　という書き方　
export default connect(mapStateToProps, mapDispachToProps)(MenuList, MenuCreater) //menuListに渡すもの
