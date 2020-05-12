import React from "react";
import "./Header.css";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Theme,
  createStyles,
  StyleRules,
  WithStyles,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import { AppState } from "Store";
import compose from "recompose/compose";
import { connect } from "react-redux";

interface Props extends WithStyles<typeof styles> {}
interface State {}

// Material ui custom styles
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

class Header extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {/* route to home page on click */}
            <Link to="/" className="link" style={{ color: "white" }}>
              Project Name
            </Link>
          </Typography>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state: AppState) => ({});
export default compose(
  withStyles(styles),
  connect(mapStateToProps, {})
)(Header);
