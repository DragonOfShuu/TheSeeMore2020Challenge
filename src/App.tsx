import "./App.sass";

function App() {
    return (
        <>
            {(() => {
                throw new Error("This error is garbage");
            })()}
        </>
    );
}

export default App;
