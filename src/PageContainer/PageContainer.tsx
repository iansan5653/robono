import React from "react";
import "./PageContainer.css";
import Container from "@material-ui/core/Container";

const PageContainer: React.FC = (props) => {
  return <Container maxWidth="md" className="pageContainer">{props.children}</Container>;
};

export default PageContainer;
