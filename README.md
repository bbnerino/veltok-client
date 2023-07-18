styled component 사용시

- NextJS는 기본적으로 페이지를 SSR을 이용해 pre-rendering

- html 먼저 받아오고, css도 렌더링 된다. 하지만 CSS in JS 인 경우는 그 뒤에 로드된다.

- 자바스크립트 코드가 적용이 되지 않은 페이지가 미리 렌더링되기 때문에 CSS-in-JS로 스타일링을 하면 스타일이 적용되지 않은 html 코드가 먼저 렌더링되는 문제가 발생하게 된다.

NextJS는 이에 대한 해결책을 제시한다.
html 파일에 CSS-in-JS 형식으로 작성된 스타일 요소들을 주입시켜서 스타일이 뒤늦게 적용되는 문제를 해결할 수 있다.

`npm install styled-components`
`npm i --save-dev @types/styled-components`

document 파일 작성 필요

```ts
import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}
```

# Axios Mock 데이터 만들기

jest-mock-axios 라이브러리를 이용해서 axios의 mock 데이터를 만들어준다.

`__mocks__` 폴더에 axios.ts 를 만들어준다.

```ts
import mockAxios from "jest-mock-axios";
export default mockAxios;
```

그리고 이 mockAxios를 불러와 사용해준다.

```ts
describe("회원가입 3페이지", async () => {
  test("다음 페이지로 넘어가기 시도", async () => {
    // axios.post 를 mock 함수로 오버라이드 한다.
    mockAxios.post.mockResolvedValueOnce({
      status: 200,
      data: {
        nickName: "louie",
      },
    });

    render(<SignupPage chapterData={3} />);
    const $nextBtn = await screen.findByText("Sign Up");
    await userEvent.click($nextBtn);
    await delay(500);

    const $page4 = await screen.findByText("louie님");
    expect($page4).toBeInTheDocument();
  });
});
```
