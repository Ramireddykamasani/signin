import { fireEvent, render } from "@testing-library/react";
import LandingPage from "../LandingPage";
import { BrowserRouter } from "react-router-dom";
import fallbackimg from "../../../assets/images/landingapage/download.jpeg";

describe("testing landingpage...", () => {
  test("checking wherer the fipola title is avaliable or not when page loads", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const title = getByTestId("fipolatitle");
    expect(title).toBeInTheDocument();
  });
  test("checking wherer the food image is displaying or not", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const topImage = getByTestId("topImage");
    expect(topImage).toBeInTheDocument();
  });
  // test('chacking the topImage error Case',() => {
  //   const {getByTestId} = render(<BrowserRouter><LandingPage /></BrowserRouter>);
  //   const topImage = getByTestId("topImage") as HTMLImageElement;
  //   fireEvent.error(topImage)
  //   expect(topImage.src).toContain(fallbackimg);

  // })
  it("should display fallback image if the top image fails to load", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const topImage = getByTestId("topImage") as HTMLImageElement;
    fireEvent.error(topImage);
    console.log(topImage.src)
    expect(topImage.src).toContain(fallbackimg);
  });
  it("should display fallback image if the top image fails to load", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    );
    const bottomImage = getByTestId("bottomImage") as HTMLImageElement;
    fireEvent.error(bottomImage);
    console.log(bottomImage.src)
    expect(bottomImage.src).toContain(fallbackimg);
  });
  test('checking on clicking the fipola icon where it is naviagting to login page or not',() => {
    const {getByTestId} = render(<BrowserRouter><LandingPage /></BrowserRouter>);
    const fipolaIcon = getByTestId("fipolatitle");
    fireEvent.click(fipolaIcon);
    expect(window.location.pathname).toBe("/login");

  })
});
