import { atom } from "recoil";
interface project {
  _id: string;
  title: string;
  tag: string;
  description: string;
  mentor: string;
  technology: string;
}
interface user {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role?: string;
  year?: string;
  branch?: string;
  phonenumber?: number;
  githublink?: string;
  image: string;
  gender: string;
  projects?: project[];
}
export const userstate = atom<user | null>({
  key: "user",
  default: null,
});
