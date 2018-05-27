import React ,{ Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PropTypes from 'prop-types'
//ReactDOM.render(<h1>Hello,World!!!!</h1>, document.getElementById('root'));
/*
* demo2

var names=['Alice','study','huang'];
ReactDOM.render(
    <div>
        {
            names.map(function (name) {
                return <div>hello,{name}</div>
            })
        }
    </div>
    ,document.getElementById('root')
);
*/
/**
 * demo3

var arr=[
    <h2>demo3</h2>
    ,<h3>jsx语法</h3>
]
ReactDOM.render(
    <div>{arr}</div>
    ,document.getElementById('root')
);

 */

/**
 * demo4组件 目前已经很少使用createClass

var HelloMessage = React.createClass({
    render:function() {
    return (<h1>Hello {this.props.name}</h1>);
    },
 }
);
 */
var root = document.getElementById('root');

/**
 * 1.类名首字母必须大写
 * 2.必须只有一个根节点
 * 3.必须有render方法，输出模板
 * <HelloMessage name="studyhuang"/>
 */
class HelloMessage extends Component {
    render() {
        return (
            <div>
              <h1>Hello, {this.props.name}</h1>
                <label htmlFor="male">for属性要写成htmlFor</label><br/>
                <h4 className="hello">class属性必须写成className</h4>
            </div>
        );

    }
}

/**
 * demo5
 * this.props.children:组件所有的子节点
 */
class NodeList extends Component{
    render(){
        return (
            <ol>
                {
                    React.Children.map(this.props.children,function (child) {
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
}
/*
ReactDOM.render(
    <NodeList>
        <span>hello</span>
        <strong>haokun</strong>
        <span>tingzhu</span>
    </NodeList>
    ,root
);*/

/**
 * demo6
 * npm install prop-types
 * import PropTypes from 'prop-types'
 * PropTypes验证组件实例的属性是否符合要求
 *
 * 控制台报错
 * Warning: Failed prop type: Invalid prop `title` of type `number` supplied
 * to `MyTitle`, expected `string`. in MyTitle (at index.js:114)
 */
class MyTitle extends Component{

    render(){
        return (
            <div>
            <h2>才8点多就很困，服了{this.props.title}</h2>
                <h3>默认值initValue：{this.props.initValue}</h3>
            </div>
        );
    }
}
MyTitle.propTypes={
    title : PropTypes.string.isRequired
}
//var data =123;
//默认属性
MyTitle.defaultProps ={
    initValue: 0,
    title: "hello"
}
var data=123
// ReactDOM.render(
//     <MyTitle title={data} />
//     ,root
// );

/**
 * demo7
 * 虚拟 DOM （virtual DOM)
 * 有当它插入文档以后，才会变成真实的 DOM
 * 从组件获取真实 DOM 的节点ref属性 this.refs.[refName] 属性获取的是真实 DOM
 */
class MyComponent extends Component{
    handleClick(){
        this.refs.myText.focus;
        alert(this.refs.myText.text );
    }

    render(){
        return (
            <div>
                <input type="text" ref="myText" />
                <input type="button" value="focus the text" onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }
}

/**
 * demo8 this.state
 * this.props 表示那些一旦定义，就不再改变的特性，
 * 而 this.state 是会随着用户互动而产生变化的特性。
 */
class LinkButton extends Component{
    constructor() {
        super();
        this.state = {liked:false}//初始化状态
    }
    handleClick(){
        this.setState({
            liked : !this.state.liked
        });
    }
    render(){
        var text = this.state.liked ? 'like': 'haven\'t liked'
     return (
         <p onClick={this.handleClick.bind(this)}>you click
             ----{text} ---this</p>
     );
    }
}

/**
 * demo9 表单
 */
class InputForm extends Component{
    constructor(){
        super();
        this.state = {value:'hello!'}
    }
    handleClick(event){
        this.setState({ value: event.target.value});//读取用户输入的值
    }
    render(){
        var value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleClick.bind(this)}/>
               <p>{value}</p>
            </div>
        );
}
}

/**
 * demo10 组件的生命周期
 */

/**
 * demo11
 * ajax
 */
ReactDOM.render(
    <InputForm/>
    ,root
);
registerServiceWorker();
