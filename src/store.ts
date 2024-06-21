// Jotai store

import { atom } from "jotai";

export const delayedBackgroundAtom = atom("formal");
export const instantBackgroundAtom = atom("formal");
export const timeoutRefAtom = atom<number | null>(null);
