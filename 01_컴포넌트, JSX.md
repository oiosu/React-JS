# 01_컴포넌트, JSX

```REACT
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coding React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

```

> 이 함수가 RETURN 하는 것이 바로 `JSX(JavaScript XML)`  이다.
>
> `<div className="App"></div>` 의 클래스는 자바스크립트의 예약어 이기 때문에 클래스 네임으로 작성해야 한다.  또한 스타일은 객체로 전달해줘야 적용이 된다. 
>
> ```react
> function App() {
>   return (
>     <div className="App">
>       <h1 style={{
>         color : "red",
>       }}>WELCOME</h1>
>     </div>
>   );
> }
> ```
>
> ![image](https://user-images.githubusercontent.com/99783474/225358788-0a87960e-030f-4a53-a8d8-3f34b3a09580.png)
>
> ```react
> import './App.css';
> 
> function App() {
>   const name = "Tom!";
>   return (
>     <div className="App">
>       <h1 style={{
>         color : "red",
>         backgroundColor: "green",
>       }}
>       >
>         Hello, {name}.
>         </h1>
>     </div>
>   );
> }
> 
> export default App;
> 
> ```
>
>![image](https://user-images.githubusercontent.com/99783474/225358846-78ec0f41-d861-4aa0-bef4-4ab7dd055077.png)
>
> ```react
>     <div className="App">
>       <h1 style={{
>         color : "red",
>         backgroundColor: "green",
>       }}
>       >
>         Hello, {name}.  <p>{2 + 5}</p>
>         </h1>
>     </div>
> ```
>
>![image](https://user-images.githubusercontent.com/99783474/225358882-709bee30-1dbc-484e-8935-fab836904d28.png)
>
> > 🔻 주의 ) 불린 타입이나 객체는 표현하지 못한다. 

> ```react
> function App() {
>   const name = "Tom!";
>   const naver = {
>     name : "네이버",
>     url : "https://naver.com",
>   };
>   return (
>     <div className="App">
>       <h1 style={{
>         color : "red",
>         backgroundColor: "green",
>       }}
>       >
>         Hello, {name}.  <p>{2 + 5}</p>
>         </h1>
>         <a href='{naver.url}'>{naver.name}</a>
>     </div>
>   );
> }
> 
> ```
>
> ![image](https://user-images.githubusercontent.com/99783474/225358927-15dc7e1a-ae93-4230-93a0-c5dd877d3b02.png)

