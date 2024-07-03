### 03_Props 컴포넌트에 값 전달하기

* `props` 는 부모 컴포넌트에서 자식 컴포넌트로 전달만 가능하다 그렇기 때문에 자식 컴포넌트에서 반대로 부모 컴포넌트에게 값을 전달하는 것은 리액트에서는 불가능하다 

---

```react
function App() {
    return (
    	<>
        	<Button text={"메일"} img={"mail.png"} />
        	<Button text={"카페"} img={"cafe.png"} />
        	<Button text={"블로그"} img={"blog.png"} />
        </>
    )
}
```

리액트에서는 부모 컴포넌트가 자식 컴포넌트들에게 함수의 인수를 전달하듯이 원하는 값을 전달해주는 것이 가능하다.

이렇게 컴포넌트에 전달된 값들을 **props** 라고 한다. 

> props를 이용하면 컴포넌트를 마치 함수를 호출하듯이 전달하는 값에 따라서 각각 다른 UI를 렌더링하도록 만들 수 있기 때문에 props는 리액트의 핵심개념 중  하나이다.



##### (1) 3개의 버튼 컴포넌트에 각각 텍스트 라는 `props` 로 메일, 카페, 블로그 라는 문자열 값을 전달하기 

```react
function App() {
  return (
    <>
      <Button text={"메일"} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  );
}
```



##### (2) 버튼 컴포넌트들이 전달된 `props` 를 받아와서 사용할 수 있도록 설정을 해야한다. 

버튼 컴포넌트에서 `props` 라는 매개변수로 부모 컴포넌트로부터 전달받은 `text={"메일"} ...` 값들을 불러와서 결과를 살펴보면 3개의 객체가 출력된다.

```react
const Button = (props) => {
  console.log(props);
  return <button>click</button>;
};

export default Button;
```

![image-20240705192933663](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240705192933663.png)

> app 컴포넌트에서 버튼 컴포넌트를 3개를 렌더링 했기 때문에 3개의 객체가 출력됨을 알 수 있다. 

> app 컴포넌트에서 자식 컴포넌트에게 전달하도록 설정한 `props`의 값이 객체 형태로 담겨서 잘 출력이 될 수 있음을 알 수 있다 .

> `props` 라는 매개변수에는 결국 객체가 제공이 될 것이고 해당 객체 내에는 전달한 `props` 의 값들이 프로퍼티로 하나씩 들어있다. 라고 이해하면 된다. 



##### (3) `props` 라는 매개변수에 객체 형태로 값이 저장된 것을 전 표기법을 사용하여 렌더링하기 

```react
// (3)-1 : props.text
const Button = (props) => {
  console.log(props);
  return <button>{props.text}</button>;
};

export default Button;
```

![image-20240705193610923](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240705193610923.png)

```react
// (3)-2 : props.color
function App() {
  return (
    <>
      <Button text={"메일"} color={"red"} />
      ...
    </>
  );
}
```

```react
const Button = (props) => {
  console.log(props);
  return <button style={{ color: props.color }}>{props.text}</button>;
};

export default Button;
```

![image-20240705193854001](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240705193854001.png)

##### (4) `props` 로 `color` 라는 값이 무조건 들어올 것이라고 예상하고 다음과 같은 코드로 작성하면 치명적인 오류가 발생한다. 

```react
<button style={{ color: props.color }}>
	{props.text} - {props.color}
</button>
```

> 예를 들어, color 를 대문자로 만들어서 렌더링 시켜주기 위해 문자열 메서드인 `toUpperCase` 를 호출하도록 작성해주면 오류가 발생하게 된다. 
>
> `{props.text} - {props.color.toUpperCase}` => 오류 발생!
>
> * 이유 : 두번째, 세번쨰 버튼의 경우에는 `ColorProps` 로 전달된 값이 없다 그래서 버튼 컴포넌트의 Color의 값이 Undefined일텐데 
>
>   Undefined에 점 표기법을 사용하고 `toUpperCase` 라는 메서드를 호출하려고 하니 오류가 발생하는 것 
>
>   그래서 `props`로 어떠한 값이 반드시 전달될 것이라고 예상하고 코드를 작성하는것은 위험하다. 
>
> * 해결방법 : `ColorProps` 의 값이 없을때, 값이 전달되지 않았을 때, 자동으로 설정도리 기본 값을 설정해서 오류를 해결할 수 있다. 



##### (5) 기본값을 설정하는 방법 

```react
const Button = (props) => {
  console.log(props);
  return (
    <button style={{ color: props.color }}>
      {props.text} - {props.color.toUpperCase()}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;

```

> 자동으로 `defaultProps` 설정에 의해서 블랙이라는 값으로 설정이 되기 때문에  `toUpperCase` 를 호출해도 전혀 문제가 되지 않는다. 

![image-20240705195240585](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240705195240585.png)

##### (6) 객체의 구조분해 할당 문법을 이용하여 코드 작성하기 

`props` 라는 매개변수에 객체 형태의 값이 무조건 들어온다는 것을 알 수 있다. 

 (전달한 `props` 값들은 객체 형태로 묶여서 전달이 된다고 했기 때문이다. ) 따라서 점표기법으로 `props`의 값에 접근하지 말고 대신 객체의 구조분해 할당 문법을 이용하여 매개변수의 위치에 중괄호를 열어 텍스트와 색깔 이라는 프로퍼티의 값을 바로 꺼내도록 설정하면 된다. 

```react
const Button = ({ text, color }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;

```



##### (7) `props` 로 여러 개의 값을 전달해줘야 한다면 다음과 같이 코드 작성하기 

값들을 const 라는 객체로 묶어준 다음 스프레드 연산자를 이용하기 

```react
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"} />
    </>
  );
}
```



##### (8) `props` 는 일반적인 문자열 같은 자바스크립트 값 뿐만 아니라 HTML 요소나 React 컴포넌트도 전달할 수도 있다. 

그래서 마지막 버튼 컴포넌트를 추가적으로 닫는 태그를 만든 다음에 일반적으로 HTML요소에 자식 요소를 추가한다. 

```react
// app
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <div>자식요소</div>
      </Button>
    </>
  );
}
```

자식 요소로 배치된 div 태그가 자동으로 버튼 컴포넌트에 `children` 이라는 `props` 로 전달이 된다. 자식요소들은 자동으로 `children` 이라는 `props` 로 전달이 된다. 

그래서 버튼 컴포넌트에서 `children props` 에 들어 있는 값을 렌러딩 할 수 있도록 다음 처럼 설정해 주면 자식 요소가, 다음처럼 출력이 된다. 

```react
const Button = ({ text, color, children }) => {
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

export default Button;
```

![image-20240705201739054](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240705201739054.png)



##### (9) Header 컴포넌트도 `children props` 로 전달할 수 있다.

```react
  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  );
}
```

![image-20240705201918068](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240705201918068.png)
