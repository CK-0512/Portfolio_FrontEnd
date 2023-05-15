import { atomFamily, atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const { persistAtom: persistAtomFamily} = recoilPersist({
    key: "persistAtom"
})

/*export const { persistAtom: persistAtom} = recoilPersist({
    key: "persistAtom"
})
*/

export const opacityAtomFamily = atomFamily({
    key:"app/atomFamily",
    default: (mainNo) => 40,
    effects_UNSTABLE: [persistAtomFamily],
})


/*export const opacitySwitchAtom = atom({
    key:"app/mainAtom",
    default: false
})
*/