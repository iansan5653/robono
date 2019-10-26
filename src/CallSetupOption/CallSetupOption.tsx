import React from "react";
import { MenuOption } from "../interface";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

interface Props {
  option: MenuOption;
  key: number;
  onClick: () => void;
}

export default class CallSetupQuestion extends React.Component<Props> {
  render() {
    return (
      <FormControlLabel
        value={this.props.option.dialNumber}
        control={<Radio />}
        label={this.props.option.text}
        onClick={this.props.onClick}
      />
    );
  }
}
