import React from "react";
import "./App.css";

import MainPage from "./MainPage/MainPage";
import CallSetupPage from "./CallSetupPage/CallSetupPage";
import { Callee } from "./interface";
import { loadMenuByID, loadCompanies } from "./fetchData";
import CircularProgress from "@material-ui/core/CircularProgress";

const APP_NAME = "Miniature Carnival";

interface State {
  callSetupPage?: React.ReactNode;
  companies?: Callee[];
  loading: boolean;
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      callSetupPage: undefined,
      loading: true
    };
    this.loadCompanies();
  }

  goHome = () => {
    this.setState({
      callSetupPage: undefined
    });
  };

  goToCallSetup = async (callee: Callee) => {
    this.setState({ loading: true });
    const menu = await loadMenuByID(callee.menuID);
    this.setState({
      callSetupPage: (
        <CallSetupPage onClose={this.goHome} callee={callee} menu={menu} />
      ),
      loading: false
    });
  };

  loadCompanies = async () => {
    try {
      const companies = await loadCompanies();
      this.setState({ companies: companies, loading: false });
    } catch (e) {
      alert(
        "Sorry, there was an error loading data. Please refresh to try again!"
      );
      console.error(e);
    }
  };

  render() {
    return (
      <>
        {this.state.companies !== undefined && !this.state.loading ? (
          <MainPage
            callees={this.state.companies}
            appName={APP_NAME}
            onSelectCallee={this.goToCallSetup}
          />
        ) : (
          <CircularProgress className="loadingProgress" />
        )}
        {this.state.callSetupPage}
      </>
    );
  }
}
