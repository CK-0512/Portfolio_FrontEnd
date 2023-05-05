import { atom, atomFamily } from "recoil";
import { recoilPersist } from "recoil-persist";

export const { persistAtom: persistAtomMain} = recoilPersist({
    key: "persistAtomMain"
})

export const { persistAtom: persistAtom} = recoilPersist({
    key: "persistAtom"
})

export const mainOpacityAtomFamily = atomFamily({
    key:"app/mainAtomFamily",
    default: (mainNo) => 40,
    effects_UNSTABLE: [persistAtomMain],
})

export const eitherOpacityAtom = atom({
    key:"app/mainAtom",
    default: 40
})