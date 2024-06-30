### 02_JSX로 UI 표현하기

#### (1) JSX란?

```react
function Footer() {
    return (
    	<footer>
        	<h1>footer</h1>
        </footer>
    )
}
```

: 자바스크립트에서는 문법적인 오류로 판단한다. 

: 하지만 React.js에서는 **JSX** 문법을 사용하므로 적법하다고 판단한다. 

* JSX : 확장된 자바스크립트 문법 

![image-20240630164022355](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240630164022355.png)

> JSX를 이용하면 자바스크립트와 HTML을 혼용하여 사용할 수 있기 때문에 단순히 지금처럼 함수가 HTML 태그를 return 하는 수준을 넘어서  다음과 같이 작성할 수 있다. 
>
> ```react
> function Footer() {
>     const myName = "임수경";
>     
>     return (
>     	<footer>
>         	<h1>안녕 내이름은 {myName}이야</h1>
>             <h1>footer</h1>
>         </footer>
>     )
> }
> ```
>
>  컴포넌트 내부에 변수를 하나 선언한 후 변수의 값을 중괄호 안에 넣어서 HTML 로 렌더링 하도록 설정할 수 있다. 



#### (2)  JSX 예시

JSX 문법 내에서 자바스크립트 값을 HTML로 렌더링 하고 싶다면 중괄호 안에 작성하면 된다. 이때 중괄호 안에는 숫자나 문자열 값으로서 평가될 수 있는 식이라면 무엇이든지 넣어줄 수 있다. 

```react
function Main(){
    const number = 10;
    
    return (
    	<main>
        	<h1>main</h1>
            <h2>{number}</h2>
            <h2>{number} + 1</h2>
            <h2>{number % 2 === 0 ? "짝수" : "홀수"} </h2>
        </main>
    );
};
export default Main;
```



#### (3)  주의사항

* 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다. 
  * 자바스크립트 표현식 ) 삼항연산자, 값, 변수의 이름처럼 한줄의 코드가 특정한 값으로 평가될 수 있는 식이다. 
  * if, for문은 한줄로써 평가 될 수 없기 때문에 작성 불가 
* JSX에서는 숫자나 문자열 또는 배열의 값만 정상적으로 렌더링이 된다. 
* `const obj = { a : 1 }` 이러한 객체 값이 있을 때 `{obj.a}` 점표기법을 이용해서 문자열이나 숫자값을 렌더링 하도록 바꿔줘야 된다.

* 모든 태그는 닫혀 있어야 한다. 
* 최상위 태그는 반드시 하나여야만 한다. 
  * 빈태그로 묶어줘도 된다. 



#### (4)  조건에 따른 다른 UI 렌더링 (삼항연산자)

```react
function Main() {
  const user = {
    name : "임수경", 
    isLogin: true;
  }
  return <>
  {user.isLogin ? <div>로그아웃 </div> : <div>로그인</div>}
  </>;
}

export default Main;
```

> 로그아웃 

```react
function Main() {
  const user = {
    name : "임수경", 
    isLogin: false;
  }
  return <>
  {user.isLogin ? <div>로그아웃 </div> : <div>로그인</div>}
  </>;
}

export default Main;
```

> 로그인



#### (5)  조건에 따른 다른 UI 렌더링 (조건문)

```react
function Main() {
  const user = {
    name : "임수경", 
    isLogin: false;
  };
  if(user.isLogin) {
      return <div>로그아웃</div>;
  }else{
      return <div>로그인</div>
  }
}

export default Main;
```



#### (6)  스타일 적용 방법

##### 1. 요소에 스타일 속성 적용하기 

```react
<div style={{
        backgroundColor: "red",
    }}>
</div>
```

> * 주의할 점 : 대시 없이 연결되는 단어의 첫글자를 대문자로 작성해야 한다. (카멜케이스)

##### 2. components 폴더 안에 main.css 파일을 생성하여 적용하기

```react
import "./Main.css";
...
return <div className="logout"></div>
...
```

```css
.logout {
    background-color: red;
    border-bottom: 5px solid green;
}
```

