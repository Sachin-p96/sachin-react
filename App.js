import React from "react";
import ReactDOM from "react-dom/client";


const jsxHeading = <h1> Hey buddy from JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

// react functional component
const Heading = () => {
    return <h1>Hey Buddy from FUCNTIONAL COMPONENTS</h1>
}

root.render(<Heading />);
