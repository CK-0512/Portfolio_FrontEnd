import { MenuBar2 } from "../../MenuBar";

export default function Profile() {
    return (
        <>
            <div className="h-full">
                <MenuBar2 />
                <div
                    className="h-full relative"
                    style={{
                        minWidth: "100vh"
                    }}
                >
                    <img
                        src="img/reception.png"
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
                            top: "28.9%",
                            left: "10.35%",
                            height: "60%",
                            width: "70%",
                        }}
                    >
                        <img src="img/introduce.png"
                            alt=""
                            className="
                            opacity-40
                            group-hover:opacity-100
                            transition
                            duration-1000
                            "
                            style={{
                                width: "97.8%",
                                height: "66.9vh"
                            }}
                        />
                        <div
                            className="
                        absolute 
                        text-5xl 
                        font-medium 
                        text-white
                        pointer-events-none
                        opacity-0
                        group-hover:opacity-100
                        transition
                        duration-1000
                        "
                            style={{ top: "90.5%", left: "45%" }}
                        >
                            Introduce
                        </div>
                    </div>

                    {/* <div
                        className="
                    absolute 
                    cursor-pointer
                    "
                        style={{
                            top: "15.72%",
                            left: "42.05%",
                            width: "16.4%",
                            height: "20vh"
                        }}
                    >
                        <img src="img/certificate.png"
                            alt=""
                            className="
                            opacity-40
                            hover:opacity-100
                            transition
                            duration-1000
                            "
                            style={{
                                width: "99%",
                                height: "25.3vh"
                            }}
                        />
                        <div
                            className="
                        absolute 
                        text-3xl 
                        font-medium 
                        text-white
                        pointer-events-none
                        "
                            style={{ top: "-17%", left: "28%"}}
                        >
                            Certificate
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};