import React, { Component } from 'react';
import './Continue_rating.css';
import { Redirect } from "react-router-dom";

class Continue_rating extends Component {

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
          return <Redirect to="/TrialQ" />
        }

      return (
        <div className="Continue_rating">
          <header className="Continue_rating-header">
          <div className="text-container">
            <p className="Continue_rating-text">
              Great!
              <br /><br />  You have completed the practice tests. Now onto the real test.
              <br /><br />  It is important to note that the striped-texture in the practice session was there to make sure
              <br /><br />  you understood what to do, with very obvious and impossible-to-see stripes.
              <br /><br />  <b> The striped-texture in the remainder of the experiment</b>
              <br /><br />  <b> may be very difficult to see so you will have to look very hard.</b>
              <br /><br />  Sometimes it might be difficult to answer, but if you do not know, please guess.
              <br /><br />  For this first task, you will not be asked to rate your confidence so just quickly press
              <br /><br />  and release the button as soon as the screen flashes.
              <br /><br />  Again, you will press the <b> Q/Yes </b> button when you see the stripes,
              <br /><br />  and the <b> E/No </b> button when you do not.
              <br /><br />  Again, make sure you give a response every time you hear the tone.
              <br /><br />  Please respond as <b> QUICKLY </b> and as <b> ACCURATELY </b> as you <b> POSSIBLY CAN </b>
              <br /><br /><br /> PRESS "Q"/YES TO BEGIN THE EXPERIMENT.
            </p>
          </div>
          </header>
        </div>
      );
    }
}

export default Continue_rating;
