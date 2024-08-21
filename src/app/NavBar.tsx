import contactsLogo from "./../assets/contactsLogo.svg";
import ThemeSwitcher from "./pages/homeScreen/ThemeSwitcher";
import animeStyles from "./../GlobalAnimations.module.sass";

const NavBar = () => {
    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-cblue-400/80 dark:bg-cblue-950/80 backdrop-blur-sm z-10`}
        >
            <div
                className={`flex flex-row items-center size-full p-4
                `}
            >
                <img
                    src={contactsLogo}
                    className={`object-contain h-7 ${animeStyles.topScreenToPosition}`}
                />
                <div className={`flex-grow`} />
                <ThemeSwitcher className={`h-7 object-contain w-auto`} />
            </div>
        </nav>
    );
};

export default NavBar;
