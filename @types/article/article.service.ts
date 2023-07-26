import { AXIOS_AUTH } from "../common/api/api.auth";
import { AXIOS_NOAUTH } from "../common/api/api.no-auth";
import { Article } from "./article.entity";
import { ArticleForm } from "./article.form";

export const ArticleService = {
  list: async () => {
    const result = await AXIOS_NOAUTH.get("/api/articles")
      .then((res) => {
        if (res.status === 200) return res.data;
        return [];
      })
      .catch((err) => []);
    return result;
  },

  create: async (articleForm: ArticleForm) => {
    const formData = ArticleService.toFormData(articleForm);
    AXIOS_AUTH.defaults.headers["Content-Type"] = "multipart/form-data";
    const result = await AXIOS_AUTH.post("/api/articles", formData).then(
      (res) => {
        if (res.status === 200) return res.data;
        return alert("게시글 등록에 실패하였습니다.");
      }
    );
    if (result) return alert("게시글이 등록되었습니다.");
    alert("게시글 등록에 실패하였습니다.");
  },

  get: async (articleId: number) => {
    const result = await AXIOS_NOAUTH.get(`/api/articles/${articleId}`).then(
      (res) => {
        if (res.status === 200) return res.data;
        return alert("게시글을 불러오는데 실패하였습니다.");
      }
    );
    return result as Article;
  },

  toFormData: (articleForm: ArticleForm) => {
    const formData = new FormData();

    Object.entries(articleForm.title).forEach(([key, value]) => {
      formData.append(`title.${key}`, value);
    });

    Object.entries(articleForm.footer).forEach(([key, value]) => {
      formData.append(`footer.${key}`, value);
    });

    if (articleForm.file) {
      formData.append("file", articleForm.file);
    }
    return formData;
  },
};
