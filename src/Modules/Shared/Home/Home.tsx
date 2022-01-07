import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { Button, Theme, WithStyles, StyleRules, createStyles, withStyles } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { AppState } from "Store";

interface Props extends WithStyles<typeof styles> {}
interface State {
  navigate: boolean; // specifying a state variable
}
const styles = (theme: Theme): StyleRules => createStyles({});

class Home extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      navigate: false // initializing state variable
    };
    this.autoRouteTest = this.autoRouteTest.bind(this); // bind the method where state is to updated (for automatically redering DOM)
  }

  public autoRouteTest() {
    console.log("route clicked");
    setTimeout(() => {
      console.log("auto route goes here");
      // updating a state variable
      this.setState({
        navigate: true
      });
    }, 5000);
  }

  public render() {
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/module1" push={true} />; // programaticall route
    }
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <Link to="/module1" className="link">
              {/* route to module 1 onclick */}
              <div className="card primaryColor ml-4 mr-4 tile">
                <div className="card-body  mt-5 pt-5">
                  <h6
                    className="card-title mt-5"
                    style={{ color: "white", textAlign: "center" }}
                  >
                    Module 1
                  </h6>
                </div>
              </div>
            </Link>
          </div>

          <Button onClick={this.autoRouteTest}>
            {/* calling a method on click onclick */}
            Programmatically route(click -- wait 5s)
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({});
export default compose(withStyles(styles), connect(mapStateToProps, {}))(Home);
