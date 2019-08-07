import React, { Component } from 'react';
import './Complete.css';
import { Redirect } from "react-router-dom";

class Complete extends Component {

    constructor(props) {
        super(props);
      this.state = {
        continue: false,
      }
    }

    keyFunction = (event) => {
    if(event.keyCode === 81) {
      this.setState((state, props) => ({
        continue: true
      }));
    }
  }

   componentDidMount(){
    document.addEventListener("keydown", this.keyFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyFunction, false);
  }


  render() {
    if(this.state.continue === true){
      return <Redirect to="/Trial_TT_1" />
    }

    return (
      <div className="Complete">
        <header className="Complete-header">
        <div className="text-container">
          <p className="Complete-text">
            Congratulations!
            <br /><br /> The first part of the experiment is over.
            <br /><br /> Now there will be <b> 4 </b> blocks of trials like the second part of the practice.
            <br /><br /> You will again use the <b> "Q"/YES </b> and <b> "E"/NO </b> keys to say whether or not you see the stripes.
            <br /><br /> But you will also hold them down to say how confident you are in your choice,
            <br /><br /> just as you did in the second part of the practice.
            <br /><br />  <b> The striped-texture in the remainder of the experiment</b>
            <br /><br />  <b> may be very difficult to see so you will have to look very hard.</b>
            <br /><br />  Sometimes it might be difficult to answer, but if you do not know, please guess.
            <br /><br /> Please respond as <b> QUICKLY </b> and as <b> ACCURATELY </b> as you <b> POSSIBLY CAN </b>
            <br /><br /><br /> PRESS "Q"/YES WHEN READY TO CONTINUE.
          </p>
        </div>
        </header>
      </div>
    );
      }
    }


export default Complete;
