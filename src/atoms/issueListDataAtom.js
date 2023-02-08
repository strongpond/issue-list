import { atom } from "recoil";

export const issueListDataAtom = atom({
  key: "issueListData",
  default: [],
});

export const issueSelectedAtom = atom({
  key: "issueSelected",
  default: [],
});

export const pageNumAtom = atom({
  key: "pageNum",
  default: 1,
});
