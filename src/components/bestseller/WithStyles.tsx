import { Box, Stack } from "@mui/material";
import { Component } from "react";
interface Iprops {
  description: string;
  headline: string;
  image: string;
}
class WithStyles extends Component<Iprops, {}> {
  render() {
    return (
      <Stack>
        <Box>{this.props.description}</Box>
        <Box>{this.props.headline}</Box>
      </Stack>
    );
  }
}
export default WithStyles;
