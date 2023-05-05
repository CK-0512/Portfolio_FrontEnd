import { useState } from "react";
import { useTimeout } from "usehooks-ts";
import { Navigate } from "react-router-dom";

function Climbing() {
    const [visible, setVisible] = useState(true)

    const hide = () => setVisible(false)

    useTimeout(hide, 4000)


    return (
        <>
            {visible
                ? <img
                    src="img/climbing2.gif"
                    alt=""
                    className="
                        flex
                        flex-1
                        h-full 
                        "
                />
                : <Waking />}
        </>
    );
}

function Waking() {
    const [visible, setVisible] = useState(true)

    const hide = () => setVisible(false)

    useTimeout(hide, 3000)


    return (
        <>
            {visible
                ? <img
                    src="img/waking2.gif"
                    alt=""
                    className="
                        flex
                        flex-1
                        h-full 
                        "
                />
                : <Navigate to="/Contact"/>}
        </>
    );
}

export default function ToContact() {
    return (
        <>
            <div className="w-full h-full">
                <div
                    className="
                    flex
                    flex-1
                    h-full
                ">
                    <Climbing />
                </div>
            </div>
        </>
    )
}