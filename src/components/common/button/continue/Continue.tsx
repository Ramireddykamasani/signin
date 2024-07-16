import {  Button } from "@mui/material";
import { Component, ReactNode } from "react";
import { styles } from "./ContinueStyles";

interface ContinueProps {
    title: string;
    handleClick:() =>void
}
class Continue extends Component <ContinueProps,{}>{
  render(): ReactNode {
    return <Button sx={styles.button} onClick = {this.props.handleClick} data-testid='continueBtn'>{this.props.title}</Button>;
  }
}
export default Continue;
