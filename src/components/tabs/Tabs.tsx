import * as React from "react";
import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { TabPanel as BaseTabPanel } from "@mui/base/TabPanel";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { useNavigate } from "react-router-dom";
import withRouter from "../HOC/Hoc";
import { Box } from "@mui/material";
interface Iprops {
  navigate: (path: string) => void;
}
class UnstyledTabsIntroduction extends React.Component<Iprops, {}> {
  handleHome = (event: any) => {
    console.log(event);
  };
  handleCart = () => {
    this.props.navigate('/cart')
  };
  handleChange = (event:any) => {
      console.log(event.target.value)
  }
  handleCategory = () => {
    this.props.navigate('/ourCategory')
  }
  render() {
    return (
      <Tabs defaultValue={0} onChange={this.handleChange}>
        <TabsList>
          <Tab value={0}>
            Home
          </Tab>
          <Tab value={1} onClick={this.handleCart}>
            Cart
          </Tab>
          <Tab value={2}>OurCategory</Tab>
        </TabsList>
        <Box sx={{width:'100px',height:'30px',color:'transparent',position:'absolute' ,top:'26px',zIndex:'99999',right:'210px'}} onClick = {this.handleCart}/>
        <Box sx={{width:'100px',height:'30px',color:'transparent',position:'absolute' ,top:'26px',zIndex:'99999',right:'100px'}} onClick = {this.handleCategory}/>

      </Tabs>
    );
  }
}

const blue = {
  50: "#F5BF45",
  100: "#F5BF45",
  200: "#F5BF45",
  300: "#F5BF45",
  400: "#F5BF45",
  500: "#F5BF45",
  600: "#F5BF45",
  700: "#F5BF45",
  800: "#F5BF45",
  900: "#F5BF45",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
  }

  &.${tabClasses.selected} {
    background-color: #fff;
    color: ${blue[600]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 100%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  border-radius: 12px;
  opacity: 0.6;
  `
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  background-color: ${blue[500]};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between
  `
);
export default withRouter(UnstyledTabsIntroduction);
