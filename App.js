const heading = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Hello from React",
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
