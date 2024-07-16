import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEvent, Component, ReactNode } from "react";
import bbq from "../../assets/images/category/bbq.png";
import coldcuts from "../../assets/images/category/coldcuts.png";
import combos from "../../assets/images/category/combos.png";
import dryfish from "../../assets/images/category/dryfish.png";
import eggs from "../../assets/images/category/eggs.png";
import grill from "../../assets/images/category/grill.png";
import imported from "../../assets/images/category/imported.png";
import lamb from "../../assets/images/category/lamb.png";
import marinades from "../../assets/images/category/marinades.png";
import readytofry from "../../assets/images/category/readytofry.png";
import relishes from "../../assets/images/category/relishes.png";
import seafood from "../../assets/images/category/seafood.png";
import vegan from "../../assets/images/category/vegan.png";
import Header from "../common/header/Header";
import withRouter from "../HOC/Hoc";
import { styles } from "./OurCategoryStyles";

export const categortItems = [
  {
    image: grill,
    title: "Chicken",
  },
  {
    image: lamb,
    title: "Lamb & Goat",
  },
  {
    image: seafood,
    title: "Sea Food",
  },
  {
    image: marinades,
    title: "Marinades",
  },
  {
    image: coldcuts,
    title: "Cold Cuts",
  },
  {
    image: readytofry,
    title: "Ready To Fry",
  },
  {
    image: relishes,
    title: "Relishes",
  },
  {
    image: eggs,
    title: "Eggs",
  },
  {
    image: combos,
    title: "Combos",
  },
  {
    image: bbq,
    title: "BBq Corner",
  },
  {
    image: imported,
    title: "Imported",
  },
  {
    image: dryfish,
    title: "Dry Fish",
  },
  {
    image: grill,
    title: "Grill House",
  },
  {
    image: vegan,
    title: "Vegan",
  },
];
interface Istate {
  search: string;
  products: { title: string; image: string }[];
}
interface Iprops {
  navigate: (path: string) => void;
}
class OurCategory extends Component<Iprops, Istate> {
  state = {
    search: "",
    products: [{ title: "", image: "" }],
  };
  handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
    this.handlefilter(event.target.value);
  };

  handlefilter = (value: string) => {
    const newproducts = categortItems.filter((each) =>
      each.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    this.setState({ products: newproducts });
  };
  handleNaviagte = () => {
    this.props.navigate("/homepage");
  };
  handleChiken = () => {
    this.props.navigate("/chicken");
  };

  render(): ReactNode {
    return (
      <Box sx={styles.container}>
        <Header title="Our Category" handleNaviagte={this.handleNaviagte} />
        <TextField
          sx={styles.seaerchFeild}
          inputProps={{
            style: styles.input,
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search..."
          onChange={this.handleSearch}
          value={this.state.search}
        />

        {this.state.products.length >= 0 && this.state.search !== "" 
          ? this.state.products.map((each) => (
              <Stack sx={styles.stack}>
                <Box component={"img"} src={each.image} />
                <Typography>{each.title}</Typography>
              </Stack>
            ))
          : categortItems.map((each) => (
              <Stack sx={styles.stack} onClick={this.handleChiken}>
                <Box component={"img"} src={each.image} />
                <Typography>{each.title}</Typography>
              </Stack>
            ))}
      </Box>
    );
  }
}
export default withRouter(OurCategory);
