import { ArticleFooter, ArticleTitle } from "./article.entity";

export interface ArticleForm {
  title: ArticleTitle;
  footer: ArticleFooter;
  file?: File;
}