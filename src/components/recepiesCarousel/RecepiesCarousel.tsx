import { Box, Paper, Stack, Typography } from "@mui/material";
import { Component, ReactNode } from "react";
import MultiCarousel from "react-multi-carousel";
import mutton from "../../assets/images/recepies/img(20).png";
import fish from '../../assets/images/landingapage/fish.jpeg'
import fishfry from '../../assets/images/landingapage/fishfry.jpeg'
import prawns from '../../assets/images/landingapage/prawns.jpeg'
import chicken from '../../assets/images/landingapage/chicken.jpeg'




import EastIcon from '@mui/icons-material/East';
const receipeResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1439 },
    items: 4.2,
  },
  desktop: {
    breakpoint: { max: 1025, min: 1024 },
    items: 2.6,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.2,
  },
};
export const styles = {
  title:{
    color: "#18161B",
    fontSize: { xs: "20px", sm: "23px" },
    fontWeight: "600",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
    marginLeft:'10px'
  },
  text:{
    color: "#18161B",
    fontSize: { xs: "16px", sm: "19px" },
    fontWeight: "600",
    textTransform: "none",
    fontFamily: '"Montserrat Alternates", sans-serif',
     padding:'10px'
  },
  paper:{
    boxSizing:'border-box',
    background: "#fff",
    margin:'10px 10px'

  },
  multiCarouselBox: {
    background: "#fff",
    p: 2,
    mt: 2.2,
  },
  multiCarouselReceipeBox: {
    background: "#fefefe",
    p: 2,
    mt: 3.2,
  },
  multiCarouselDataBox: { width: "150px", background: "#fff" },
  receipeBox: {
    width: "100%",
    height: {xs:'150px',sm:'170px',md:'175px',lg:'180px'},
  },
  bestSellersText: { fontWeight: 600, fontSize: "1.4rem", mb: 1 },
};
class RecepiesCarousel extends Component {
  render(): ReactNode {
    return (
      <Box sx={styles.multiCarouselReceipeBox}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={styles.title}>Receipes</Typography>
          <EastIcon/>
        </Box>
        <MultiCarousel
          responsive={receipeResponsive}
          
          additionalTransfrom={0}
          arrows={true}
          autoPlaySpeed={3000}
          centerMode={false}
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          // customRightArrow={<EastIcon />}
        >
          
          <Paper elevation={3} sx={styles.paper}>
            <Box component={"img"} src={fish} sx={styles.receipeBox} />
            <Typography sx={styles.text}>Mutton Biryani</Typography>
          </Paper>
          <Paper elevation={3}  sx={styles.paper}>
            <Box component={"img"} src={chicken} sx={styles.receipeBox} />
            <Typography sx={styles.text}>Chicken Biryani</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.paper}>
            <Box component={"img"} src={fishfry} sx={styles.receipeBox} />
            <Typography sx={styles.text}>Chicken Tikka</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.paper}>
            <Box component={"img"} src={mutton} sx={styles.receipeBox} />
            <Typography sx={styles.text}>Chicken Curry</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.paper}>
            <Box component={"img"} src={prawns} sx={styles.receipeBox} />
            <Typography sx={styles.text}>Fish Fry</Typography>
          </Paper>
          <Paper elevation={3} sx={styles.paper}>
            <Box component={"img"} src={fish} sx={styles.receipeBox} />
            <Typography sx={styles.text}>Prawns Fry</Typography>
          </Paper>


          
        </MultiCarousel>
      </Box>
    );
  }
}
export default RecepiesCarousel;
