import { useContext } from "react";
import { ThemeContext } from "../main";
function ChildInsideMain() {

    let value = useContext(ThemeContext)
    return (
        <div
            style={{
                border: "1px dashed red",
                padding: "10px",
                background: "pink",
                margin: "10px",
            }}
        >
            Child Inside Main Component {JSON.stringify(value)}
        </div>
    );
}

export default ChildInsideMain;

