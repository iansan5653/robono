import React from "react";
import { Callee, Menu, MenuOption } from "../interface";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import UndoIcon from "@material-ui/icons/Undo";
import CallSetupQuestion from "../CallSetupQuestion/CallSetupQuestion";
import CallPage from "../CallPage/CallPage";

import "./CallSetupPage.css";
import { Container } from "@material-ui/core";

interface Props {
  callee: Callee;
  menu: Menu;
  onClose?: () => void;
}

interface State {
  displayClass: "visible" | "invisible";
  currentMenu: Menu | null;
}

export default class CallSetupPage extends React.Component<Props, State> {
  container: React.ReactNode;
  selections: MenuOption[];

  constructor(props: Props) {
    super(props);
    this.state = { displayClass: "visible", currentMenu: this.props.menu };
    this.selections = [];
  }

  startCloseTransition = () => {
    this.setState({ displayClass: "invisible" });
    if (this.props.onClose) {
      window.setTimeout(this.props.onClose, 250);
    }
  };

  handleChoice = (selection: MenuOption) => {
    this.selections.push(selection);
    this.setState({ currentMenu: selection.next });
  };

  handleUndo = () => {
    this.selections.pop();
    this.setState({
      currentMenu:
        this.selections.length > 0
          ? this.selections[this.selections.length - 1].next
          : this.props.menu
    });
  };

  generatePhoneNumber = (): string => {
    let result = this.props.callee.phoneNumber;
    this.selections.forEach(selection => {
      result += `,,,${selection.dialNumber}`
    });
    return result;
  };

  render() {
    let page: React.ReactNode;
    if (this.state.currentMenu !== null) {
      page = (
        <CallSetupQuestion
          menu={this.state.currentMenu}
          onChoose={selection => this.handleChoice(selection)}
        />
      );
    } else {
      page = <CallPage phoneNumber={this.generatePhoneNumber()} />;
    }

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
        <Container className="callSetupPageContainer" maxWidth="md">
          {page}
          {this.state.currentMenu !== this.props.menu && (
            <Toolbar className="callSetupPageContainerBottom">
              <Button
                color="primary"
                startIcon={<UndoIcon />}
                variant="outlined"
                onClick={this.handleUndo}
              >
                Undo
              </Button>
            </Toolbar>
          )}
        </Container>
      </div>
    );
  }
}
