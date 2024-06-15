### 04_Node.js 모듈 시스템 이해하기 

##### ◼️ 모듈 시스템 (모듈을 다루는 시스템)

> * 회원관리기능 ===> user.js
> * 장바구니기능 ===> cart.js
> * 결제기능 ===> payment.js

> user.js, cart.js, payment.js 처럼 기능별로 나눠진 각각의 자바스크립트 파일들을 `모듈` 이라는 이름으로 불린다.

> * 회원관리기능 ===> user.js ===> user 모듈
> * 장바구니기능 ===> cart.js ===> cart 모듈
> * 결제기능 ===> payment.js ===> payment 모듈



모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템을 모듈 시스템이라고 한다.



##### ◼️ 자바스크립트의 모듈 시스템 

##### 1. Common JS (CJS)

> module 이라는 내장 객체에 exports 라는 프로퍼티의 값으로 객체를 저장한다. 이 객체 안에 각각 프로퍼티로 내보내고 싶은 값들을 넣는다.
>
> 그래서 math 모듈로부터 `add` 와 `serve` 라는 두 개의 함수를 내보낸다.

> `add` 라는 프로퍼티의 value로 내보낼 값 add 함수 그리고 serve라는 프로퍼티의 value로 내보낼 값인 serve 함수를 내보낼 수가 있다.

```javascript
module.exports = {
  add: add,
  sub: sub,
};
```

> value 값으로 사용되는 변수의 이름과 키 값이 똑같을 경우에는,
>
> 변수나 또는 함수의 이름만 딱 명시해 주어도 알아서 key의 변수의 이름인 add 그리고 값은 add 라는 변수에 저장된 함수가 들어가게 된다.
>
> ```javascript
> module.exports = {
>   add,
>   sub,
> };
> ```

Common JS (CJS) 모듈 시스템에 의해서 두 개의 값이 math 모듈로부터 내보내지게 된다. 

내보내진 값들은 다른 인덱스 같은 모듈에서 내장함수인 `require `를 이용해서 모듈의 경로를 인수로 전달하면서 불러와서 사용할 수 있다.

```javascript
require("./math");
```

`require` 함수가 현재 경로의 math 모듈로부터  객체 형태로 된 값을 그대로 반환해주게 된다. 

```javascript
const moduleData = require("./math");
```

반환된 값을 `const moduleData` 라는 변수에 담아주면  된다.

```javascript
const moduleData = require("./math");
console.log("moduleData");
```



* ##### 값 전달하여 출력하기 

```javascript
const moduleData = require("./math");

console.log(moduleData.add(1, 2));
console.log(moduleData.sub(1, 2));

console.log("moduleData");
```

![image-20240615153854168](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240615153854168.png)



* ##### 객체 구조분해 할당

```javascript
const (add, sub) - require("./math");

console.log(add(1, 2));
console.log(sub(1, 2));
```





##### 2. ES Module (ESM)

> Common JS (CJS) 보다 최신식으로 동작함
>
> React 에서도 사용하게 되는 모듈 시스템 



(1) ES Module (ESM) 사용할 수 있도록 설정하기 

```javascript
  "type": "module"
```

> `package.json` 에 `type` 추가하기 (=  ES Module  시스템 사용할게!)

* `ReferenceError : require is not defined in ES module scope, you can use import instead`

  > 이러한 오류를 발견했다면 모듈 시스템을 착각하진 않았는지 스스로 점검하기



(2) math.js

```javascript
export { add, sub };
```

> ES Module 시스템에서는 모듈로부터 어떠한 값을 내보낼 때 export 라는 키워드 뒤에 객체를 리터널로 생성해서 그 안에 내보내고 싶은 값들을 담아주기만 하면 된다.



(3) index.js

```javascript
import { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
```

> require 가 아닌 imoprt, 그리고 중괄호로 가져오고자 하는 값인 add와 sub를 그대로 작성해준다면 다음에 from을 작성하고 이 뒤에 어떤 모듈로부터 가져올지 경로를 작성하면 된다.
>
> 확장자 까지 입력해줘야 한다.



* 함수 선언문 앞에 export 를 붙여줘도 따로 `export { add, sub };` 를 작성하지 않아도 된다.

  ```javascript
  export function add(a, b) {
    return a + b;
  }
  
  export function sub(a, b) {
    return a - b;
  ```

  

* default 라고 내보내면 multiply 라는 함수는 default로서 내보재녀서 math 모듈을 대표하는 단 하나의 기본 값이 된다.

  ```javascript
  export default function multyply(a,b) {
      return a * b;
  }
  ```

  새로운 import 문을 만들어서 중괄호 없이 불러오도록 설정해줘야 한다.

  ```javascript
  import multiply from "./math.js";
  ```

  이름을 바꿔서 불러와도 상관없다.

  ``` javascript
  import mul from "./math.js";
  ```



* 동일한 경로로부터 값을 불러오는 여러개의 import 문은 합치는 것도 가능하다.

  ```javascript
  import mul, {add, sub} from "./math.js";
  
  console.log(add(1, 2));
  console.log(sub(1, 2));
  console.log(mul(2, 2));
  ```

  



