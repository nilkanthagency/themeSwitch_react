import { useState } from "react"
import { useTheme } from "../ToggleContext/ToggaleContext"


const ToggleBtn = () => {
    const [status, setStatus] = useState(false)

    const { lightTheme, darkTheme } = useTheme()

    if (status) {
        darkTheme()
    } else {
        lightTheme()
    }

    return (
        <div>
            <div>
                <input
                    type="checkbox"
                    class="peer sr-only"
                    checked={status}
                />
                <div
                    class="bg-white border-2 border-gray-400  px-4 w-12 h-7 after:content-[''] after:w-5 rounded-3xl after:transition-all duration-700 after:h-5 relative after:absolute after:rounded-xl after:top-[2px] after:left-[2px] after:bg-blue-400 peer-checked:after:translate-x-5 peer-checked:after:bg-blue-500 peer-checked:bg-blue-100 peer-checked:border-blue-500"
                    onClick={() => setStatus((prev) => !prev)}
                ></div>
            </div>
        </div>
    )
}

export default ToggleBtn