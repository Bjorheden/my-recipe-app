import React from "react";
import "./App.css";
import PageRouting from "./PageRouting"; // Import your routing component
import TopNavigationBar from "./components/organisms/TopNavigationBar/TopNavigationBar";

function App() {
    return (
        <div className="App">
            <TopNavigationBar />
            <PageRouting />
        </div>
    );
}

export default App;
