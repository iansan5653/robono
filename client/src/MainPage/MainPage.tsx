import React from "react";
import CallList from "../CallList/CallList";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {Callee} from "../interface";
import "./MainPage.css";
import {Container} from "@material-ui/core";

interface Props {
  callees: Callee[];
  appName: string;
  onSelectCallee: (callee: Callee) => void;
}

interface State {
  displayedCallees: Callee[];
}

function compareStringsForSort(a: string, b: string): number {
  if (a > b) {
    return 1;
  }
  if (b > a) {
    return -1;
  }
  return 0;
}

export default class MainPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displayedCallees: this.props.callees.sort((a, b) =>
        compareStringsForSort(a.name, b.name)
      )
    };
  }

  filterList(filter: string): void {
    this.setState({
      displayedCallees: this.props.callees.filter((option) =>
        option.name.toLowerCase().includes(filter.toLowerCase().trim())
      )
    });
  }

  render() {
    return (
      <Container maxWidth="md" className="mainPageContainer">
        <Typography
          variant="h6"
          component="h1"
          gutterBottom
          color="primary"
          className="pageTitle"
        >
          {this.props.appName}: Skip the robo-menu.
        </Typography>
        <TextField
          id="search"
          className="searchBox"
          type="search"
          variant="outlined"
          fullWidth
          label="Filter"
          onChange={(event) => {
            this.filterList(event.target.value);
            console.log(event.target.value);
          }}
          autoComplete="off"
        />
        <Typography
          variant="body2"
          component="p"
          gutterBottom
          className="promptText"
        >
          Select a service to call:
        </Typography>
        <CallList
          callees={this.state.displayedCallees}
          onSelectCallee={this.props.onSelectCallee.bind(this)}
        />
        <Typography
          variant="body2"
          component="footer"
          color="textSecondary"
          align="center"
          className="footer"
        >
          {this.props.appName} is a project from HackGT 2019.
        </Typography>
      </Container>
    );
  }
}
