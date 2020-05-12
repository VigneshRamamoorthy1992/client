import React from "react";
import "./Footer.css";

// class file without material styles and redux-store
interface Props {}
interface State {
  curTime: any; // specify variable to be used in state here
}
export default class Footer extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    // initialize state variable
    this.state = {
      curTime: new Date().toLocaleDateString()
    };
  }
  componentDidMount() {
    // for constantly updating the DOM
    // updating state variable
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  public render() {
    return (
      <div className="footer">
        {/* values displayed from the state will update DOM automatically on state change */}
        <div>Footer | {this.state.curTime}</div>
      </div>
    );
  }
}
