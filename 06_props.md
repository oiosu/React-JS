# 06_props

> 속성값을 의미한다. (상태값과 어떤 것들이 다른지 알아야한다.)



---

#### Hello.js

```javascript
import { useState } from "react";

export default function Hello(props) {
    // let name = "Mike"
    const [name, setName] = useState('Mike');

    return (
        <div> 
            <h2 id="name">
                {name}({props.age})</h2>
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
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>

  );
}

// export default App;
export default App;
```

![image-20230321232438964](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230321232438964.png)

---



> 버튼을 클릭할 수록 `age` 가 증가하도록 만들기 

#### Hello.js

```javascript
import { useState } from "react";

export default function Hello(props) {
    // let name = "Mike"
    const [name, setName] = useState("Mike");
    const [age, setAge] = useState(props.age);

    return (
        <div> 
            <h2 id="name">
                {name}({age})
            </h2>
            <button 
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike");
                    setAge(age + 1)
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
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>

  );
}

// export default App;
export default App;
```



---

> 메세지 넣기 



#### Hello.js

```javascript
import { useState } from "react";

export default function Hello({age}) {
    // let name = "Mike"
    const [name, setName] = useState("Mike");
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다."

    return (
        <div> 
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
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
      <Hello age={10} />
      <Hello age={20} />
      <Hello age={30} />
    </div>

  );
}

// export default App;
export default App;
```

![image-20230321233114213](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230321233114213.png)



---



> 이름이 동시에 바뀌는 것을 알 수 있다. 

#### Hello.js

```javascript
import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}) {
    // let name = "Mike"
    const [name, setName] = useState("Mike");
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다."

    return (
        <div> 
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>

            <UserName name={name} />
            
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



#### UserName.js

```javascript
export default function UserName({name}){
    // 아무런 기능이 없음, 보여주기만 하는 컴포넌트
    return <p>Hello, {name}</p>
}
```



![image-20230321233507547](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230321233507547.png)
