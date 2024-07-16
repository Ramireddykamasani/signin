import { Box, Stack, Typography } from "@mui/material";
import { Component } from "react";
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class CarouselRecepie extends Component {
  render() {
    return (
      <Carousel responsive={responsive}>
        <Box>
        <div>Item 1</div>
        </Box>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Carousel>
    );
  }
}
export default CarouselRecepie;
