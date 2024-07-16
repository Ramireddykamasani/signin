import { Component } from "react";
import { Box } from "@mui/material";
import chickenImages from "../../utils/data/chicken/ChickenImages";
import CarouselCards from "../common/carouselCards/CarouselCards";

class BestSeller extends Component {
  render() {
    return (
      <Box>
        {chickenImages.map((each) => (
          <CarouselCards item={each} />
        ))}
      </Box>
    );
  }
}
export default BestSeller;
