import React from "react";
import ReactDOM from "react-dom";

var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.greetTarget}!</p>
    );
  }
});
function username(user){
if(user)
return user.firstname+" "+user.lastname;
else
return "Stranger";
}
const user ={
firstname :"Digital",
lastname :"Watch"
}


ReactDOM.render(
  <div>
    <HelloWorld greetTarget="Batman"/>
    <HelloWorld greetTarget="Iron Man"/>
  </div>,
  document.querySelector("#container")

);
function tick(){
const element = (<div><h1 className="h1c"> {username(user)} </h1>
<div className="h1d">{new Date().toLocaleTimeString()}</div></div> );

ReactDOM.render(
element,
document.querySelector("#container2")
);
}
setInterval(tick,1000);
