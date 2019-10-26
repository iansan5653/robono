import React from "react";
import "./App.css";

import MainPage from "./MainPage/MainPage";
import CallSetupPage from "./CallSetupPage/CallSetupPage";
import { Callee } from "./interface";
import { loadMenuByID } from "./loadMenu";

const APP_NAME = "Miniature Carnival";

const companies: Callee[] = [
  { name: "Comcast", description: "Telecom", menuID: "asdf" },
  { name: "Comcast", description: "Telecom", menuID: "asdf" },
  {
    name: "University of North Florida",
    description: "University",
    menuID: "asdf"
  },
  { name: "Bank of America", description: "Bank", menuID: "asdf" },
  { name: "Disney", description: "Theme Park", menuID: "asdf" },
  { name: "Georgia Tech", description: "University", menuID: "asdf" },
  { name: "Samsung", description: "Telecom", menuID: "asdf" },
  { name: "Comcast", description: "Telecom", menuID: "asdf" }
];

interface State {
  callSetupPage?: React.ReactNode;
}

export default class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      callSetupPage: undefined
    };
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

  render() {
    return (
      <div>
        <MainPage
          callees={companies}
          appName={APP_NAME}
          onSelectCallee={this.goToCallSetup}
        />
        {this.state.callSetupPage}
      </div>
    );
  }
}
