import "./App.sass";
import Button from "../components/Button";
import NavBar from "./NavBar";

function App() {
    return (
        <>
            <NavBar />
            <div className={`m-10 px-2`}>
                Hello?
                <Button>Error Me</Button>
            </div>
        </>
    );
}

export default App;
