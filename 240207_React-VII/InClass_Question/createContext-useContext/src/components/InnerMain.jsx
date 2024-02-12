import ChildInsideMain from "./childInsideMain.jsx";

export default function Main() {
  return (
    <div
      style={{
        border: "1px dashed green",
        padding: "10px",
        background: "lightgreen",
        margin: "10px",
      }}
    >
      <span>Main</span>
      <ChildInsideMain />
    </div>
  );
}

