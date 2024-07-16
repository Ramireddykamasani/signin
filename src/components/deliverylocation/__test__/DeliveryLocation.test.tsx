import { fireEvent, render, screen } from "@testing-library/react";
import { store } from "../../../redux/store/Store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import DeliveryLocation from "../DeliveryLocation";

describe("testing the Delivery Loaction page", () => {
  test("checking the pincode textFeild onChange functionality", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DeliveryLocation />
        </BrowserRouter>
      </Provider>
    );
    const closeBtn = getByTestId("closeBtn");
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn);
    fireEvent.click(closeBtn);

    const pincode = getByTestId("pincodeText");
    fireEvent.change(pincode, { target: { value: 523241 } });
    expect(pincode).toHaveValue(523241);
  });
  test("checking handleClose functionality", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <DeliveryLocation />
        </BrowserRouter>
      </Provider>
    );

    const closeBtn = getByTestId("closeBtn");
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn);
    expect(closeBtn).notToBeInTheDocument();
  });
});
