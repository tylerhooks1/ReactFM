
import React from 'react';
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Diesel" animal="Dog" breed="Maltipoo" />
            <Pet name="Luna" animal="Dog" breed="Havanese" />
            <Pet name="Patrick" animal="Starfish" breed="Pink" />
        </div>
    );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
