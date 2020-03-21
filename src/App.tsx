import React from "react";
import "./App.css";
// import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { SvgIconProps, SvgIcon, Button, makeStyles } from "@material-ui/core";
import MuiTreeView from "material-ui-treeview";
import { node } from "prop-types";

function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props: SvgIconProps) {
  return (
    <SvgIcon
      className="close"
      fontSize="inherit"
      style={{ width: 14, height: 14 }}
      {...props}
    >
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

interface MyProps {}

interface MyState {
  name: string;
  listName: any;
  tree: any;
  selectedId: any;
  oneTree: RenderTree;
}

interface RenderTree {
  id: string;
  name: string;
  children: RenderTree[];
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      selectedId: "",
      listName: ["name1", "name2", "name3", "name4"],
      tree: [
        {
          id: "a1",
          value: "Parent A",
          nodes: [
            { id: "a2", value: "Child A", nodes: [] },
            { id: "a3", value: "Child B", nodes: [] }
          ]
        },
        {
          id: "a4",
          value: "Parent B",
          nodes: [
            {
              id: "a5",
              value: "Child C",
              nodes: []
            },
            {
              id: "a6",
              value: "Parent C",
              nodes: [
                { id: "a7", value: "Child D", nodes: [] },
                { id: "a8", value: "Child E", nodes: [] },
                { id: "a9", value: "Child F", nodes: [] }
              ]
            }
          ]
        }
      ],
      oneTree: {
        id: "root",
        name: "Parent",
        children: [
          {
            id: "1",
            name: "Child - 1",
            children: []
          },
          {
            id: "3",
            name: "Child - 3",
            children: [
              {
                id: "4",
                name: "Child - 4",
                children: []
              }
            ]
          }
        ]
      }
    };
    this.addChildNode = this.addChildNode.bind(this);
    this.onLeafClicked = this.onLeafClicked.bind(this);
    this.onParentClicked = this.onParentClicked.bind(this);
    this.addOneChildNode = this.addOneChildNode.bind(this);
  }
  public hrStyle = {
    display: "block",
    background: "grey",
    padding: "10px",
    color: "white",
    marginTop: "70px"
  };
  public listName = ["name1", "name2", "name3", "name4"];
  public treeStyle = {};
  public addChildNode() {
    let newTree = this.state.tree;
    newTree.forEach((element: any, index: number) => {
      if (element.id === this.state.selectedId) {
        newTree[index].nodes.push({ id: uuidv4(), value: uuidv4(), nodes: [] });
      } else {
        element.nodes.forEach((ielement: any, iindex: number) => {
          if (ielement.id === this.state.selectedId) {
            newTree[index].nodes[iindex].nodes.push({
              id: uuidv4(),
              value: uuidv4(),
              nodes: []
            });
          }
        });
      }
    });
    this.setState({
      tree: newTree
    });
  }

  public addOneChildNode() {
    let newTree = this.state.oneTree;
    newTree.children.forEach((element: any, index: number) => {
      if (element.id === this.state.selectedId) {
        newTree.children[index].children.push({
          id: uuidv4(),
          name: uuidv4(),
          children: []
        });
      } else {
        element.children.forEach((ielement: any, iindex: number) => {
          if (ielement.id === this.state.selectedId) {
            newTree.children[index].children[iindex].children.push({
              id: uuidv4(),
              name: uuidv4(),
              children: []
            });
          }
        });
      }
    });
    this.setState({
      oneTree: newTree
    });
  }

  public clickedNode(nodeId: any) {
    console.log(nodeId);
  }

  onLeafClicked(val: any) {
    let newSelectedId = val.id;
    this.setState({
      selectedId: newSelectedId
    });
    console.log("leaf clicked", val.id);
  }
  onParentClicked(val: any) {
    let newSelectedId = val.id;
    this.setState({
      selectedId: newSelectedId
    });
    console.log("parent clicked", val.id);
  }

  public oneNodeClicked(value: any) {
    console.log("one parent clicked", value);
  }

  public renderFullTree(nodes: RenderTree): any {
    return (
      <TreeItem
        key={nodes.id}
        nodeId={nodes.id}
        label={nodes.name}
        onClick={() => this.onLeafClicked(nodes)}
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map(node => this.renderFullTree(node))
          : null}
      </TreeItem>
    );
  }
  public treeButton(element: any) {
    console.log("selected elemet ", element);
  }
  public getTree() {
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
  public render() {
    return (
      <div className="treeStyle">
        <div style={this.hrStyle}>One</div>
        <Button
          onClick={this.addOneChildNode}
          color="primary"
          variant="contained"
          style={{ margin: "15px" }}
        >
          ADD
        </Button>
        <TreeView
          // className={classes.root}
          // defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={["root"]}
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<CloseSquare />}
          // defaultExpandIcon={<ChevronRightIcon />}
        >
          {this.renderFullTree(this.state.oneTree)}
        </TreeView>
        <div style={this.hrStyle}>Two</div>
        <div>
          <TreeView>{this.getTree()}</TreeView>
        </div>
        <div style={this.hrStyle}>Three</div>
        <Button
          onClick={this.addChildNode}
          variant="contained"
          color="primary"
          style={{ margin: "15px" }}
        >
          add
        </Button>
        <div>
          <MuiTreeView
            // searchTerm="Parent A"
            // softSearch={true}
            tree={this.state.tree}
            onLeafClick={this.onLeafClicked}
            onParentClick={this.onParentClicked}
          />
        </div>
      </div>
    );
  }
}
