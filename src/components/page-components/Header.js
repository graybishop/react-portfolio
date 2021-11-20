import Navigation from "./Navigation.js";

const Header = (props) => {
  

  return(
    <header>
        <h1 className="text-red-500">Jake Swackhammer</h1>
        <Navigation navigationProps={props.navigationProps} />
    </header>
  )
}

export default Header