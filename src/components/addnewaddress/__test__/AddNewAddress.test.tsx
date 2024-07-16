import { Provider } from "react-redux";
import { store } from "../../../redux/store/Store";
import AddNewAddress from "../AddNewAddress";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";

describe("checking the addNewAddressPage", () => {
  test("checking the username textFeild", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddNewAddress />
        </BrowserRouter>
      </Provider>
    );
    const textFeild = getByTestId("username");
    fireEvent.change(textFeild, { target: { value: "test" } });
    expect(textFeild).toHaveValue("lastName");
  });
  test("checking continue button", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <AddNewAddress />
        </BrowserRouter>
      </Provider>
    );
    const continueButton = getByTestId("continueBtn");
    fireEvent.click(continueButton);

    expect(window.location.pathname).toBe("/deliveryAddress");
  });
});
