import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { Home } from "../pages/home"
import { AboutUs } from "../pages/about-us"
import { ContactUs } from "../pages/contact-us"
import { SignIn } from "../pages/sign-in"
import { SignUp } from "../pages/sign-up"
import { ABOUTUS, AUTH, CONTACTUS, HOME, ROOT, SIGNIN, SIGNUP } from "./path"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROOT}>
            <Route path={AUTH}>
                <Route path={SIGNIN} element={<SignIn/>} />
                <Route path={SIGNUP} element={<SignUp/>} />
            </Route>
            <Route path={HOME} element={<Home />} />
            <Route path={ABOUTUS} element={<AboutUs />} />
            <Route path={CONTACTUS} element={<ContactUs />} />
            <Route path="*" element="Page not Found"/>
        </Route>
    )
)

