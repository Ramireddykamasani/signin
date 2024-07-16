import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../../../redux/store/Store";
import { BrowserRouter } from "react-router-dom";
import Continue from "../Continue";

describe("testing continue button", () => {
  test("checking whether continue button is rendered", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          {/* <Continue title="" handleClick={}/> */}
        </BrowserRouter>
      </Provider>
    );
  });
});
