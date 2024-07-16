import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import img from "../../assets/images/dashboard/logo_png1(2).png";
import profile from "../../assets/images/dashboard/img(19).png";
import menu from "../../assets/images/dashboard/Segment.png";
import shop from "../../assets/images/dashboard/shop1.png";
import clock from "../../assets/images/dashboard/time-past1.png";
import home from "../../assets/images/dashboard/Vector(2).png";
import AddHomeIcon from "@mui/icons-material/AddHome";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import Recepies from "../Receipes/Recepies";
import { styles } from "./DashboardStyles";

const drawerWidth = 240;

interface Props {
  window?: () => Window;
}
const icons = [
  { icon: AddHomeIcon, name: "Home" },
  { icon: InfoIcon, name: "About us" },
  { icon: HelpIcon, name: "Faq's" },
  { icon: HeadsetMicIcon, name: "Contact" },
  { icon: AirportShuttleIcon, name: "Fipola On Wheels" },
];


export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Box sx={styles.logoContainer}>
        <Box component={"img"} src={img} sx={styles.img} />
      </Box>
      <Divider />
      <List>
        {icons.map((text, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ borderBottom: "1px solid grey", padding: "5px 0px" }}
          >
            <ListItemButton>
              <ListItemIcon>{<text.icon />}</ListItemIcon>
              <Typography sx={styles.text}>{text.name}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          sx={{
            background: "#F5BF45",
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.menuContainer}
          >
            <Box component={"img"} src={menu} />
          </IconButton>
          <Box component={"img"} src={img} sx={styles.img} />
          <Box sx={styles.profileContainer}>
            <Box component={"img"} src={profile} sx={styles.profile} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Recepies/>
      </Box>
    </Box>
  );
}
