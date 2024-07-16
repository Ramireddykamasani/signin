import { Box, Button } from "@mui/material";
import React from "react";
import { AppDispatch, RootState } from "../redux/store/Store";
import { connect } from "react-redux";
import withRouter from "./HOC/Hoc";

interface Iprops {
  increase: () => void;
}

interface Istate {}

const mapStateToProps = (state: RootState) => ({});

const mapDisPatchToProps = (dispatch: AppDispatch) => ({});
class Add extends React.Component<Iprops, Istate> {
  render(): React.ReactNode {
    const { increase } = this.props;
    return (
      <Box>
        <Button variant="outlined" onClick={increase}>
          Increase
        </Button>
      </Box>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDisPatchToProps)(Add));
