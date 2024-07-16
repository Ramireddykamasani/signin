// #app {
//     height: 100%;
//   }
//   html,
//   body {
//     position: relative;
//     height: 100%;
//   }

//   body {
//     background: #eee;
//     font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
//     font-size: 14px;
//     color: #000;
//     margin: 0;
//     padding: 0;
//   }

//   .swiper {
//     width: 100%;
//     height: 100%;
//   }

//   .swiper-slide {
//     text-align: center;
//     font-size: 18px;
//     background: #fff;

//     /* Center slide text vertically */
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   .swiper-slide img {
//     display: block;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
const styles = {
  image: {
    width: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "130px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  swipper: {
    display: { xs: "block", sm: "none" },
    background: "white",
    "& .swiper-pagination ": {
      bottom: "20px",
    },
    "& .swiper-pagination-bullet-active": {
      background: "#F5BF45",
    },
  },
  mySwiper: {},
  slide: {
    width: "100%",
    padding: "10px",
  },
};
export default styles;
