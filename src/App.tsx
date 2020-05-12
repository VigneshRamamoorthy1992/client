import React from "react";
import "./App.css";
import {
  Theme,
  createStyles,
  StyleRules,
  WithStyles,
  withStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core";
import Home from "./Modules/Shared/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { blue } from "@material-ui/core/colors";
import Header from "./Modules/Shared/Header/Header";
import Footer from "./Modules/Shared/Footer/Footer";

// lazy load modules
const Module1 = React.lazy(() =>
  import("./Modules/FeatuesModule1/Module1/Module1")
);

interface MyProps extends WithStyles<typeof styles> {}

interface MyState {}

// specific styling for material ui
const styles = (theme: Theme): StyleRules =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  });

// creating custom material theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    }
  }
});
class App extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Router>
          {/* routing component */}
          <ThemeProvider theme={theme}>
            {/* material ui theme  provider */}
            <Header /> {/* child component */}
            <React.Suspense /* lazy load loader */
              fallback={
                <div className="divLoader">
                  <svg
                    className="svgLoader"
                    viewBox="0 0 100 100"
                    width="10em"
                    height="10em"
                  >
                    <path
                      ng-attr-d="{{config.pathCmd}}"
                      ng-attr-fill="{{config.color}}"
                      stroke="none"
                      d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                      fill="#51CACC"
                      transform="rotate(179.719 50 51)"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 50 51;360 50 51"
                        keyTimes="0;1"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </path>
                  </svg>
                </div>
              }
            >
              <Switch>
                {/* routing components */}
                <Route exact path="/" component={Home} /> {/*  route 1 */}
                <Route path="/module1" component={Module1} /> {/*  route 2 */}
              </Switch>
            </React.Suspense>
            <Footer />
          </ThemeProvider>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);
