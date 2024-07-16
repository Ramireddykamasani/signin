import { Box, Stack} from "@mui/material";
import { Component } from "react";
import fipolaImage from "../assets/images/dashboard/logo_png1(2).png";
import profile from "../assets/images/dashboard/img(19).png";
import Hamburger from "hamburger-react";
import HomeIcon from "@mui/icons-material/Home";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import HistoryIcon from "@mui/icons-material/History";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { styles } from "./NavbarStyles";
import withRouter from "../components/HOC/Hoc";
import UnstyledTabsIntroduction from "../components/tabs/Tabs";
interface Iprops{
  navigate : (path:string) => void
}

const sidebarItems = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    title: "About Us",
    icon: <InfoIcon />,
  },
  {
    title: "Cart",
    icon: <HelpIcon />,
  },
  {
    title: "Category",
    icon: <HeadsetMicIcon />,
  },
  {
    title: "Fipola On Wheels",
    icon: <AirportShuttleIcon />,
  },
  {
    title: "Order History",
    icon: <HistoryIcon />,
  },
];
class NavBar extends Component<Iprops,{}> {
  state = {
    isOpen: false,
    isSelected : 'Home'
  };
  handleIsOPen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  handleNavigate = () => {
   this.props.navigate('/profile')
  }
  handleRoute = (path:string) => {
    this.setState({
      isOpen: !this.state.isOpen,
      isSelected : path
    });
   switch(path)
   {
  case 'Cart': 
    this.props.navigate('/cart')
    break;
    case 'Home': 
    this.props.navigate('/')
    break;
    case 'Category': 
    this.props.navigate('/ourCategory')
    break;
   }
  }
  render() {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.hamburger}>
          <Hamburger
            toggled={this.state.isOpen}
            toggle={this.handleIsOPen}
            size={20}
          />
        </Box>
        <Box component={"img"} src={fipolaImage} />
        <Stack direction={'row'} gap={'20px'} alignItems={'center'} justifyContent={'center'}>
       <Box sx={{display:{xs:'none',sm:'block'}}}><UnstyledTabsIntroduction/></Box> 
        <Box sx={styles.profileContainer}>
          <Box component={"img"} src={profile} sx={styles.profile} onClick={this.handleNavigate}/>
        </Box>

        </Stack>
       
        <Box
          sx={
            this.state.isOpen
              ? styles.sideBarContainer
              : styles.sideBarContainerNone
          }
        >
          <Box sx={this.state.isOpen ? styles.sideBar : styles.sideBarNone}>
            <Stack sx={styles.sidebarNavSection}>
              <Box component={"img"} src={fipolaImage} />
              <Box
                component={"img"}
                src="https://ugokawaii.com/wp-content/uploads/2022/06/cross.gif"
                sx={styles.close}
                onClick={this.handleIsOPen}
              />
            </Stack>
            <Stack sx={{ width: "100%" }}>
              {sidebarItems.map((item, index) => (
                <Box sx={this.state.isSelected  === item.title ? styles.liSelected : styles.li} key={index} className="listItem" onClick={() => this.handleRoute(item.title)}>
                  {item.icon}
                  <Box sx={styles.text}>{item.title}</Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    );
  }
}
export default withRouter(NavBar);
