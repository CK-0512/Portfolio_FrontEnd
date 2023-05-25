import { NavLink, useNavigate } from "react-router-dom";

export function Backspace() {
    const navigate = useNavigate();
    return (
        <>
            <span
                className="
                backspace_box
        cursor-pointer
        absolute
        -rotate-90
        "
                style={
                    { left: "8%", top: "0", width: "28%", height: "100%" }
                }
                onClick={(() => navigate(-1))}>
                <img
                    src="img/backSpace2.png"
                    alt=""
                    style={{ width: "100%", height: "90%" }}
                    className="absolute opacity-80"
                />
                <div
                    className="
                    hover:opacity-100 
                    "
                    style={{ left: "-8%", top: "24%", width: "120%", height: "40%" }}
                >
                    Back
                </div>
            </span>
        </>
    );
}

export function Backspace2() {
    const navigate = useNavigate();
    return (
        <>
            <span
                className="
                backspace_box
        cursor-pointer
        absolute
        -rotate-90
        "
                style={
                    { left: "8%", top: "0", width: "28%", height: "100%" }
                }
                onClick={(() => navigate(-2))}>
                <img
                    src="img/backSpace2.png"
                    alt=""
                    style={{ width: "100%", height: "90%" }}
                    className="absolute opacity-80"
                />
                <div
                    className="
                    hover:opacity-100 
                    "
                    style={{ left: "-8%", top: "24%", width: "120%", height: "40%" }}
                >
                    Back
                </div>
            </span>
        </>
    );
}

export function GoHome() {
    return (
        <>
            <NavLink
                to="/MainPage"
                className="
                home_box
        cursor-pointer
        absolute
        "
                style={
                    { left: "45%", top: "15%", width: "50%" }
                }
            >
                <img
                    src="img/home4.png"
                    alt=""
                    className="flex"
                />
                <div
                    className="
                hover:opacity-100 
                "
                    style={{ left: "2%", top: "25%", width: "100%", height: "90%" }}
                >
                    Home
                </div>
            </NavLink>
        </>
    );
}
