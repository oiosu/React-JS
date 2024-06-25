### 🏷️ React Essentials - Practice Project

#### Apply Your Knowledge & Practice What You Learned

* Build an "Investment Calculator" Web App.
* Build, Configure & Combine **Components**
* Manage Application **State**
* Output **List** & **Conditional** Content



```bash
npm init vite
```

```bash
cd project-name
```

```bash
npm install 
```



#### 01. Header Components 추가하기

```javascript
import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo showing a money bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
```



* `App.jsx`

> 앱의 루트 컴포넌트에 해당된다. 왜냐하면 app 컴포넌트가 root라는 html 요소로  리액트 라이브러리의 `react-dom` 부분을 통해 렌더링 되기 때문이다. 

```javascript
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
```



#### 02. User Input(사용자 입력) 컴포넌트로 시작하기

```javascript
// 사용자의 입력 조각들을 가져오는 컴포넌트

export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>초기 투자금액 Initial Investment</label>
          <input type="number" required />
        </p>
        <p>
          <label>연간 투자량 Annual Investment</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>예상 수익 Expected Return</label>
          <input type="number" required />
        </p>
        <p>
          <label>투자 기간 Duration</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
```



#### 03. 이벤트 핸들링 & 양방향 바인딩 활용

`<input type="number" required />` 유저가 입력한 값을 얻고 저장하기 위해 `UserInput` 컴포넌트에 상태를 관리해야 한다. 

(1) 리액트로 부터 `userState`를 import 해야한다. 

```javascript
import { useState } from "react";
```

(2) `useState` 훅을 컴포넌트 함수에서 호출한다. 

> * 4가지 다른 상태들을 관리 vs input 값들을 하나의 객체로 합치는 하나의 상태 객체를 원할 것인지 선택 
> * 여기서는  input 값들을 하나의 객체로 합치는 하나의 상태 관리

> * `initiaslInvestment`(초기비용), `auunalInvestment`(연간투자액), `expectedReturn` (예상수익), `duration` (투자기간)

```javascript
  useState({
    initiaslInvestment: 1000,
    auunalInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
```

(3) 함께 작동할 수 있도록 상수에 저장한다. (이 상수들을 `userInput` 과 `setUserInput` 으로 이름을 붙여준다. )

```javascript
  const [UserInput, setUserInput] = useState({
    initiaslInvestment: 1000,
    auunalInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
```

(4) 값을 변경할때마다 발생되어야 할 함수가 필요하다. (상태를 업데이트를 하기 위해, 모든 input과 연결될 수 있는 일반 함수마다 4가지의 함수를 추가할 수 있다.)

> * 데이터 접근 방식

```javascript
export default function UserInput() {
  const [UserInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
```

> * 함수에서 주어진 input 을 위해 입력된 `inputIdentifier` , `newValue` 을 얻기 기대한다.(두가지의 매개변수)
> * `handleChange` 함수 내에서 `setUserInput` 을 호출한다.
> * 업데이트된 상태는 반드시 이전 상태를 기반으로 되어야 하고 따라서 우리는 변경된지 않은 `input` 에 대한 이전 데이터를 계속 가질 것이다.
> * 따라서 이전 `userInput` 과 업데이트된 상태 객체를 반환하는 상태를 업데이트 하기 위해 사용해야 한다. 
> * 그 후 그 객체의 하나의 단일한 프로퍼티를 덮어 쓴다.그리고 그 속성은 `inputIdentifier` 매개변수의 도움을 통해 증명된다.
> * 따라서 예측은 `inputIdentifier` 가 `string` 깂으로 가질 것이다.

(4) input 과 연결하기 

```javascript
<input
    type="number"
    required
    value={UserInput.initialInvestment}
    onChange={(event) =>
      handleChange("initialInvestment", event.target.value)}
 />
```



#### 04. State(상태)  끌어올리기

> * `UserInput` 컴포넌트에 있는 `useState` 와 `handleChange` `App` 으로 옮기기

```javascript
//UserInput
//구조분해 할당 UserInput({ })
// onChange 속성은 함수를 보유한다.
export default function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>초기 투자금액 Initial Investment</label>
          <input
            type="number"
            required
            // input 필드의 값들을 업데이트 하기 위해서는 userInput 객체가 필요
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
          />
        </p>
//...
```

```javascript
//App
import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  );
}

export default App;
```

![image-20240625223122768](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240625223122768.png)



#### 05. 값 계산하기 및 숫자 값 올바르게 다루는 방법

> * ` + ` 를 추가함으로서 문자열 값을 숫자 값으로 변환할 것을 강제한다.

```javascript
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        // +를 추가함으로서 문자열 값을 숫자 값으로 변환할 것을 강제한다.
        [inputIdentifier]: +newValue,
      };
    });
  }
```

![image-20240625223609784](https://raw.githubusercontent.com/oiosu/image_repo/master/img/image-20240625223609784.png)



#### 06. 리스트에 결과 출력하기 및 더 많은 값 파생하기

```javascript
import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  console.log(resultsData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th>
          <th>Total Interest(총 이자)</th>
          <th>Invested Captial(투자자본)</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmoutInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmoutInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
```

