import React from "react";
import { Callee } from "../interface";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import PageContainer from "../PageContainer/PageContainer";
import Button from "@material-ui/core/Button";
import UndoIcon from "@material-ui/icons/Undo";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

interface Props {
  callee: Callee;
  //menu: Menu;
  onClose?: () => void;
}

interface State {
  //displayedCallOptions: CallOption[];
}

export default class MainPage extends React.Component<Props, State> {
  //constructor(props: Props) {
  //  super(props);
  //}

  render() {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={
                this.props.onClose ? this.props.onClose.bind(this) : undefined
              }
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" component="h2">
              Call Setup: {this.props.callee.name}
            </Typography>
          </Toolbar>
        </AppBar>
        <PageContainer>
          <Typography variant="h5" component="h3" gutterBottom>
            What is the purpose of your call?
          </Typography>
          <RadioGroup>
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="I have an issue with my service"
            />
            <FormControlLabel
              value={2}
              control={<Radio />}
              label="I want to modify my plan"
            />
            <FormControlLabel
              value={3}
              control={<Radio />}
              label="I want to open a new plan"
            />
            <FormControlLabel
              value={4}
              control={<Radio />}
              label="I need technical support"
            />
          </RadioGroup>
          <Toolbar className="containerBottom">
            <Button color="primary" startIcon={<UndoIcon />} variant="outlined">
              Undo
            </Button>
          </Toolbar>
        </PageContainer>
      </>
    );
  }
}
