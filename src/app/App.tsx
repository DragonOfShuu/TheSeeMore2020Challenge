import "./App.sass";
import Button from "../components/Button";
import NavBar from "./NavBar";
// import UserDataVisualizer from "./UserDataVisualizer";

function App() {
    return (
        <>
            <NavBar />
            <div className={`m-10 px-2`}>
                Hello?
                <Button>Error Me</Button>
                {/* <UserDataVisualizer /> */}
            </div>
        </>
    );
}

export default App;
