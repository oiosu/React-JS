# 04. Handling Events

##### 1. 함수 먼저 작성하기 

`Hello.js`

```javascript
export default function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <button>Show name</button>
            <button>Show age</button>
        </div>
    )
}
```

![image](https://user-images.githubusercontent.com/99783474/225359720-7f760816-a354-4793-b4a9-ad32741c3963.png)


> 미리 함수를 작성하고 이벤트 만들어주기 

```javascript
export default function Hello() {
    function showName() {
        console.log("Ready")
    }

    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
            <button>Show age</button>
        </div>
    )
}
```

![image](https://user-images.githubusercontent.com/99783474/225359789-0865ebea-e4b2-4f6e-ae5f-186fab13fe4e.png)



---



##### 2. 내부에 함수를 직접 작성하기 

```javascript
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
        </div>
```

> 2번째 방법이 매개 변수를 전하기가 쉽다. 



---



##### 3. `input`

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

> ```javascript
>  console.log(e.target.value)
> ```
>
> > * target : input 태그 
> > * value : input의 value 이기에 작성한 값이 된다. 

![image](https://user-images.githubusercontent.com/99783474/225359855-fa7645cc-5ed6-429f-a150-8eb73ede1aee.png)

```javascript
<input 
                type="text"
                onChange={e => {
                    console.log(e.target.value);
                }}></input>
```

> 위와 같은 코드와 작성해도 좋다. 

