import { Component } from "react";
import Carousel from "react-material-ui-carousel";
import deliveryperson from "../../../assets/images/carousel/img (5).png";
import meat from "../../../assets/images/carousel/img (7).png";
import anibiotic from "../../../assets/images/carousel/img (6).png";
import CarouselCards from "../carouselCards/CarouselCards";
import { styles } from "./ReactMaterialStyles";
interface Items {
  image: string;
  title: string;
  description: string;
}

class Reactmaterialcarousel extends Component {
  render(): React.ReactNode {
    var items: Items[] = [
      {
        image: deliveryperson,
        title: "90 min Delivery",
        description:
          "It is a long established fact that a reader will be distracted",
      },
      {
        image: meat,
        title: "Antibiotic free",
        description:
          "It is a long established fact that a reader will be distracted",
      },
      {
        image: anibiotic,
        title: "halal certified",
        description:
          "It is a long established fact that a reader will be distracted",
      },
    ];
    return (
      <Carousel
        sx={styles.carousel}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#F5BF45",
          },
        }}
      >
        {items.map((each: Items) => (
          <CarouselCards item={each} />
        ))}
      </Carousel>
    );
  }
}

export default Reactmaterialcarousel;
