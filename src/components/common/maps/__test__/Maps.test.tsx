import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../../redux/store/Store";
import Maps from "../Maps";

describe("testing google maps component", () => {
  test("checking the maps on loading time", () => {
    const {getByTestId,unmount} = render(
      <BrowserRouter>
        <Provider store={store}>
          <Maps />
        </Provider>
      </BrowserRouter>
    );
    unmount()
    // const maps = getByTestId('maps')
    // fireEvent.load(maps)
    // expect(maps).toBeInTheDocument()
  });
});
