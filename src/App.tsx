import React from "react";
import "./App.css";

import MainPage from "./MainPage/MainPage";
import CallSetupPage from "./CallSetupPage/CallSetupPage";
import { Callee } from "./interface";

const APP_NAME = "App Name";

const companies = [
  { name: "Comcast", description: "Telecom" },
  { name: "Comcast", description: "Telecom" },
  { name: "University of North Florida", description: "University" },
  { name: "Bank of America", description: "Bank" },
  { name: "Disney", description: "Theme Park" },
  { name: "Georgia Tech", description: "University" },
  { name: "Samsung", description: "Telecom" },
  { name: "Comcast", description: "Telecom" }
];

function goHome() {}

interface State {
  page: React.ReactNode;
}

export default class App extends React.Component<{}, State> {
  homePage: React.ReactNode;

  constructor(props: {}) {
    super(props);
    this.state = {
      page: (
        <MainPage
          callees={companies}
          appName={APP_NAME}
          onSelectCallee={this.goToCallSetup}
        />
      )
    };
  }

  goHome = () => {
    this.setState({
      page: (
        <MainPage
          callees={companies}
          appName={APP_NAME}
          onSelectCallee={this.goToCallSetup}
        />
      )
    });
  };

  goToCallSetup = (callee: Callee) => {
    this.setState({ page: <CallSetupPage onClose={this.goHome} callee={callee}/> });
  };

  render() {
    return this.state.page;
  }
}
