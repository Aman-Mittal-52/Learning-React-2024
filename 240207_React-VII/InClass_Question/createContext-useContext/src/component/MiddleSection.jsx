import Sidebar from "./Sidebar";
import Main from "./Main";

export default function MiddleSection() {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>Middle Section contains </p>
      <Sidebar />
      <Main />
    </div>
  );
}
