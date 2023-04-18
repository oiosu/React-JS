# 05. state, useState

### state

> 컴포넌트가 가지고 있는 속성값이다. 



---

```javascript
export default function Hello() {
    let name = "Mike"

    function changeName() {
        // Mike 일때는 Jane으로 Jane 일때는 Mike 로 name change 해주기
        name = name === "Mike" ? "Jane" : "Mike";

        console.log(name);
        // DOM 업데이트 작업 
        document.getElementById("name").innerText = name;
    }

    return (
        <div> 
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
        
}
```

![image-20230321230330895](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230321230330895.png)

---



### Hooks API Reference

> * 초기 리액트 : 클래스형 컴포넌트 
>   * state
>   * lifecycle

![image-20230321230432392](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230321230432392.png)



---



```javascript
import { useState } from "react";

export default function Hello() {
    // let name = "Mike"

    // 상태값 관리를 위해 useState 사용하기
    // 자바스크립트 구조 분해 할당 
    const [name, setName] = useState('Mike');

    function changeName() {
        // Mike 일때는 Jane으로 Jane 일때는 Mike 로 name change 해주기
        // 2단계 : const newName = name === "Mike" ? "Jane" : "Mike";
        // setName(newName)
        
        // 1단계 : DOM 업데이트 작업 
        // document.getElementById("name").innerText = name;

        // 3단계
        setName(name === "Mike" ? "Jane" : "Mike");
    }

    return (
        <div> 
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );
        
}
```

![image-20230321231043106](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230321231043106.png)



---



#### Hello.js

```javascript
import { useState } from "react";

export default function Hello() {
    // let name = "Mike"
    const [name, setName] = useState('Mike');

    return (
        <div> 
            <h2 id="name">{name}</h2>
            <button 
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike");
                }}
            >
            Change
            </button>
        </div>
    );
        
}
```



#### App.js

```javascript
import './App.css';
import Hello from './component/Hello';


function App() {
  return (
    <div className='App'>
      <Hello />
      <Hello />
      <Hello />
    </div>

  );
}

// export default App;
export default App;
```

![image-20230321231607156](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230321231607156.png)
