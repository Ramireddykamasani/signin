import { fireEvent, render } from "@testing-library/react";
import Register from "../Register";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../redux/store/Store";

describe("checing register page and its functionality", () => {
  test("checking firstname textfeild values entered by the user is valid or not", () => {
    const { getByTestId } = render(
      <Provider store={store}>
      <BrowserRouter>
        <Register />
      </BrowserRouter>
      </Provider>
    );
    const firstName = getByTestId("firstName");
    fireEvent.change(firstName, { target: { value: "fipola" } });
    expect(firstName).toHaveValue("fipola");
    fireEvent.change(firstName, { target: { value: "a" } });
    expect(firstName).toHaveValue("a");
  });
  test("checking lastnametextfeild values entered by the user is valid or not", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const lastName = getByTestId("lastName");
    fireEvent.change(lastName, { target: { value: "lastName" } });
    expect(lastName).toHaveValue("lastName");
    fireEvent.change(lastName, { target: { value: "a" } });
    expect(lastName).toHaveValue("a");
  });
  test("checking emailtextfeild values entered by the user is valid or not", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const email = getByTestId("email");
    fireEvent.change(email, { target: { value: "email@gmail.com" } });
    expect(email).toHaveValue("email@gmail.com");
    fireEvent.change(email, { target: { value: "a" } });
    expect(email).toHaveValue("a");
  });
  test("checking passwordtextfeild values entered by the user is valid or not", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const password = getByTestId("password");
    fireEvent.change(password, { target: { value: "P@12345de" } });
    expect(password).toHaveValue("P@12345de");
    fireEvent.change(password, { target: { value: "a" } });
    expect(password).toHaveValue("a");
  });
  test("checking phonenumbertextfeild values entered by the user is valid or not", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const mobileNumber = getByTestId("mobileNumber");
    fireEvent.change(mobileNumber, { target: { value: "1234568910" } });
    expect(mobileNumber).toHaveValue("12345678910");
  });
  test("checking phonenumbertextfeild values entered by the user for valid case", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const mobileNumber = getByTestId("mobileNumber");
    fireEvent.change(mobileNumber, { target: { value: "12345689sd10" } });
    expect(mobileNumber).toHaveValue("123456789sd10");
  });

  test("checking continue button ", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const firstName = getByTestId("firstName");
    fireEvent.change(firstName, { target: { value: "fipola" } });
    const lastName = getByTestId("lastName");
    fireEvent.change(lastName, { target: { value: "" } });
    const email = getByTestId("email");
    fireEvent.change(email, { target: { value: "" } });
    const continueBtn = getByTestId("continueBtn");
    expect(continueBtn).toBeInTheDocument();
    fireEvent.click(continueBtn);
  });
  test("checking continue button for updating the state ", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    const firstName = getByTestId("firstName");
    fireEvent.change(firstName, { target: { value: "" } });
    const lastName = getByTestId("lastName");
    fireEvent.change(lastName, { target: { value: "we" } });
    const continueBtn = getByTestId("continueBtn");
    const email1 = getByTestId("email");
    fireEvent.change(email1, { target: { value: "email@gmail.com" } });
    expect(continueBtn).toBeInTheDocument();
    const password = getByTestId("password");
    fireEvent.change(password, { target: { value: "P@12345de" } });
    const mobileNumber = getByTestId("mobileNumber");
    fireEvent.change(mobileNumber, { target: { value: "1234568910a" } });
    fireEvent.click(continueBtn);
  });
  test("checking continue button for else case ", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const firstName = getByTestId("firstName");
    fireEvent.change(firstName, { target: { value: "fipola" } });
    const lastName = getByTestId("lastName");
    fireEvent.change(lastName, { target: { value: "lastname" } });
    const password = getByTestId("password");
    fireEvent.change(password, { target: { value: "P@12345de" } });
    const mobileNumber = getByTestId("mobileNumber");
    fireEvent.change(mobileNumber, { target: { value: "1234568910" } });
    const email = getByTestId("email");
    fireEvent.change(email, { target: { value: "email@gmail.com" } });
    const continueBtn = getByTestId("continueBtn");
    fireEvent.click(continueBtn);
  });
});
