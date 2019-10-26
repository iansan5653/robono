import React from "react";
import { Callee, Menu } from "../interface";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PageContainer from "../PageContainer/PageContainer";
import Button from "@material-ui/core/Button";
import UndoIcon from "@material-ui/icons/Undo";
import CallSetupQuestion from "../CallSetupQuestion/CallSetupQuestion";

import "./CallSetupPage.css";

interface Props {
  callee: Callee;
  menu: Menu;
  onClose?: () => void;
}

interface State {
  displayClass: "visible" | "invisible";
}

export default class CallSetupPage extends React.Component<Props, State> {
  container: React.ReactNode;

  constructor(props: Props) {
    super(props);
    this.state = { displayClass: "visible" };
  }

  startCloseTransition = () => {
    this.setState({ displayClass: "invisible" });
    if (this.props.onClose) {
      window.setTimeout(this.props.onClose, 250);
    }
  };

  render() {
    return (
      <div className={`callSetupContainer ${this.state.displayClass}`}>
        <AppBar position="static">
          <Toolbar className="callSetupAppBar">
            <IconButton
              edge="start"
              color="inherit"
              onClick={this.startCloseTransition}
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="h2" display="inline">
              Call Setup: {this.props.callee.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <PageContainer>
          <CallSetupQuestion
            menu={this.props.menu}
            onChoose={selection => console.log(selection.text)}
          />
          <Toolbar className="containerBottom">
            <Button color="primary" startIcon={<UndoIcon />} variant="outlined">
              Undo
            </Button>
          </Toolbar>
        </PageContainer>
      </div>
    );
  }
}
