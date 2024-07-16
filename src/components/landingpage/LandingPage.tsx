import { Box } from "@mui/material";
import { Component } from "react";
import fallbackimg from "../../assets/images/landingapage/download.jpeg";
import topImg from "../../assets/images/landingapage/img (4).png";
import title from "../../assets/images/landingapage/logo_png 1.png";
import bottomImg from "../../assets/images/landingapage/raw-pork-slices-black-stone-plate-isolated-white_174533-5-removebg-preview 1.png";
import withRouter from "../HOC/Hoc";
import { styles } from "./LandingPageStyles";

interface IlandingPage {
  navigate: (path: string) => void;
}
class LandingPage extends Component<IlandingPage, {}> {
  handleClick = () => {
    this.props.navigate("/login");
  };

  render() {
    return (
      <Box sx={styles.landingpageContainer}>
        <Box sx={styles.imgContainer}>
          <Box
            component={"img"}
            src={topImg}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
              ((e.target as HTMLImageElement).src = fallbackimg)
            }
            sx={styles.topImage}
            data-testid="topImage"
          />
        </Box>
        <Box sx={styles.bottomConatiner}>
          <Box
            component={"img"}
            src={bottomImg}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
              ((e.target as HTMLImageElement).src = fallbackimg)
            }
            sx={styles.bottomImage}
          data-testId={'bottomImage'}/>
        </Box>
        <Box
          component={"img"}
          src={title}
          data-testid="fipolatitle"
          onClick={this.handleClick}
        />
      </Box>
    );
  }
}
export default withRouter(LandingPage);
