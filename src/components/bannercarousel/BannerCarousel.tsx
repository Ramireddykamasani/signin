import { Box } from "@mui/material";
import { Component, ReactNode } from "react";
import Carousel from "react-material-ui-carousel";
import { styles } from "./BannerStyles";

class BannerCarousel extends Component {
  render(): ReactNode {
    return (
      <Carousel swipe={true} autoPlay navButtonsAlwaysVisible activeIndicatorIconButtonProps={{
        style: {
          color: "#F5BF45",
        },
      }}
      sx={styles.conatiner}
      indicatorContainerProps={{
        style: {
            position:'absolute',
            bottom:'40px',
            zIndex:'999',
        }
    }}
    indicatorIconButtonProps={{
        style: {
            
        }
    }}>
        <Box sx={styles.imgCon}>
          <Box component={"img"} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW30bc6gIoddi1IWE8_t4xT0c6PmGPOMTbGw&s'} sx={styles.img}/>
        </Box>
        <Box sx={styles.imgCon}>
          <Box component={"img"} src={'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg'} sx={styles.img}/>
        </Box>
        <Box sx={styles.imgCon}>
          <Box component={"img"} src={'https://s7d1.scene7.com/is/image/mcdonalds/5dollar_MealDeal_COM_1PUB_Meal:1-column-desktop?resmode=sharp2'} sx={styles.img}/>
        </Box>
      </Carousel>
    );
  }
}
export default BannerCarousel;
