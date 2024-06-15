### 05_Node.js 라이브러리

##### ◼️ 라이브러리 

> 프로그램을 개발 할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것
>
> * 날짜 라이브러리 
> * 수학 라이브러리 
> * 그래픽 라이브러리

* `https://www.npmjs.com/` : 모든 라이브러리가 등록되어 있다.



##### ◼️ randomcolor 라이브러리 설치하기 

* randomcolor 검색하기 

* 설치하기 

  ```bash
  npm install randomcolor
  ```

  ```bash
  npm i randomcolor
  ```

  ![image-20240615160546866](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240615160546866.png)

##### 🤔package-lock.json vs package.json

| package-lock.json                                        | package.json                                                 |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| 정확한 버전 정보 저장 (실제로 설치된 버전의 정보가 명시) | `^0.6.2` 버전 앞에 갈매기 표시 (=버전 레인지) 라고 해서 정확한 버전이 아닌 대략적인 버전이 표기 |



##### ◼️ randomcolor 라이브러리 사용하기

* 모듈 시스템을 이용해서 불러오기 

```javascript
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
```

![image-20240615161433753](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240615161433753.png)



◼️ package.json의 dependencies의 정보를 기준으로 모든 패키지, 모든 라이브러리를 다시 설치해준다.

```bash
npm install 
```

```bash
npm i
```

