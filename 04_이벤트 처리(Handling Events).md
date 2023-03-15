# 04. Handling Events

##### 1. 함수 먼저 작성하기 

`Hello.js`

```react
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

![image-20230315235339912](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230315235339912.png)

> 미리 함수를 작성하고 이벤트 만들어주기 

```react
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

![image-20230315235410357](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230315235410357.png)



---



##### 2. 내부에 함수를 직접 작성하기 

```react
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

```react
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

> ```react
>  console.log(e.target.value)
> ```
>
> > * target : input 태그 
> > * value : input의 value 이기에 작성한 값이 된다. 

![image-20230316000109979](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230316000109979.png)

```react
<input 
                type="text"
                onChange={e => {
                    console.log(e.target.value);
                }}></input>
```

> 위와 같은 코드와 작성해도 좋다. 

