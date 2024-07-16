import { ChangeEvent, Component } from "react";
import TextField from "@mui/material/TextField";
interface TextFeildProps {
  title: string;
  name: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const styles = {
  textFeild: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  input: {
    width: "260px",
    marginTop: "20px",
    "& .MuiFormHelperText-root": {
      fontSize: "1rem",
      color: "#F91E00",
    },

    marginBottom: "10px",
    backgroundColor: "#fff",
    borderRadius: "30px",
    "& .MuiFormLabel-root": {
      color: "#18161B",
      fontSize: "16px",
      fontWeight: "500",
      textTransform: "none",
      fontFamily: '"Montserrat Alternates", sans-serif',
    },
    "& .MuiInputLabel-shrink": {},

    "& label.Mui-focused": {
      textTransform: "none",
      color: "#18161B",
      transform: "translate(24px, -7px) scale(.8)",
      background: "#FFF",
      padding: "0px 10px 5px",
      display: "block",
      fontSize: "18px",
      fontWeight: "600",
      marginRight: "2px",
    },
    ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input ": {
      color: "#A9A9A9",
      fontFamily: "Poppins",
      fontSize: "18px",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #18161B",
        borderRadius: "30px",
      },
      "&:hover fieldset": {
        border: "2px solid #18161B",
        borderWidth: "0.15rem",
      },
      "&:focused fieldset": {
        border: "2px solid #18161B",
        borderWidth: "0.15rem",
      },
    },
  },
};
class TextFieldComponent extends Component<TextFeildProps, {}> {
  render() {
    return (
      <TextField 
      autoComplete='off'
        label={this.props.title}
        sx={styles.input}
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.handleChange}
        variant="outlined"
        inputProps={{ "data-testid": `${this.props.name}` }}
      />
    );
  }
}
export default TextFieldComponent;
