import React from "react";
import "./Child.css";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import {
  Button,
  withStyles,
  WithStyles,
  Theme,
  StyleRules,
  createStyles
} from "@material-ui/core";
import { connect } from "react-redux";
import { AppState } from "Store";

interface MyProps extends WithStyles<typeof styles> {
  dataFromParent: string; // value from parent
  parentCallback: (val: string) => void; // sending value to parent
}

// state
interface MyState {}

const styles = (theme: Theme): StyleRules => createStyles({});

class Child extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    // initial state
    this.state = {};
    // binding methods (method has to be binded in order to update state value)
    this.callParent = this.callParent.bind(this);
  }
  // styles
  public hrStyle = {
    display: "block",
    background: "grey",
    padding: "10px",
    color: "white",
    marginTop: "70px"
  };
  public listName = ["name1", "name2", "name3", "name4"];
  public treeStyle = {};

  componentDidMount() {
    console.log("componentDidMount", this.props);
  }

  public treeButton(element: any) {
    window.alert(element);
  }
  public getTree() {
    // dynamically generate element
    let treeSubStructure = this.listName.map((element, index) => {
      return (
        <TreeItem
          key={this.listName[index]}
          nodeId={this.listName[index]}
          onClick={() => this.treeButton(element)}
          label={this.listName[index]}
        ></TreeItem>
      );
    });
    return treeSubStructure;
  }
  public callParent() {
    // child to parent
    this.props.parentCallback("value sent from child");
  }
  public render() {
    return (
      <div className="treeStyle">
        {/* parent to child */}
        <div> data from parent: {this.props.dataFromParent}</div>
        <Button style={this.hrStyle} onClick={this.callParent}>
          send to parent
        </Button>
        <div style={this.hrStyle}>
          Dynamic element creation with select event
        </div>
        <div>
          <TreeView>{this.getTree()}</TreeView>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({});

export default connect(mapStateToProps, {})(withStyles(styles)(Child));
