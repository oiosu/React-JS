### 03_Props 컴포넌트에 값 전달하기

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



