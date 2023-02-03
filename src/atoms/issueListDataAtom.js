import { atom } from "recoil";

export const issueListDataAtom = atom({
  key: "issueListData",
  default: [],
});

export const issueSelectedAtom = atom({
  key: "issueSelected",
  default: [],
});
