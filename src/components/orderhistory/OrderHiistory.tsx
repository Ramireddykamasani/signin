import { Box, Paper, Stack, Typography } from "@mui/material";
import { Component } from "react";
import Header from "../common/header/Header";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { orderHistory } from "../../data/0rderhistory/OrderHistory";
import { styles } from "./OrderHistoryStyles";
import withRouter from "../HOC/Hoc";
import { AppDispatch, RootState } from "../../redux/store/Store";
import { connect } from "react-redux";
import { ChickenImage } from "../../utils/data/chicken/ChickenImages";
interface Iprops {
  navigate: (path: string) => void;
  orderHistory : [ChickenImage[]]
}
class OrderHistory extends Component<Iprops, {}> {
  handleNaviagte = () => {
    this.props.navigate("/");
  };
  render() {
    console.log(this.props.orderHistory);
    return (
      <Stack sx={styles.container}>
        <Header title="Order History" handleNaviagte={this.handleNaviagte} />
        <Stack sx={styles.ordersContainer} alignItems={"center"}>
          {orderHistory.map((item) => (
            <Stack sx={styles.eachOrder} alignItems={"center"}>
              <Typography sx={styles.date}>{item.date}</Typography>
              {item.orders.map((each) => (
                <Paper sx={styles.paper} elevation={3}>
                  <Stack sx={styles.orderItem}>
                    <Typography sx={styles.orderText}>
                      {each.orderNumber}
                    </Typography>
                    <Typography sx={styles.price}>${each.price}</Typography>
                    <Box sx={styles.timer}>
                      <AccessTimeFilledIcon />
                      <Box>{each.time}</Box>
                    </Box>
                  </Stack>
                  <AvatarGroup max={3} sx={styles.avatar}>
                    <Avatar
                      alt="Agnes Walker"
                      src="/static/images/avatar/4.jpg"
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="/static/images/avatar/4.jpg"
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src="/static/images/avatar/5.jpg"
                    />
                  </AvatarGroup>
                </Paper>
              ))}
            </Stack>
          ))}
          {/* {
            this.props.orderHistory.map((item) => item.map(
              () => (<></>)
            ) )
          } */}
        </Stack>
      </Stack>
    );
  }
}
const mapStateToProps = (state:RootState) => (
  {
    orderHistory : state.fipola.orderHistory
  }
)
const mapDispatchToProps = (dispatch:AppDispatch) => (
  {
  }
)
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(OrderHistory));
