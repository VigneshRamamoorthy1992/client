import React from "react";
import "./Module1.css";
import Child from "../../Shared/Child/Child";
import {
  Input,
  Button,
  WithStyles,
  Theme,
  StyleRules,
  createStyles,
  withStyles
} from "@material-ui/core";
import { featureModule1RS } from "Store/featureModule1/actions";
import { connect } from "react-redux";
import { AppState } from "Store";
import { featureModule1IState } from "Store/featureModule1/types";
import { ApiConsts } from "../../../ApiConsts";
import compose from "recompose/compose";

interface Props extends WithStyles<typeof styles> {
  featureModule1RS: typeof featureModule1RS; // for updating
  moduleState: featureModule1IState;
}
interface State {
  data: string;
}
const styles = (theme: Theme): StyleRules => createStyles({});
class Module1 extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: ""
    };
    this.childDataUpdate = this.childDataUpdate.bind(this);
    this.sendToStore = this.sendToStore.bind(this);
  }
  componentDidMount() {
    console.log("Value from store: ", this.props.moduleState.success);
  }
  public parentCalled(data: any) {
    alert(data);
  }

  public childDataUpdate(event: any) {
    this.setState({
      data: event.target.value
    });
  }

  public sendToStore(event: any) {
    // calling action
    // parameter 1 - url for serive call
    // parameter 2 - type of method (GET, PUT, POST, DELETE)
    // parameter 3 - payload - optional
    // this method will call the action --> update store with initial values --> call service --> update store on response
    this.props.featureModule1RS(
      ApiConsts._BASE_URL + ApiConsts._GET_ALL_POSTS,
      ApiConsts._GET
    );
  }
  public render() {
    return (
      <div className="container">
        <Input
          type="text"
          placeholder="enter data to be sent to child"
          className="mb-4"
          onInput={this.childDataUpdate} // calling a method on user input
        ></Input>
        <br />
        <Button variant="contained" color="primary" onClick={this.sendToStore}>
          Call Service -- update store
        </Button>
        {this.props.moduleState.success ? <div>get call success</div> : null}
        <div className="mt-4">
          <Child
            dataFromParent={this.state.data} // parent to child
            parentCallback={this.parentCalled} // child to parent call
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  moduleState: state.featureModule1 // mapping app state to properties for accessing store values
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { featureModule1RS })
)(Module1);
