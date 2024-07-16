import { Box, Typography } from "@mui/material";
import { Component } from "react";
import { styles } from "./CarouselStyles";

interface Iprops {
  item: {
    image: string;
    title: string;
    description: string;
  };
}
class CarouselCards extends Component<Iprops> {
  render() {
    const { image, title, description } = this.props.item;
    return (
      <Box sx={styles.paper}>
        <Box component={"img"} src={image} />
        <Typography sx={styles.title}>{title}</Typography>
        <Typography sx={styles.description}>{description}</Typography>
      </Box>
    );
  }
}
export default CarouselCards;
