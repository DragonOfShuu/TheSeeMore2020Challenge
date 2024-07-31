import contactsLogo from "./../assets/contactsLogo.svg";

type Props = {
    heightClass?: string;
};

const NavBar = (props: Props) => {
    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-cblue-400 ${props.heightClass ?? `h-10`}`}
        >
            <div className={`flex flex-row size-full p-2`}>
                <img src={contactsLogo} className={`object-contain`} />
                <div className={`flex-grow`} />
            </div>
        </nav>
    );
};

export default NavBar;
