import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Component } from "react";
import styles from "./RecepiesStyles";
import image1 from "../../assets/images/homecarousel/Rectangle69.png";
import "swiper/css";
import "swiper/css/pagination";

class Recepies extends Component {
  render() {
    return (
      <Box sx={styles.swipper}>
        {/* <Swiper
          centeredSlides={true}

        style={styles.mySwiper}>
          <SwiperSlide style={styles.slide}>
            <Carousel
              sx={cstyles.carousel}
              activeIndicatorIconButtonProps={{
                style: {
                  color: "#F5BF45",
                },
              }}
            >
              <Box sx={styles.imageContainer}>
                <Box component={"img"} src={image1} sx={styles.image} />
              </Box>
              <Box sx={styles.imageContainer}>
                <Box component={"img"} src={image1} sx={styles.image} />
              </Box>
              <Box sx={styles.imageContainer}>
                <Box component={"img"} src={image1} sx={styles.image} />
              </Box>
            </Carousel>
          </SwiperSlide>
          <SwiperSlide style={styles.slide}>
            <Carousel
              sx={cstyles.carousel}
              activeIndicatorIconButtonProps={{
                style: {
                  color: "#F5BF45",
                },
              }}
            >
              <Box sx={styles.imageContainer}>
                <Box component={"img"} src={image1} sx={styles.image} />
              </Box>
              <Box sx={styles.imageContainer}>
                <Box component={"img"} src={image1} sx={styles.image} />
              </Box>
              <Box sx={styles.imageContainer}>
                <Box component={"img"} src={image1} sx={styles.image} />
              </Box>
            </Carousel>
          </SwiperSlide>
          <SwiperSlide style={styles.slide}>
            <Carousel
              sx={cstyles.carousel}
              activeIndicatorIconButtonProps={{
                style: {
                  color: "#F5BF45",
                },
              }}
            >
              <Box sx={styles.imageContainer}>
                <Box component={"img"} src={image1} sx={styles.image} />
              </Box>
              <Box sx={styles.imageContainer}>
                <Box component={"img"} src={image1} sx={styles.image} />
              </Box>
              <Box sx={styles.imageContainer}>
                <Box component={"img"} src={image1} sx={styles.image} />
              </Box>
            </Carousel>
          </SwiperSlide>
        </Swiper> */}
        <Swiper
          pagination={true}
          loop={true}
          modules={[Pagination]}
          centeredSlides={true}
          style={styles.mySwiper}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              width: 700,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
              width: 700,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 50,
              width: 800,
            },
            319: {
              slidesPerView: 2,
              spaceBetween: 20,
              width: 500,
            },
          }}
        >
          <SwiperSlide style={styles.slide}>
            <Box component={"img"} src={image1} style={styles.image} />
          </SwiperSlide>
          <SwiperSlide style={styles.slide}>
            <Box component={"img"} src={image1} style={styles.image} />
          </SwiperSlide>
          <SwiperSlide style={styles.slide}>
            <Box component={"img"} src={image1} style={styles.image} />
          </SwiperSlide>
          <SwiperSlide style={styles.slide}>
            <Box component={"img"} src={image1} style={styles.image} />
          </SwiperSlide>
          <SwiperSlide style={styles.slide}>
            <Box component={"img"} src={image1} style={styles.image} />
          </SwiperSlide>
          <SwiperSlide style={styles.slide}>
            <Box component={"img"} src={image1} style={styles.image} />
          </SwiperSlide>
          <SwiperSlide style={styles.slide}>
            <Box component={"img"} src={image1} style={styles.image} />
          </SwiperSlide>
          <SwiperSlide style={styles.slide}>
            <Box component={"img"} src={image1} style={styles.image} />
          </SwiperSlide>
        </Swiper>
        {/* <Swiper>
          <SwiperSlide>
            <Stack>
              <Box component={"img"} src="" width={"100%"} height={"100px"} />
              <Typography>Mutton Biriyani</Typography>
            </Stack>
          </SwiperSlide>
        </Swiper> */}
      </Box>
    );
  }
}
export default Recepies;
