import React from "react";
import ReactDOM from "react-dom/client";


const jsxHeading = <h1> Hey buddy from JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
const Title = () => {
  return (
    <>Hey Title</>
  )
}

// react functional component
const Heading = () => {

    return (
    <div>
      <h1>Hey Buddy from FUCNTIONAL COMPONENTS</h1>
      <Title />
    </div>
    )
}

root.render(<Heading />);
