import { User } from "../user/user.entity";

export interface Article {
  id: number;
  fileUrl?: string;
  title: ArticleTitle;
  footer: ArticleFooter;
  likeCount: number;
  user: User;
}

export interface ArticleTitle {
  content: string;
  size: number;
  weight: 1 | 2 | 3 | 4 | 5;
  color: string;
  fontFamily: string;
  heightSort: "TOP" | "CENTER" | "BOTTOM";
  widthSort: "LEFT" | "CENTER" | "RIGHT";
}

export interface ArticleFooter {
  content: string;
  size: number;
  weight: 1 | 2 | 3 | 4 | 5;
  color: string;
  fontFamily: string;
  background: boolean;
}
