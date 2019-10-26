import React from "react";
import "./App.css";

import MainPage from "./MainPage/MainPage";
import CallSetupPage from "./CallSetupPage/CallSetupPage";
import { Callee } from "./interface";
import { loadMenuByID, loadCompanies } from "./fetchData";
import CircularProgress from '@material-ui/core/CircularProgress';

const APP_NAME = "Miniature Carnival";

interface State {
  callSetupPage?: React.ReactNode;
  companies?: Callee[];
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      callSetupPage: undefined
    };
    this.loadCompanies();
  }

  goHome = () => {
    this.setState({
      callSetupPage: undefined
    });
  };

  goToCallSetup = async (callee: Callee) => {
    const menu = await loadMenuByID(callee.menuID);
    this.setState({
      callSetupPage: (
        <CallSetupPage onClose={this.goHome} callee={callee} menu={menu} />
      )
    });
  };

  loadCompanies = async () => {
    const companies = await loadCompanies();
    this.setState({ companies: companies });
  }

  render() {
    return (
      <>
        {this.state.companies !== undefined ? <MainPage
          callees={this.state.companies}
          appName={APP_NAME}
          onSelectCallee={this.goToCallSetup}
        /> : <CircularProgress className="loadingProgress" />}
        {this.state.callSetupPage}
      </>
    );
  }
}
