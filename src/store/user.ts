import { atom } from "recoil";
interface user {
  id: string;
  first_name: string;
  last_name: string;
  role?: string;
  year?: string;
  branch?: string;
  phonenumber?: number;
  githublink?: string;
  image: string;
  gender: string;
}
export const userstate = atom<user | null>({
  key: "user",
  default: null,
});
