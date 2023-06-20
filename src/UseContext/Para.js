import { themeContext } from "./ThemeContext.js"
import { useContext } from "react"

function Para(){
    const context = useContext(themeContext);
    return (
        <p className={context.theme}>Welcome to Takis Tech</p>
    )
}

export default Para