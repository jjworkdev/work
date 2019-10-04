var React= require('react');
var ReactDOM = require('react-dom');

class Hello extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            msg: "W3Adda"
        };
        this.updateMsg = this.updateMsg.bind(this);
   }

    updateMsg() {
        this.setState({
            msg: "ReactJS"
        });
    }    

    render() {
        return (
           <div>
             <h1>Hello {this.state.msg}!</h1>
             <button onClick={this.updateMsg}>Click me!</button>
           </div>   
        )
    }
}



ReactDOM.render(<Hello />, document.getElementById('hello-wrapper'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
