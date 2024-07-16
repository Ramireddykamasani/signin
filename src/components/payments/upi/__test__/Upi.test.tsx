import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../redux/store/Store";
import { BrowserRouter } from "react-router-dom";
import Upi from "../Upi";

describe("testing the Upi Page", () => {
  test("checking the continue button functionality ", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Upi />
        </BrowserRouter>
      </Provider>
    );
    const continuBtn = getByTestId("continueBtn");
    continuBtn.click();
    expect(window.location.pathname).toBe("/congratulations");
  });
  test("checking the navigation button functionality ", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Upi />
        </BrowserRouter>
      </Provider>
    );
    const arrowBtn = getByTestId("arrowicon");
    fireEvent.click(arrowBtn);
    expect(window.location.pathname).toBe("/paymentMethod");
  });
  test('checking the textfeild with values entered by the the user',() => {
   const {getByTestId} =  render(
      <Provider store={store}>
        <BrowserRouter>
        <Upi/>
        </BrowserRouter>
      </Provider>
    )
    const textfeild = getByTestId('holderName')
    fireEvent.change(textfeild,{target:{value:'123@ybl'}})
  })
});
