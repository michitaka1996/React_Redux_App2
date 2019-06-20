import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';



//子コンポーネント
//一個一個のメニュー管理のためのコンポーネント
  //Menuを表示させる
  //doneさせるためにクラス名を動的に変更するのでclassNameを使用する
  //Menuコンポーネントを統括しているMenuListに渡すことが必要　(注意)


//state(このコンポーネントだけで使うデータ)
 //text 編集用の投稿内容
 //editMode(編集のモードが)
class Menu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          text: this.props.text, //actions~~storeからまわってきたもの
          editMode: false
        }
      this.handleChangeText = this.handleChangeText.bind(this);
      this.handleKeyUpClose = this.handleKeyUpClose.bind(this);
      this.handleShowEdit = this.handleShowEdit.bind(this);  //stateのデータを変更して完結させることができるのでthisバインド

    }
  handleChangeText(e) {
   console.log('子component(Menu)集完了しました！stateを更新します');
    this.setState({
      text: e.target.value
    });
  }
  handleKeyUpClose(e) {
    if (e.keyCode === 13 && e.shiftKey === true) {
      console.log('子component(Menu) : この内容で編集を確定します。');
      this.setState({
        editMode: false
      });
      console.log('子component(Menu) :アップデートします。アップデートするためにpropsを実行します。');
      console.log('子component(Menu) : 変更した内容', e.currentTarget.value); 
      this.props.onEnterUpdateMenu(e.currentTarget.value);
    }
  }
  handleShowEdit() {
    console.log('子component(Menu):　編集します');
    this.setState({
      editMode: true
    });
  }


  render() {
    console.log('子component(Menu): textとは', this.state.text);
    console.log('子component(Menu): editModeとは', this.state.editMode);
      //クラスも動的に変更させること
    　　//クラスがこのままだとモック通り
    　　　//どこのスタイルを変えて行きたいか、->
         //done fa-check-circleをクリックしたらカラーをかえる　どこのp-task(全体)
         //delete fa-times-circleをクリックしたら非表示に  どこの　　p-task(全体)
    　　　//edit   c-menu__body をクリックしたら　編集モードに 編集用のhtmkをshow()する
    
    //propsで受け取っているもの
     //注意！ ここでこのコンポーネントにpropとして指定しないとエラーになる
    const { onClickRemove, onClickToggleDone } = this.props;
    console.log('子component(Menu): Menuコンポーネントで指定したthis.propsの中身', this.props);

    const textarea = (this.state.editMode) ?
      <textarea className="c-menu__editText" value={this.state.text} type="text"
                onChange={this.handleChangeText} onKeyUp={this.handleKeyUpClose}/> :
      <div className="c-menu__body">
          {/* ここに指定したメニューを表示させる */}
          <ul>
            <li>{this.state.text}</li>
          </ul>
      </div>;
    
    return (
         <section className="p-task">
                <div className="c-menu__check" onClick={onClickToggleDone}>
                    <i className="far fa-3x fa-check-circle"></i>
                </div>
                <div className="c-menu__contents">
                    <h3 className="c-menu__title">ここを動的にかえる &emsp; <div className="c-menu__date" id="menu-date">{this.props.date}</div></h3> 
                    {textarea}
                    <div className="c-menu__edit" onClick={this.handleShowEdit}>
                        <i className="fal fa-2x fa-edit"></i>
                    </div>
                </div>
                <div className="c-menu__delete" onClick={onClickRemove}>
                    <i className="far fa-2x fa-times-circle"></i>
                </div>
         </section>
      );
    }
}

//このコンポーネント内で使う、各プロパティやメソッドは、ここpropTypesで制限する必要がある
  //MenuはMenuList、containerからの受け渡しがあるので、Menuのstateで使うthis.propsのtextだけでなく、
  //id、idDone　も必要である
Menu.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onEnterUpdateMenu: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  onClickToggleDone: PropTypes.func.isRequired,
};

export default Menu;