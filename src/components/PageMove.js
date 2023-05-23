import { NavLink, useNavigate } from "react-router-dom";

export function Backspace() {
    const navigate = useNavigate();
    return (
        <>
            <span
                className="
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
                absolute 
                text-yellow-900
                opacity-0
                hover:opacity-100 
                transition 
                duration-300 
                flex 
                items-center 
                justify-center
                rotate-90"
                    style={{ left: "-8%", top: "24%", width: "120%", height: "40%", fontSize: "34px" }}
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
                    style={{ width: "100%", height: "80%" }}
                    className="absolute opacity-80"
                />
                <div
                    className="
                absolute 
                text-yellow-900
                opacity-0
                hover:opacity-100 
                transition 
                duration-300 
                flex 
                items-center 
                justify-center
                rotate-90"
                    style={{ left: "-8%", top: "18%", width: "120%", height: "40%", fontSize: "34px" }}
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
                absolute 
                opacity-0 
                hover:opacity-100 
                transition 
                duration-500 
                flex 
                items-center 
                justify-center"
                    style={{ left: "2%", top: "25%", width: "100%", height: "90%", fontSize: "30px", color: "#3df2f5" }}
                >
                    Home
                </div>
            </NavLink>
        </>
    );
}
