import { MenuBar1 } from "../../MenuBar";

export default function BackEnd() {
    return (
        <>
            <div className="h-full w-full flex">
                <MenuBar1/>
                <div
                    className="
                    flex
                    flex-1
                h-full 
                relative
                ">
                    <img
                        src="img/potion1.png"
                        alt=""
                        className="
                        flex
                        flex-1
                        h-full 
                        opacity-50
                            "
                    />
                    <div
                        className="
                        absolute 
                        cursor-pointer
                        opacity-30
                        hover:opacity-100
                            transition 
                            duration-1000
                    "
                        style={{
                            top: "22.05%",
                            left: "0%",
                            height: "89vh",
                            width: "97.95%"
                        }}
                    >
                        <img
                            src="img/backEnd.png"
                            alt=""
                            className="
                            absolute
                            "
                            style={{
                                height: "77.1vh",
                                width: "100%"
                            }}
                        />
                        <div
                        className="
                        absolute 
                        text-4xl 
                        font-medium 
                        text-white
                        bg-green-700
                        bg-opacity-50
                        p-2
                        rounded-xl
                        border-2
                        border-green-800
                        pointer-events-none
                        "
                        style={{
                            top: "40%",
                            left: "45%"
                        }}
                        >
                            BackEnd
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};