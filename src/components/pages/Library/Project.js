import { MenuBar2 } from "../../MenuBar";

export default function Project() {
    return (
        <>
            <div className="h-full">
                <MenuBar2/>
                <div
                    className="h-full relative"
                    style={{
                        minWidth: "100vh"
                    }}
                >
                    <img
                        src="img/libraryMain.png"
                        alt=""
                        className="
                        h-full 
                        w-full
                        opacity-50
                        "
                    />
                    <div
                        className="
                    absolute 
                    cursor-pointer
                    group
                    "
                        style={{
                            top: "0.1%",
                            left: "0",
                            width: "100%",
                            height: "100%"
                        }}
                    >
                        <img src="img/projects.png"
                            alt=""
                            className="
                            opacity-20
                            group-hover:opacity-100
                            transition
                            duration-1000
                            "
                            style={{
                                bottom: "0",
                                left: "0",
                                height: "99.1vh"
                            }}
                        />
                        <div
                                className="
                        absolute
                        text-6xl 
                        font-medium  
                        text-white
                        bg-green-300
                        bg-opacity-50
                        p-2
                        rounded-xl
                        border-2
                        border-green-500
                        pointer-events-none
                        opacity-0
                        group-hover:opacity-100
                        transition
                        duration-1000
                        "
                                style={{ top: "50%", left: "45.5%" }}
                            >
                                Project
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};