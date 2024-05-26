import Navigation from "./Navigation";
import Search from "./Search";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <a href="#"><img src="site_logo.png" alt="" /></a>
            </div>
            <Navigation></Navigation>
            <Search></Search>
        </header>
    );
};

export default Header;

