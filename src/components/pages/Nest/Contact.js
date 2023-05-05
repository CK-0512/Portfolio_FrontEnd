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
                    opacity-30
                    hover:opacity-100
                        transition 
                        duration-1000
                "
                        style={{
                            top: "0.3%",
                            width: "100%",
                            height: "88%"
                        }}
                    >
                        <img
                            src="img/dragon2.png"
                            alt=""
                            className="h-full w-full" />
                    </div>
                </div>
            </div>
        </>
    );
};