### 01_React Component

* 리액트에서는 자바스크립트 함수가 `html` 태그를 반환하도록 설정할 수 있으며 `html` 태그들을 반환하는 함수를 **Component (컴포넌트)** 라고 부른다.

* 컴포넌트를 부를 때는 보통 **함수의 이름**을 가져와서 부른다.

  * 컴포넌트 만들기(Header)

    > ```react
    > function Header(){
    >     retrun(
    >     	<header>
    >             <h1>header</h1>
    >         </header>
    >     )
    > }
    > ```
    >
    > : 함수로 만든 컴포넌트를 리액트에서는 **함수 컴포넌트** 라고 부른다.
    >
    > * 화살표 함수 컴포넌트도 가능 
    >
    > ```react
    > function Header = () => {
    >     retrun(
    >     	<header>
    >             <h1>header</h1>
    >         </header>
    >     )
    > }
    > ```
    >
    > : 클래스를 이용하여 컴포넌트를 만들어도 괜찮지만, 코드의 양이 늘어난다.

* 컴포넌트를 생성하는 함수의 이름은 반드시  첫글자가 **대문자** 가 되어야 한다. 



#### (1) Component 관계

```react
function App() {
  return (
    <>
      <Header />
      <h1>리액트 설정중입니다.</h1>
    </>
  );
}
```

> `<Header />` 가 자식 컴포넌트, `App()` 가 부모 컴포넌트 이다.
>
> : app 컴포넌트 밑에 자식으로서 header 컴포넌트가 있다 이렇게 계층 구조로서 컴포넌트 간의 관계를 표현할 수 있다. 

* 리액트의 모든 컴포넌트들은 화면에 렌더링 되기 위해서 app 컴포넌트의 자식 컴포넌트로서 존재해야 한다. 

* 모든 리액트 컴포넌트들은 app 컴포넌트를 최상위, 조상으로 갖는 계층 구조 

* 그리고 이때 모든 컴포넌트들의 조상 역할을 하는 app 컴포넌트를 특별히 모든 컴포넌트들의 뿌리 역할을 한다고 해서 **루트 컴포넌트** 라고 부른다. 

* 그리고 이러한 루트 컴포넌트는  `main.jsx` 라는 파일에 랜덤 메서드의 인수로써 전달된 컴포넌트이기 때문에 우리가 원하는 대로 변경이 가능하다 

  ```react
  ReactDOM.createRoot(document.getElementById("root")).render(
      <App />
  );
  ```



#### (2) 컴포넌트 관리 (모듈화)

* 모듈화를 위해서 컴포넌트별로 각각의 파일을 나눠 작성하는 것이 일반적이다.



* `src` > `components` > `Header.jsx`

```react
const Header = () => {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};

export default Header;
```

* `App.jsx`

```react
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <h1>리액트 설정중입니다.</h1>
    </>
  );
}

export default App;
```

