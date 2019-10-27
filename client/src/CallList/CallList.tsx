import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PhoneIcon from "@material-ui/icons/Phone";
import "./CallList.css";
import {Callee} from "../interface";

interface Props {
  callees: Callee[];
  onSelectCallee: (callee: Callee) => void;
}

export default class CallList extends React.Component<Props> {
  render() {
    return (
      <List className="callList">
        {this.props.callees.map((callee, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem
                button
                onClick={() => this.props.onSelectCallee(callee)}
              >
                <ListItemIcon>
                  <PhoneIcon color="primary" htmlColor={callee.color} />
                </ListItemIcon>
                <ListItemText
                  primary={callee.name}
                  secondary={callee.description}
                />
              </ListItem>
              {index <= this.props.callees.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </React.Fragment>
          );
        })}
      </List>
    );
  }
}
