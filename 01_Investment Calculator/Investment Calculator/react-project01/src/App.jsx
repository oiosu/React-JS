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

  // 입력이 유효한지의 여부에 따라 정보를 가져오는 새로운 상수나 변수를
  // 간단하게 추가할 수 있다.
  // duration 이 최소 1이라면 유효하다, 0이 아니어야 하고 음수가 아니어야 한다.
  // duration 만큼은 양수의 값이도록 해야한다.
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        // +를 추가함으로서 문자열 값을 숫자 값으로 변환할 것을 강제한다.
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">0보다 큰 값을 입력해주세요</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
