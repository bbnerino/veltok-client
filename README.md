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

# styled component 이슈

Next.js에서 Prop `className` did not match 경고가 뜨는 이유

Next.js에서 styled-components를 사용할 때 \_document를 따로 설정해서 SSR될 때 CSS가 head에 주입되도록 해야 한다. 만약 따로 설정하지 않는다면,styled-components가 적용되지 않은 상태로 렌더링될 수 있다.

하지만 저 에러가 뜨는 이유는 서버와 클라이언트의 클래스명이 다른 것이 원인이다.

Next.js는 첫 페이지 로드가 SSR로 동작하기 때문에, 서버에서 생성된 컴포넌트와 CSR로 클라이언트에서 생성된 컴포넌트의 클래스명이 서로 달라지게 된다.

만약 CNA(create-next-app)을 사용하고 있다면, 루트 디렉토리에 .babelrc 파일을 만들고 아래와 같이 작성하면 된다.

```js
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "babel-plugin-styled-components",
      {
        "ssr": true, // SSR을 위한 설정
        "displayName": true, // 클래스명에 컴포넌트 이름을 붙임
        "pure": true // dead code elimination (사용되지 않는 속성 제거)
      }
    ]
  ]
}
```

Next.js 12버전부터 babel 대신 swc를 사용하여 컴파일하도록 변경되었다

```
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};
```
