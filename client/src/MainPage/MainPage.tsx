import React from "react";
import CallList from "../CallList/CallList";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import {Callee} from "../interface";
import "./MainPage.css";
import {Container} from "@material-ui/core";
import Link from "@material-ui/core/Link";

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
        <div className="aboveSearch">
          <img
            src="./android-chrome-192x192.png"
            alt="RoBoNo Logo"
            className="logo"
          />
          <Typography
            variant="h6"
            component="h1"
            color="primary"
            className="pageTitle"
          >
            {this.props.appName}
          </Typography>
        </div>
        <TextField
          id="search"
          className="searchBox"
          type="search"
          variant="outlined"
          fullWidth
          label="Filter"
          onChange={(event) => {
            this.filterList(event.target.value);
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
          Made with ♥ at <Link href="http://hack.gt">HackGT 2019</Link>.
        </Typography>
      </Container>
    );
  }
}
