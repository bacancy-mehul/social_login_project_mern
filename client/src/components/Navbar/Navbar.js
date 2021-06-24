import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { GoogleLogin } from "react-google-login";
import Icon from "./icon";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleSignIn, userLogout } from "../../actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) setIsAuthenticated(true);
  }, [token]);

  const googleSuccess = async (response) => {
    const { tokenId } = response;
    if (tokenId) {
      dispatch(googleSignIn({ tokenId }));
    } else {
      alert("Google Sign In was unsuccessful. Try again later");
    }
  };

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");

  const logout = () => {
    dispatch(userLogout());
    setIsAuthenticated(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Bacanpost
          </Typography>
          <Button
            component={Link}
            to="/"
            className={classes.menuButton}
            color="inherit"
          >
            Posts
          </Button>
          <Button
            component={Link}
            to="/user"
            className={classes.menuButton}
            color="inherit"
          >
            Users
          </Button>
          {isAuthenticated ? (
            <Button
              className={classes.menuButton}
              color="secondary"
              size="small"
              variant="contained"
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <GoogleLogin
              clientId=""
              render={(renderProps) => (
                <Button
                  className={classes.menuButton}
                  color="secondary"
                  size="small"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                >
                  Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
