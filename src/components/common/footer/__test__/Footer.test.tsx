import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../../../../redux/store/Store"
import { BrowserRouter } from "react-router-dom"
import Footer from "../Footer"

describe('testing the footerpage',() => {
test('checking the footerpage',() => {
    const {getByTestId} = render(
<Provider store={store}>
    <BrowserRouter>
    <Footer/>
    </BrowserRouter>
</Provider>
    )
})
})