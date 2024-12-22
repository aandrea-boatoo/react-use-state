import { useState } from "react";
import languages from "../data/languages";

function Button(id, title, active) {
    const [classButton, setClass] = useState("")
    let button = languages.map(() => {
        return <button key={id} className={classButton} onClick={() => { setClass("activeButton") }}>{title}</button>
    })
    return button
}

export default Button;