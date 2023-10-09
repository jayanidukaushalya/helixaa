import { Footer } from "../components/footer"
import { Header } from "../components/header"

// eslint-disable-next-line react/prop-types
export const MainLoayout = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}
