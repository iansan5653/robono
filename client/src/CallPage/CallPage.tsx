import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";
import "./CallPage.css";
import path from "path";

interface Props {
  phoneNumber: string;
}

export default class CallSetupQuestion extends React.Component<Props> {
  render() {
    return (
      <div className="callPageContainer">
        <img
          src="./party.png"
          className="partyImage"
          alt="Cartoon image of people dancing."
        />
        <Typography variant="body2" component="span" className="textContainer">
          Great! You've selected all the options and we generated a phone number
          for you that will skip all the annoying menu prompts.
          <br />
          <br />
          Keep in mind that because some menus take a while to work, don't press
          any keys until you hear hold music or ringing. Thank you!
        </Typography>
        <TextField
          label="Generated Phone Number"
          defaultValue={this.props.phoneNumber}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
          className="padTop"
        />
        <Button
          color="primary"
          href={`tel:${this.props.phoneNumber}`}
          endIcon={<PhoneIcon />}
          variant="contained"
        >
          Start Call
        </Button>
      </div>
    );
  }
}
