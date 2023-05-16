import { MenuBar2 } from "../../MenuBar";

export default function Contact() {
    return (
        <>
            <div className="h-full w-full flex">
                <MenuBar2/>
                <div
                    className="
                    flex
                    flex-1
                h-full 
                relative
                ">
                    <img
                        src="img/nest.jpg"
                        alt=""
                        className="h-full w-full opacity-50"
                    />
                    <div
                        className="
                        absolute 
                        cursor-pointer
                        group
                "
                        style={{
                            top: "0.35%",
                            width: "100%",
                            height: "88%"
                        }}
                    >
                        <img
                            src="img/dragon2.png"
                            alt=""
                            className="
                            h-full 
                            w-full 
                            opacity-20
                            group-hover:opacity-100
                            transition
                            duration-1000" 
                            />
                            <div
                                className="
                        absolute
                        text-8xl 
                        font-medium  
                        text-red-900
                        pointer-events-none
                        opacity-0
                        group-hover:opacity-100
                        transition
                        duration-1000
                        "
                                style={{ top: "56%", left: "40%" }}
                            >
                                Contact
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};