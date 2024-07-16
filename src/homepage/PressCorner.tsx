import { Box, Paper, Stack, Typography } from "@mui/material";
import { Component } from "react";
import van from "../assets/images/homepage/img(21).png";
import { styles } from "./PressCornerStyles";

class PressCorner extends Component {
  render() {
    return (
      <Stack sx={styles.container}>
        <Typography sx={styles.title}>Press Corner</Typography>
        <Paper sx={styles.paper} elevation={3}>
          <Box sx={styles.imageContainer}>
            <Box component={"img"} src={van} sx={styles.image} />
          </Box>
          <Stack sx={styles.pressText}>
            <Typography sx={styles.text}>Fipola On Expansion Mode,</Typography>
            <Typography sx={styles.text}>
              Enters Hyderabad With 14 Stores
            </Typography>
            <Typography sx={styles.date}>
              September 09, 2021 | The Hindu
            </Typography>
          </Stack>
        </Paper>
      </Stack>
    );
  }
}
export default PressCorner;
