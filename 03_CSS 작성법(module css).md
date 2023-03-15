# 03_CSS 작성법

1. 인라인 스타일로 스타일 작성하기 

```react
<h1 style={{
                color : "#f00",
                borderRight: "12px solid #000",
                marginBottom: "50px",
                opacity: 0.5,
            }}>
                Hello
            </h1>
```

> 특별한 이유가 없다면 인라인 방식으로 작성하지 않는다. 
>
> ![image-20230315230430711](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230315230430711.png)



2. `index.css` 와 `App.css` 활용하기 

> * `index.css` : 전체 스타일링에 영향을 주는 곳
> * `App.css` : App 컴포넌트에 한정된다. 

> (1) `App.js`
>
> ```react
> function App() {
>   return <div className='App'>
>     <Hello />
>     <div className="box"/>
>   </div>;
> }
> ```
>
> (2) `App.css`
>
> ```react
> .box {
>   width: 100px;
>   height: 100px;
>   background-color: red;
> }
> ```
>
> (3) `Hello.js`
>
> ```react
>         <div>
>             <h1 style={{
>                 color : "#f00",
>                 borderRight: "12px solid #000",
>                 marginBottom: "50px",
>                 opacity: 0.5,
>             }}>
>                 Hello
>             </h1>
>             <div className="box" />
>         </div>
> ```
>
> > `import "./Hello.css"` 
>
> (4) `Hello.css`
>
> ```css
> .box {
>     width: 200px;
>     height: 200px;
>     background-color: blue;
> }
> ```

> ##### 클래스 명이 같으면 오버라이딩이 생긴다 각각의 컴포넌트에 css 스타일을 적용한 것이 아니다. 
>
> ##### 따라서 `Hello.module.css` 을 생성한다. 



---



```react
import "./Hello.css"
```

위와 같은 코드를 다음과 같이 수정한다. 

```react
import styles from "./Hello.module.css";
```

styles 라는 객체가 생성이 된 것, 다음과 같이 코드를 수정한다. 

```react
<div className={styles.box} /> Hello </div>
```



---



`App.modules.css` 생성 

```css
.box {
    width: 100px;
    height: 100px;
    background-color: red;
  }
```



생성한 후 `App.js` 에 다음과 같이 코드 수정한다. 

```react
<div className={styles.box}/>App</div>;
```



![image-20230315232940284](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230315232940284.png)

> 사실 css 크기가 커지면 가장 많이 고민 되는 것들이 바로 네이밍, 상속, 오버라이딩에 대한 부분인데 이 방식으로 말끔하게 해결할 수 있다. 

> 글로벌로 관리되는 것이 아닌 컴포넌트로 관리되는 것이 장점이다. 



---



* 이번 프로젝트에는 `index.css` 에서만 작성할 예정