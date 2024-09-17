import image from "./images/LOGO HE VINCI.png";

const Header = (props) => {
    return(
      <>
        <img src={image} alt="image HE VINCI"></img>
        <h1>{props.course}</h1>
      </>
    )
}

export default Header;