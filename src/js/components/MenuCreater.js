import React from 'react';
import { connect } from 'react-redux'
import { addMenu, createMenu } from '../actions/index'
import PropTypes from 'prop-types';

//component(MenuCreater)
  //Menuを作るためのメソッドをdispachするのでconnectを使う


//dispachを使って、actionsに渡す


//このコンポーネントのデータ
  //val(モーダルのtextareaのデータ)
  //valは投稿内容
class MenuCreater extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            degree: '',
            isDegree: false //degree(疲労度が存在するかどうか)
        }
        this.showModal = this.showModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);

        this.firstDegree = this.firstDegree.bind(this);
        this.secondDegree = this.secondDegree.bind(this);
        this.thirdDegree = this.thirdDegree.bind(this);
        this.fourthDegree = this.fourthDegree.bind(this);
        this.fifthDegree = this.fifthDegree.bind(this);
        
        // this.handleDate = this.handleDate.bind(this);

    }
    createHashId() {
        console.log('component(MenuCreater): 一意のIDを作ります');
        return Math.random().toString(36).slice(-16);
    }
    showModal() {
        console.log('component(MenuCreater): モーダルを見せます');
        $('#js-modal').show();
        console.log('component(MenuCreater)この時MenuCreaterにある値(val): ', this.state.val);
        console.log('component(MenuCreater)この時MenuCreaterにある値(degree): ', this.state.degree);
    }
    handleChange(e) {
        console.log('component(MenuCreater): handleChangeが呼ばれました');
        this.setState({
            val: e.target.value
        });
    }
    handleKeyUp(e) { //テキスト確定
        if (e.keyCode === 13 && e.shiftKey === true) {
            console.log('component(MenuCreater): モーダルを非表示にします');
            $('#js-modal').hide();
            console.log('component(MenuCreater): Enter+ShiftKeyが押されたので確定します');
            const val = e.target.value;
            const degree = this.state.degree;
            const title = 'メモ';
            const titleRun = 'ダッシュ系';
            const titleSlowRun = 'ロングスプリント';
            const titleWeight = '筋力トレーニング';
            const titleFitness = '体幹トレーニング';
            const titleJump = 'ジャンプ系トレーニング';
            const titleRest = '完全休養'

            const valRun = 'フォーム修正や自分の弱み強みを見つける分析のための練習です。コーンを10m毎に置いて100mを走り、10m毎のラップを取ります。そのデータを元に自分の走りを分析します。50m走でやってもOK。';  //これを固定のテキストとする
            const valWeight = 'スクアット80%~10*4, デッドリフト80%~10*4, パワークリーン90%*5*2';
            const valFitness = '軽い体幹トレーニングをします。';
            const valJump = 'ハードルジャンプ5足長*8台*5, バウンディング*30m*5, 60m';
            const valRest = '完全休養です。1日中ダラダラしてください';
            const valSlowRun = 'ゆっくり走ります。200m*60*8, 60m*80%*2';

            // this.handleDate();
            let now = new Date();
            let y = now.getFullYear();
            let m = now.getMonth() + 1;

            let d = now.getDate();
            let dSecond = now.getDate() + 1;
            let dThird = now.getDate() + 2;
            
            let w = now.getDay();
            let wSecond = now.getDay() + 1;
            let wThird = now.getDay() + 2;

            switch (w) {
                case w = 5://今日が金曜日の場合
                    wThird = w - 5;
                    break;
                case w - 6://今日が日曜日の場合
                    wSecond = w - 6;
                    break;
            }
            
            console.log('component(MenuCreater): 今日の曜日', w); //5
            console.log('component(MenuCreater): 明日の曜日', wSecond); //6
            console.log('component(MenuCreater): 明後日の曜日', wThird); //7

            let wd = ['日', '月', '火', '水', '木', '金', '土'];
            let date = y + '年' + m + '月' + d + '日' + '(' + wd[w] + ')';
            let dateSecond = y + '年' + m + '月' + dSecond + '日' + '(' + wd[wSecond] +  ')'; 
            let dateThird = y + '年' + m + '月' + dThird + '日' + '(' + wd[wThird] + ')'; 
            console.log(' 今日のdate', date);

            

            if (val.length >=2  && degree) {  //valとdegreeどっちも入力がある場合
                console.log('component(MenuCreater): valとdegreeどちらも入力あります');
                console.log('component(MenuCreater): valとdegreeとdateをactionsに渡します。dispachでaddMenuメソッドを呼びます');
                console.log('component(MenuCreater):actionに渡す値(val)',this.state.val);
                console.log('component(MenuCreater):actionに渡す値(degree)',this.state.degree);
                console.log('component(MenuCreater):actionに渡す値(date)',date);
                this.props.dispatch(addMenu(this.createHashId(),title, val, degree, date));  //propsでdispachを受け取っている  connect(自分自身)

                
            } else if (val.length >=2  && !degree) {  //valの入力だけある場合　-> ただ投稿させるだけにする
                console.log('component(MenuCreater): valだけの入力があります');
                console.log('component(MenuCreater): valとdateをactionsに渡します。dispachでaddMenuメソッドを呼びます');
                console.log('component(MenuCreater):actionに渡す値(val)',this.state.val);
                console.log('component(MenuCreater):actionに渡す値(date)', date); //ここでのdateは読み込まれている
                console.log('component(MenuCreater):degreeの値(degree)', this.state.degree);
                this.props.dispatch(addMenu(this.createHashId(), title, val, degree, date));
            
                    
            } else if (val.length == 1) { //テキストは空で入力された時は自動的に用意したメニューを表示させる
                console.log('component(MenuCreater): valの値は入力されませんでした。自動的にメニューを作成します');
                
                if (degree) {
                    console.log('component(MenuCreater): degreeの値はあります', this.state.degree);
                    switch (this.state.degree) { 
                        case 'first':
                            this.firstDegree();
                            console.log('component(MenuCreater): 疲労度1のメニューを作成します');
                            this.props.dispatch(createMenu(this.createHashId(), titleRun, valRun,  degree, date));  //引数として ハッシュ化ID , 内容の文章, degreeの値, 日付
                            this.props.dispatch(createMenu(this.createHashId(), titleJump, valWeight,  degree, dateSecond));
                            this.props.dispatch(createMenu(this.createHashId(), titleWeight, valJump,  degree, dateThird));
                            break;
                        case 'second':
                            this.secondDegree();
                            console.log('component(MenuCreater): 疲労度２のメニューを作成します');
                            this.props.dispatch(createMenu(this.createHashId(), titleRest, valRest,  degree, date));  //引数として ハッシュ化ID , 内容の文章, degreeの値, 日付
                            this.props.dispatch(createMenu(this.createHashId(), titleRun, valRun,  degree, dateSecond));
                            this.props.dispatch(createMenu(this.createHashId(), titleWeight, valWeight,  degree, dateThird));
                            break;
                        case 'third':
                            console.log('component(MenuCreater): 疲労度3のメニューを作成します');
                            this.thirdDegree();
                            this.props.dispatch(createMenu(this.createHashId(), titleRest, valRest,  degree, date));  //引数として ハッシュ化ID , 内容の文章, degreeの値, 日付
                            this.props.dispatch(createMenu(this.createHashId(), titleSlowRun, valSlowRun,  degree, dateSecond));
                            this.props.dispatch(createMenu(this.createHashId(), titleWeight, valWeight,  degree, dateThird));
                            break;
                        case 'fourth':
                            console.log('component(MenuCreater): 疲労度4のメニューを作成します');
                            this.fourthDegree();
                            this.props.dispatch(createMenu(this.createHashId(), titleRest, valRest,  degree, date));  //引数として ハッシュ化ID , 内容の文章, degreeの値, 日付
                            this.props.dispatch(createMenu(this.createHashId(), titleSlowRun, valSlowRun,  degree, dateSecond));
                            this.props.dispatch(createMenu(this.createHashId(), titleFitness, valFitness,  degree, dateThird));
                            break;
                        case 'fifth':
                            console.log('component(MenuCreater): 疲労度5のメニューを作成します');
                            this.fifthDegree();
                            this.props.dispatch(createMenu(this.createHashId(), titleRest, valRest,  degree, date));  //引数として ハッシュ化ID , 内容の文章, degreeの値, 日付
                            this.props.dispatch(createMenu(this.createHashId(), titleRest, valRest,  degree, dateSecond));
                            this.props.dispatch(createMenu(this.createHashId(), titleFitness, valFitness,  degree, dateThird));
                            break;
                        default: 
                    }
                }
            }
            
            console.log('component(MenuCreater):stateをリセットします'); //ついでにisDegreeも反転させておく
              this.setState({
                 val: '',
                 degree: '',
              });
        }
    }


    firstDegree() {
        console.log('component(MenuCreater): 疲労度1がクリックされました');
        this.setState({
            degree: 'first',
            isDegree :!this.state.isDegree
        });
    }
    secondDegree() {
        console.log('component(MenuCreater): 疲労度2がクリックされました');
        this.setState({
            degree: 'second',
            isDegree :!this.state.isDegree
        });
    }
    thirdDegree() {
        console.log('component(MenuCreater): 疲労度3がクリックされました');
        this.setState({
            degree: 'third',
            isDegree :!this.state.isDegree
        });
    }
    fourthDegree() {
        console.log('component(MenuCreater): 疲労度4がクリックされました');
        this.setState({
            degree: 'fourth',
            isDegree :!this.state.isDegree
        });
    }
    fifthDegree() {
        console.log('component(MenuCreater): 疲労度5がクリックされました');
        this.setState({
            degree: 'fifth',
            isDegree :!this.state.isDegree
        });
    }
    // handleDate() {
    //     let now = new Date();
    //     let y = now.getFullYear();
    //     let m = now.getMonth() + 1;
    //     let d = now.getDate();
    //     let w = now.getDay();
    //     let wd = ['日', '月', '火', '水', '木', '金', '土'];

    //     let date = y + '年' + m + '月' + d + '日' + '(' + wd[w] + ')';
    //     console.log('component(MenuCreater): 今日のdate', date);
    // }



    render() {
        console.log('component(MenuCreater): valの値render', this.state.val);
        console.log('component(MenuCreater): degreeの値render', this.state.degree);
        console.log('component(MenuCreater): 疲労度(render)は' + this.state.degree + 'です');
        console.log('component(MenuCreater): isDegreeの値render', this.state.isDegree);

        const colorFirst = $('.c-modalBtn__first');   //ナンバークリックで色を変えること　クリックされたらisDegreeを反転させる
        const colorSecond = $('.c-modalBtn__second');
        const colorThird = $('.c-modalBtn__third');  
        const colorFourth = $('.c-modalBtn__fourth');   
        const colorFifth = $('.c-modalBtn__fifth');
        
        if (this.state.isDegree === true) {
            switch (this.state.degree) {
                case 'first':
                    colorFirst.addClass("c-modal__colorFirst")
                    break;
                case 'second':
                    colorSecond.addClass("c-modal__colorSecond")
                    break;
                case 'third':
                    colorThird.addClass("c-modal__colorThird")
                    break;
                case 'fourth':
                    colorFourth.addClass("c-modal__colorFourth")
                    break;
                case 'fifth':
                    colorFifth.addClass("c-modal__colorFifth")
                    break;
                default:
            }   
        }
     
        if (this.state.isDegree === false) {  //もしisDegreeがfalseだったら、
            colorFirst.removeClass("c-modal__colorFirst")
            colorSecond.removeClass("c-modal__colorSecond")
            colorThird.removeClass("c-modal__colorThird")
            colorFourth.removeClass("c-modal__colorFourth")
            colorFifth.removeClass("c-modal__colorFifth") 
        }

       

        return (
          <div>
            <section className="p-createMenu" id="js-createMenu">
                <div className="c-addMenu" id="js-addMenu" onClick={this.showModal}>
                    <i className="fal fa-3x fa-plus-circle"></i>
                </div>
                <h1>how's it going??</h1>
            </section>

             <section className="p-modalWindow" id="js-modal" onClick={this.showModal}>
                <h2>今日の疲労度は...</h2>
                <div className="c-modalHead">
                    <h2><span id="js-modalBtn"  className="c-modalHead__btn c-modalBtn__first c-modalHead__first" onClick={this.firstDegree}>1</span ></h2>
                    <h2><span id="js-modalBtn"  className="c-modalHead__btn c-modalBtn__second" onClick={this.secondDegree} >2</span ></h2>
                    <h2><span id="js-modalBtn"  className="c-modalHead__btn c-modalBtn__third"  onClick={this.thirdDegree} >3</span ></h2>
                    <h2><span id="js-modalBtn"  className="c-modalHead__btn c-modalBtn__fourth" onClick={this.fourthDegree} >4</span ></h2>
                    <h2><span id="js-modalBtn"  className="c-modalHead__btn c-modalBtn__fifth"  onClick={this.fifthDegree} >5</span ></h2>
                </div>
                <div className="c-modalBody">
                    <h2>やりたいメニューがあれば追加できます。(なければshift + enterで確定)</h2>
                    <textarea name="" id="" cols="30" rows="10"  onChange={this.handleChange}  val={this.state.val} onKeyUp={this.handleKeyUp}/>
                </div>
            </section>
          </div>
        
        );
    }
}


MenuCreater.propTypes = {
    dispatch: PropTypes.func.isRequired
};



export default connect()(MenuCreater)