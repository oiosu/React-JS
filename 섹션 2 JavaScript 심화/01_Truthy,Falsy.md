### 01_Truthy,Falsy

* 자바스크립트에서는 참, 거짓이 아닌 값도 참, 거짓으로 평가한다. 
* Truthy,Falsy란, 참이나 거짓을 의미하지 않는 값도, 조건문 내에서 참이나 거짓으로 평가하는 특징이다. 

![image-20240503141638944](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240503141638944.png)

##### (1) Truthy한 값 (참 같은 값)

```javascript
if (123){
    console.log("123 is true");
}else {
    console.log("123 is false");
}
```

##### (2) Falsy 한 값 (거짓 같은 값)

```javascript
if (undefined) {
    console.log("undefined is true");
} else {
    console.log("undefined is false");
}
```



* 이를 이용하면 조건문을 간결하게 만들 수 있다. 

```javascript
// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);
```

