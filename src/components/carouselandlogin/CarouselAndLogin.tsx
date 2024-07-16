import { Box } from "@mui/material";
import { Component, ReactNode } from "react";
import withRouter from "../HOC/Hoc";
import Reactmaterialcarousel from "../common/carousel/ReactMaterialCarousel";
import LoginRegister from "../common/login&register/Login&Register";
import { styles } from "./CarouselAndLoginStyles";

interface ICarouselAndLogin {
  navigate: (path: string) => void
}
class CarouselAndLogin extends Component<ICarouselAndLogin, {}>{
  render(): ReactNode {
    return (
      <Box sx={styles.containerClasses}>
        <Reactmaterialcarousel />
        <LoginRegister navigate={this.props.navigate} />
      </Box>
    );
  }
}
export default withRouter(CarouselAndLogin);
