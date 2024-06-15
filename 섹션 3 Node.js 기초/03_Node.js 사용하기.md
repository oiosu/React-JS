### 03_Node.js 사용하기

* 보통 어떤 목적을 갖는 프로그램을 만들때 프로젝트 라는 단위를  사용한다. 
* ex) 자바스크립트로 '온라인 쇼핑몰' 을 만든다 라고 가정하면, 프로그래밍에서는 쇼핑몰 프로젝트를 만든다 라고 표현할 수 있다. 
* 만약 포털 서비스를 만든다 라고 가정하면 '웹 포털 프로젝트' 를 만든다 라고 표현할 수 있다.\



##### ✅ 패키지 Package

: Node.js에서 사용하는 프로그램의 단위 (프로젝트를 다른 말로)

: 쇼핑몰 패키지, 웹 포털 패키지 



```bash
npm init
```

![image-20240615145942410](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240615145942410.png)

```javascript
{
  "name": "node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

![image-20240615150152446](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240615150152446.png)



##### ✅ 패키지 스크립트 

```javascript
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "start": "node src/index.js"
  },
```

```bash
node run start
```

![image-20240615150521292](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240615150521292.png)

