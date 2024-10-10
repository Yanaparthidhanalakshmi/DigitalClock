import React,{Component} from "react";
import "../App.css"
class  DigitalClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleTimeString(),
      };
    }
    componentDidMount() {
      this.timerID = setInterval(()=>this.tick(), 1000);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }
    render() {
      return (
        <div className="c1">
            {/* <h2>DIGITAL CLOCK</h2> */}
          <button className="c3">{this.state.time}</button>
        </div>
      );
    }
  }
  export default  DigitalClock