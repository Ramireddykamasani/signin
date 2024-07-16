import { fireEvent, render } from "@testing-library/react";
import { store } from "../../../../redux/store/Store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import CardPage from "../CardPage";

describe("testing Cardpage", () => {
  test("checking upi textfeild with valid upiaddress edns with @ybl", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CardPage />
        </BrowserRouter>
      </Provider>
    );
    const textFeild = getByTestId("upi");
    fireEvent.change(textFeild, { target: { value: "test@ybl" } });
    expect(textFeild).toHaveValue("test@ybl");
  });
  test("checking upi textfeild with invalid upiaddress ", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CardPage />
        </BrowserRouter>
      </Provider>
    );
    const textFeild = getByTestId("upi");
    fireEvent.change(textFeild, { target: { value: "test@y" } });
    expect(textFeild).toHaveValue("test@ybl");
  });
  test("checking upi textfeild with valid upiaddress edns with @ybl", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CardPage />
        </BrowserRouter>
      </Provider>
    );
    const textFeild = getByTestId("upi");
    fireEvent.change(textFeild, { target: { value: "test@ybl" } });
    expect(textFeild).toHaveValue("test@ybl");
    const continueBtn = getByTestId("continueBtn");
    fireEvent.click(continueBtn);
    expect(window.location.pathname).toBe("/deliveryAddress");
  });
  test('checking the nav icon btn functionality whether it is navigation to payments method page or not',() => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CardPage />
        </BrowserRouter>
      </Provider>
    );
    const paymentsBtn = getByTestId('backarrow')
    fireEvent.click(paymentsBtn)
    expect(window.location.pathname).toBe('/paymentMethod')
  })

});
