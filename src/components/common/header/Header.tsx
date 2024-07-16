import { Box } from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import { Component } from "react";
import { styles } from "./HeaderStyles";
interface Props {
    title: string;
    handleNaviagte : () => void
}

class   Header extends Component <Props,{}>{
  render() {
    return <Box sx={styles.reigister} onClick = {this.props.handleNaviagte}>{this.props.title}
    <WestIcon sx={styles.arrow}/>
    </Box>;
  }
}
export default Header;
