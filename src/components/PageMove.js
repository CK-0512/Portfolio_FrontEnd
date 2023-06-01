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
        "
                style={
                    { left: "3%", top: "16%", width: "37%", height: "75%" }
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
        "
                style={
                    { left: "0", top: "14%", width: "37%", height: "80%" }
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
                homebutton_box
        cursor-pointer
        absolute
        "
                style={
                    { left: "45%", top: "5%", width: "50%", height: "90%" }
                }
            >
                <img
                    src="img/home1.png"
                    alt=""
                    style={{ width: "95%", height: "90%" }}
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
