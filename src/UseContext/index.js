import Content from "./Content";
import { ThemeProvider } from "./ThemeContext";
import { useContext } from "react";
import { themeContext } from "./ThemeContext";

function App(){
    const context = useContext(themeContext);
   
    return (
            <div>
                <button onClick={context.handleToggle}>Toggle Button</button>
                <Content></Content>
            </div>
    )
}

export default App