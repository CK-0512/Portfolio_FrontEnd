import { NavLink } from "react-router-dom";
import { MenuBar1 } from "../MenuBar";
import { UseSwitchChangeOpacity, useChangeOpacity } from "../Hook";
import { useState } from "react";

export default function MainPage() {

    //const controllChangeState = UseSwitchChangeOpacity();
    const opacityChangeState1 = useChangeOpacity(1);
    const opacityChangeState2 = useChangeOpacity(2);
    const opacityChangeState3 = useChangeOpacity(3);
    const opacityChangeState4 = useChangeOpacity(4);

    const [opacitied, setOpacitied] = useState(0);

    return (
        <>
        <button
            className="z-50" 
            onClick={() => setOpacitied(1)}>초기화</button>
            <div className="h-full w-full relative">
                <MenuBar1 />
                {/* <button onClick={() => setOpacities(50)}>초기화</button> */}
                <div
                    className="h-full w-full relative flex">
                    <div className="h-full relative flex flex-1">
                        <img
                            src="img/shop_background.png"
                            alt=""
                            className="h-full flex flex-1"
                            style={{
                                opacity: opacitied === 1 ? "0.4" : `${opacityChangeState1.opacities}`,
                                transition: "opacity 5s cubic-bezier(0.4, 0, 0.2, 1) 0s"
                            }}
                        />
                        <NavLink
                            to="/Skills"
                            className="
                        absolute 
                        cursor-pointer
                        "
                            style={{
                                top: "37.4%",
                                left: "11.5%",
                                width: "81%",
                                height: "26.1vh"
                            }}
                        >
                            <img
                                src="img/shop2.png"
                                alt=""
                                className="
                            absolute
                            opacity-40 
                            hover:opacity-100
                            "
                                style={{
                                    width: "97.4%",
                                    height: "25.4vh",
                                    transition: "opacity 3s"
                                }}
                                onClick={opacityChangeState1.clickOpacitied}
                                onMouseOver={() => opacityChangeState1.opacities === 100 ? true : opacityChangeState1.hoverOpacitied}
                                onMouseOut={() => opacityChangeState1.opacities === 100 ? true : opacityChangeState1.clear}
                            />
                            <div
                                className="
                        absolute
                        text-4xl 
                        font-medium  
                        text-white
                        bg-purple-300
                        bg-opacity-50
                        p-2
                        rounded-xl
                        border-2
                        border-purple-700
                        rotate-6
                        pointer-events-none
                        "
                                style={{ top: "42%", left: "56%" }}
                            >
                                Skills
                            </div>
                        </NavLink>
                    </div>
                    <div className="h-full relative flex flex-1">
                        <img
                            src="img/guild_background.png"
                            alt=""
                            className="h-full flex flex-1"
                            style={{
                                opacity: `${opacityChangeState2.opacities}%`,
                                transition: "opacity 5s cubic-bezier(0.4, 0, 0.2, 1) 0s"
                            }}
                        />
                        <NavLink
                            to="/Profile"
                            className="
                        absolute 
                        cursor-pointer
                        "
                            style={{
                                top: "38%",
                                left: "2.3%",
                                width: "100%",
                                height: "50vh"
                            }}
                        >
                            <img
                                src="img/guild2.png"
                                alt=""
                                className="
                            absolute
                            opacity-40
                            hover:opacity-100
                            "
                                style={{
                                    width: "100%",
                                    height: "50vh",
                                    transition: "opacity 3s"
                                }}
                                onClick={opacityChangeState2.clickOpacitied}
                                onMouseOver={() => opacityChangeState2.opacities === 100 ? true : opacityChangeState2.hoverOpacitied}
                                onMouseOut={() => opacityChangeState2.opacities === 100 ? true : opacityChangeState2.clear}
                            />
                            <div
                                className="
                        absolute 
                        text-4xl 
                        font-medium 
                        text-white
                        italic
                        bg-red-300
                        bg-opacity-50
                        p-2
                        rounded-xl
                        border-2
                        border-red-700
                        rotate-3
                        pointer-events-none
                        "
                                style={{ top: "50%", left: "59%" }}
                            >
                                Profile
                            </div>
                        </NavLink>
                    </div>
                    <div className="h-full relative flex flex-1">
                        <img
                            src="img/contact_background.png"
                            alt=""
                            className="h-full flex flex-1"
                            style={{
                                opacity: `${opacityChangeState3.opacities}%`,
                                transition: "opacity 5s cubic-bezier(0.4, 0, 0.2, 1) 0s"
                            }}
                        />
                        <NavLink
                            to="/ToContact"
                            className="
                        absolute 
                        cursor-pointer
                        "
                            style={{
                                top: "23.%",
                                left: "20.5%",
                                width: "29.3%",
                                height: "19.5vh"
                            }}
                        >
                            <img
                                src="img/contact.png"
                                alt=""
                                className="
                            absolute
                            opacity-40
                            hover:opacity-100
                            "
                                style={{
                                    width: "100%",
                                    height: "19.5vh",
                                    transition: "opacity 3s"
                                }}
                                onClick={opacityChangeState3.clickOpacitied}
                                onMouseOver={() => opacityChangeState3.opacities === 100 ? true : opacityChangeState3.hoverOpacitied}
                                onMouseOut={() => opacityChangeState3.opacities === 100 ? true : opacityChangeState3.clear}
                            />
                            <div
                                className="
                        absolute 
                        text-4xl 
                        font-medium 
                        text-white
                        italic
                        bg-blue-300
                        bg-opacity-50
                        p-2
                        rounded-xl
                        border-2
                        border-blue-700
                        pointer-events-none
                        "
                                style={{ top: "40%", left: "8%" }}
                            >
                                Contact
                            </div>
                        </NavLink>
                    </div>
                    <div className="h-full relative flex flex-1">
                        <img
                            src="img/library_background.png"
                            alt=""
                            className="h-full flex flex-1"
                            style={{
                                opacity: `${opacityChangeState4.opacities}%`,
                                transition: "opacity 5s cubic-bezier(0.4, 0, 0.2, 1) 0s"
                            }}
                        />
                        <NavLink
                            to="/Project"
                            className="
                        absolute 
                        cursor-pointer
                        "
                            style={{
                                top: "13.8% ",
                                left: "1.5%",
                                width: "80%",
                                height: "78.4vh"
                            }}
                        >
                            <img
                                src="img/library2.png"
                                alt=""
                                className="
                            absolute
                            opacity-40 
                            hover:opacity-100
                            "
                                style={{
                                    minHeight: "78.4vh",
                                    transition: "opacity 3s"
                                }}
                                onClick={opacityChangeState4.clickOpacitied}
                                onMouseOver={() => opacityChangeState4.opacities === 100 ? true : opacityChangeState4.hoverOpacitied}
                                onMouseOut={() => opacityChangeState4.opacities === 100 ? true : opacityChangeState4.clear}
                            />
                            <div
                                className="
                        absolute
                        text-4xl 
                        font-medium  
                        text-white
                        italic
                        bg-yellow-200
                        bg-opacity-40
                        p-2
                        rounded-xl
                        border-2
                        border-yellow-700
                        pointer-events-none
                        "
                                style={{ top: "47%", left: "42%" }}
                            >
                                Project
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}