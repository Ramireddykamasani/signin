import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/Store";
import { BrowserRouter } from "react-router-dom";
import CarouselAndLogin from "./CarouselAndLogin";

describe("testing Carousel And Loginpage", () => {
  test("checking the carousel and loginpage onload time", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CarouselAndLogin />
        </BrowserRouter>
      </Provider>
    );
  });
});
