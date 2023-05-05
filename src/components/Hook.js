import { useRecoilState } from "recoil";
import { mainOpacityAtomFamily, eitherOpacityAtom } from "./atoms";

export function useChangeOpacityMain(mainNo) {
    const [opacities, setOpacities] = useRecoilState(mainOpacityAtomFamily(mainNo));

    const clickOpacitied = () => setOpacities(100);
    const hoverOpacitied = () => setOpacities(99);
    const clear = () => setOpacities(40);

    return {
        opacities,
        clickOpacitied,
        hoverOpacitied,
        clear
    };
}

export function useChangeOpacityEither () {
    const [opacities, setOpacities] = useRecoilState(eitherOpacityAtom);

    const clickOpacitied = () => setOpacities(100);
    const hoverOpacitied = () => setOpacities(99);
    const clear = () => setOpacities(40);

    return {
        opacities,
        clickOpacitied,
        hoverOpacitied,
        clear
    };
}