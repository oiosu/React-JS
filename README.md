# Onebite React.js
### [01_Hello JavaScript](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/01_Hello%20JavaScript.md#01_hello-javascript)
> JavaScript는 `JavaScript 엔진` 에 의해 실행된다.
> 
> 따라서 웹 브라우저를 이용하면 간단한 JavaScript 코드를 직접 실행 가능하다.
>
> ```JavaScript
> console.log("안녕 자바스크립트")
> ```

### [02_ 변수와 상수](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/04_%EB%B3%80%EC%88%98%EC%99%80%20%EC%83%81%EC%88%98.md) 
(1) 변수 : 프로그램이 실행되는 도중에 게속 값을 바꿔가면서 값을 저장할 수 있는 저장소
```JavaScript
let age = 28;
console.log(age);
```
(2) 상수 : 상수는 변수와는 달리 한번 저장된 값을 다시는 바꿀 수 없음
```JavaScript
const birth = "1997.04.16";
```
* 상수는 선언 이후에는 다시는 값을 넣어줄 수가 없기 떄문에 무조건 선언과 동시에 초기 값을 할당하는 초기화를 반드시 해줘야 한다. 라고 기억하기

### [03_ 자료형(Type)](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/05_%EC%9E%90%EB%A3%8C%ED%98%95.md)

(1) Number Type
```JavaScript
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
```

(2) String Type
```JavaScript
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;

let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
```

(3) Boolean Type
```JavaScript
let isSwitchOn = true;
let isEmpty = false;
```

(4) Null Type
```JavaScript
let empty = null;
```
* 아무것도 없다. / null 값은 Undefined 와 다르게 직접 할당을 해줘야 하는 값이다.

(5) Undefined Type
```JavaScript
let none;
console.log(none);
```
* 변수를 선언하고 그 변수에 어떠한 값도 집어 넣지 않았을 때 자동으로 할당이 되는 값이다.

### [04_형 변환 (Type Casting)](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/06_%ED%98%95%EB%B3%80%ED%99%98.md)

* **묵시적 형변환, 명시적 형 변환**

| 묵시적 형 변환                                               | 명시적 형 변환                                  |
| ------------------------------------------------------------ | ----------------------------------------------- |
| (암묵적 형 변환), 개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 형 변환 하는 것을 말함 | 개발자가 직접 함수 등을 이용해 형 변환을 일으킴 |

> 묵시적은 내가 생각지도 못하게 바뀔 수 있는것이고 명시적은 내가 시켜야만 바뀌는 것이라고 이해하면 된다.


### [05_연산자](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/08_%EC%97%B0%EC%82%B0%EC%9E%90(2).md)

#### (1) 회원관리 시스템
```JavaScript
let userName = "임수경";
let userNickName = "Ready";

let displayName = userName;
```
> 만약 userName이라는 변수의 값이 존재한다면 userName을 displayeName에 저장하고, Undefined 라면(없다면) 그때는 userNickName으로 저장하기
> ```JavaScript
> let displayName = userName ?? userNickName;
> console.log(displayName)
> ```

#### (2) 삼항 연산자 (조건식을 이용해서 참, 거짓일 때 값을 다르게 반환)
* 요구사항
  > 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
```JavaScript
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";

console.log(res);
```


### [06_조건문](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/09_%EC%A1%B0%EA%B1%B4%EB%AC%B8.md)
조건문 (Conditional Statement) 란?

    특정 조건을 만족 했을 때에만 실행되는 코드를 작성한기 위한 문법
    대표적으로 if, switch 조건문이 존재함

### [07_반복문](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/10_%EB%B0%98%EB%B3%B5%EB%AC%B8.md)
Loop, Iteration

    어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법

```JavaScript
for(초기식; 조건식; 증감식) {
	console.log(idx);
}
```

✅ 초기식 : 반복문 내부에서만 이용할 수 있는 특별한 변수를 초기화하기 위해 사용하는 식

    반복문 내에서만 쓸 수 있는 변수라고 하면 보통 이 반복이 현재 총 몇번이나 진행이 되었는지 카운트 하는 값을 저장하는 변수를 의미한다.
    다른 말로는 카운터 변수 라고 부르기도 한다.
    for (let idx=0; 조건식; 증감식)
        idx라는 변수가 반복문이 지금까지 총 몇번 실행 되었는지 저장하게 될 것
        그렇기에, 초기 값으로 일단 0으로 설정해 두었다.

✅ 조건식 : 이 반복문이 언제까지 반복할 건지 설정하는 식

    여기서는 이 조건식이 참일 때만 계속 반복이 진행이 되고 만약 거짓이 되면 종료
    for(let idx=0; idx < 5; 증감식)
        변수 idx의 값이 5이상이 되는 순간 반복이 종료된다. 그전까지는 console.log값을 진행한다.

✅ 증감식 : 증감식은 보통 이 한 번의 반복이 종료될 때마다 변수인 idx의 값을 증가시키는 용도로 사용된다. </br> 증가를 시켜줘야 몇번 반복했는지 셀 수 있다.

    for(let idx=0; idx < 5; idx++)
        증감 연산자를 이용하여 1씩 카운터 변수를 증가시키는 증감식을 작성
        매 반복마다 idx의 값이 1씩 늘어나는 것

### [08_함수](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/11_%ED%95%A8%EC%88%98.md)

* 중복으로 작성된 유사한 기능을 하는 코드는 동일한 기능을 일일이 타이핑 해야하는 점과 향후 코드를 수정 시 문제가 생길 수 있다. 
* 이러한 문제들을 함수로 해결이 가능하다.

### [09_함수 표현식과 화살표 함수](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/12_%ED%95%A8%EC%88%98%20%ED%91%9C%ED%98%84%EC%8B%9D%EA%B3%BC%20%ED%99%94%EC%82%B4%ED%91%9C%20%ED%95%A8%EC%88%98.md)

(1) 함수 표현식
```JavaScript
let varB = function funcB() {
	console.log("funcB");
};

varB();
```
(2) 화살표 함수
```JavaScript
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
```

### [10_콜백함수](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/13_%EC%BD%9C%EB%B0%B1%ED%95%A8%EC%88%98.md)
```JavaScript
function main(value) {
    value();
}
function sub(){
    console.log("sub");
}

main(sub);
```

### [11_스코프](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/14_%EC%8A%A4%EC%BD%94%ED%94%84.md)
* 전역 스코프 : 전체 영역에서 접근 가능
* 지역 스코프 : 특정 영역에서만 접근 가능\
```JavaScript
let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
}
```

### [12_객체](https://github.com/oiosu/React-JS/blob/kyung/%EC%84%B9%EC%85%98%201%20JavaScript%20%EA%B8%B0%EB%B3%B8/16_%EA%B0%9D%EC%B2%B4(2).md)
(1) 상수 객체 
```JavaScript
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제
```

(2) 메소드 
```JavaScript
const person = {
  name: "임수경",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
// 안녕!
person["sayHi"]();
// 안녕!
```

