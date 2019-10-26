import React from "react";
import { MenuOption, Menu } from "../interface";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import CallSetupOption from "../CallSetupOption/CallSetupOption";
import "./CallSetupQuestion.css";

interface Props {
  menu: Menu;
  onChoose: (selection: MenuOption) => void;
}

export default class CallSetupQuestion extends React.Component<Props> {
  render() {
    return (
      <>
        <Typography variant="h5" component="h3" gutterBottom>
          {this.props.menu.question}
        </Typography>
        <RadioGroup>
          {this.props.menu.options.map((option, index) => {
            return (
              <div className="padLeft">
                <CallSetupOption
                  option={option}
                  key={index}
                  onClick={() => this.props.onChoose(option)}
                />
              </div>
            );
          })}
        </RadioGroup>
      </>
    );
  }
}
