import { Box, Stack } from "@mui/material";
import { Component, ReactNode } from "react";
import NavBar from "./NavBar";
import PressCorner from "./PressCorner";
import Recepies from "../components/Receipes/Recepies";
import CarouselComponent from "../components/common/multiplecarousel/MultipleCarousel";
import BannerCarousel from "../components/bannercarousel/BannerCarousel";
import RecepiesCarousel from "../components/recepiesCarousel/RecepiesCarousel";
import DeliveryLocation from "../components/deliverylocation/DeliveryLocation";
import Search from "../components/search/Search";
const styles = {
  container: {
    width: "100%",
    background: 'white',
  },
  container2: {
    background: "#F3F3F3",
    width:'100%'
  },
};
class HomePage extends Component {
  render(): ReactNode {
    return (
      <Stack sx={styles.container}>
        <DeliveryLocation/>
        <NavBar/>
        <Stack sx={styles.container2}>
          <Search/>
          <Recepies />
          <BannerCarousel/>
          <CarouselComponent />
          <RecepiesCarousel/>
          <PressCorner />
        </Stack>
      </Stack>
    );
  }
}
export default HomePage;
