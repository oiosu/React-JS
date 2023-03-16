# React-JS
> 리액트로 영어 단어 학습장 만들기 

```
npx create-react-app voca
```

### [1. 컴포넌트, JSX](https://github.com/oiosu/React-JS/blob/master/01_%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%2C%20JSX.md)
> `Component` : MVC의 뷰를 독립적으로 구성하여 재사용을 할 수 있고 이를 통해 새로운 컴포넌트를 쉽게 만들 수 있다.

> `JSX` : JSX(JavaScript XML)는 Javascript에 XML을 추가한 확장한 문법 


### [2. 첫 컴포넌트 만들기](https://github.com/oiosu/React-JS/blob/master/02_%EC%B2%AB%20%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%20%EB%A7%8C%EB%93%A4%EA%B8%B0.md) 
![image](https://user-images.githubusercontent.com/99783474/225535622-099e00b8-c4b2-4c53-80bf-ce7582b7be2d.png)


### [3. CSS 작성법(Module CSS)](https://github.com/oiosu/React-JS/blob/master/03_CSS%20%EC%9E%91%EC%84%B1%EB%B2%95(module%20css).md)
> `index.css` : 전체 스타일링에 영향을 주는 곳

> `App.css` :  App 컴포넌트에 한정된다.


### [4. 이벤트 처리(Handling Events)](https://github.com/oiosu/React-JS/blob/master/04_%EC%9D%B4%EB%B2%A4%ED%8A%B8%20%EC%B2%98%EB%A6%AC(Handling%20Events).md)
```javascript
  function showText(e){
        console.log(e.target.value)
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button 
                onClick={() => {
                    console.log(30);
                }}
                >
                    Show age
            </button>
            <input type="text" onChange={showText}></input>

        </div>
```

> `target` : input 태그
> `value` : input의 value 이기에 작성한 값이 된다.


