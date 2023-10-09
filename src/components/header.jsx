import { Link } from "react-router-dom"
import { ABOUTUS, CONTACTUS, HOME, SIGNIN, SIGNUP } from "../routes/path"

export const Header = () => {
  return (
    <div>
      <ul>
        <Link to={SIGNIN}>Sign In</Link>
        <Link to={SIGNUP}>Sign Up</Link>
        <Link to={HOME}>Home</Link>
        <Link to={CONTACTUS}>Contact Us</Link>
        <Link to={ABOUTUS}>About Us</Link>
      </ul>
    </div>
  )
}
