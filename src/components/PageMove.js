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
                    { left: "7%", top: "22%", width: "5.5%", height: "75%" }
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
                    { left: "7%", top: "22%", width: "5.5%", height: "75%" }
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
                    { left: "14%", top: "26%", width: "10%" }
                }
            >
                <img
                    src="img/home.png"
                    alt=""
                    className="flex"
                    style={{ width: "75%",}}
                />
                <div
                    className="
                absolute 
                text-yellow-200 
                opacity-0 
                hover:opacity-100 
                transition 
                duration-500 
                flex 
                items-center 
                justify-center"
                    style={{ left: "0", top: "18%", width: "88%", height: "90%", fontSize: "27px" }}
                >
                    Home
                </div>
            </NavLink>
        </>
    );
}
