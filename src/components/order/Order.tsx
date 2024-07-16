import { Box, Stack, Typography } from "@mui/material";
import { Component } from "react";
import Header from "../common/header/Header";
import withRouter from "../HOC/Hoc";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import chickenImages from "../../utils/data/chicken/ChickenImages";
import Chickencards from "../common/chickencards/ChickenCards";
import { styles } from "./OrderStyles";
interface Iprops {
  navigate: (path: string) => void;
}

class Order extends Component<Iprops, {}> {
  handleNaviagte = () => {
    this.props.navigate("/");
  };
  handleClick = () => {};
  render() {
    return (
      <Stack sx={styles.main}>
        <Header title="Order" handleNaviagte={this.handleNaviagte} />
        <Stack sx={styles.orderContainer}>
          <Stack sx={styles.orderDetails}>
            <Stack sx={styles.orderTitle}>Order# ORD00003</Stack>
            <Stack sx={styles.orderPrice}>$ 389.00</Stack>
            <Stack direction={"row"} gap={4}>
              <Box sx={styles.IconTextContainer}>
                <WatchLaterIcon />
                <Typography sx={styles.time}>03:25 pm</Typography>
              </Box>
              <Box sx={styles.IconTextContainer}>
                <InsertInvitationIcon />
                <Typography sx={styles.time}>3 April 2022</Typography>
              </Box>
            </Stack>
          </Stack>
          <Stack sx={styles.products}>
            <Typography sx={styles.productsTitle}>Ordered Product</Typography>
            <Box sx={styles.cards}>
              {chickenImages.slice(0, 3).map((each) => (
                <Chickencards
                  id={each.id}
                  img={each.image}
                  title={each.title}
                  handleClick={this.handleClick}
                  quantity={each.quantity}
                  isAdded={each.isAdded}
                  each={each}
                />
              ))}
            </Box>
          </Stack>
          <Stack sx={styles.subCon}>
            <Stack sx={styles.priceContainer}>
              <Typography sx={styles.text}>Subtotal</Typography>
              <Typography sx={styles.cost}>$389.00</Typography>
            </Stack>
            <Stack sx={styles.priceContainer}>
              <Typography sx={styles.text}>Delivery Charges</Typography>
              <Typography sx={styles.cost}>$0.00</Typography>
            </Stack>
            <Stack sx={styles.priceContainer}>
              <Typography sx={styles.cost}>Subtotal</Typography>
              <Typography sx={styles.price}>$389.00</Typography>
            </Stack>
          

          </Stack>
        </Stack>
      </Stack>
    );
  }
}
export default withRouter(Order);
