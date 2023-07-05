styled component 사용시 

- NextJS는 기본적으로 페이지를 SSR을 이용해 pre-rendering

- html 먼저 받아오고, css도 렌더링 된다. 하지만 CSS in JS 인 경우는 그 뒤에 로드된다. 

- 자바스크립트 코드가 적용이 되지 않은 페이지가 미리 렌더링되기 때문에 CSS-in-JS로 스타일링을 하면 스타일이 적용되지 않은 html 코드가 먼저 렌더링되는 문제가 발생하게 된다.


NextJS는 이에 대한 해결책을 제시한다. 
html 파일에 CSS-in-JS 형식으로 작성된 스타일 요소들을 주입시켜서 스타일이 뒤늦게 적용되는 문제를 해결할 수 있다.

`npm install styled-components`
`npm i --save-dev @types/styled-components`
