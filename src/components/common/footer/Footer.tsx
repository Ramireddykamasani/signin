import { Box } from "@mui/material";
import { Component } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styles } from "./FooterStyles";

class Footer extends Component {
  render() {
    return (
      <Box sx={styles.footerContainer}>
        <Box sx={styles.iconsContainer}>
          <HomeIcon />
          <AppsIcon />
          <ShoppingCartIcon />
        </Box>
      </Box>
    );
  }
}
export default Footer;
