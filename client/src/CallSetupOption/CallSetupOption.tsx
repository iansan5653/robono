import React from "react";
import { MenuOption } from "../interface";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

interface Props {
  option: MenuOption;
  key: number;
  onClick: () => void;
}

interface State {
  selected: boolean;
}

export default class CallSetupQuestion extends React.Component<Props, State> {
  state = {
    selected: false
  };

  handleSelect() {
    this.setState({ selected: true });
  }

  render() {
    return (
      <FormControlLabel
        value={this.props.option.dialNumber}
        control={<Radio />}
        label={this.props.option.text}
        onChange={() => {
          this.props.onClick();
          this.handleSelect();
        }}
      />
    );
  }
}
