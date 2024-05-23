import { useState, useEffect } from "react";
import TextInput from "./components/TextInput";

function App() {
  // TODO: 로컬 스토리지에서 초기 상태로 사용할 값을 가져오세요. 새로고침 해도 기존 상태를 유지하는 것이 목적입니다.
  // 로컬스토리지에 값이 없을 경우 빈배열[] 로 설정하세요.
  const [texts, setTexts] = useState([]);

  // 컴포넌트가 마운트될 때 로컬스토지에서 값을 가져온다.
  useEffect(() => {
    // TODO: 상태가 변경될 때마다 로컬 스토리지에 저장. key 값은 texts 로 합시다.
    const savedTexts = localStorage.getItem("texts");
    const newTexts = savedTexts ? JSON.parse(savedTexts) : [];
    setTexts(newTexts);
  }, [texts]);

  // 새로운 텍스트를 추가하는 함수
  const onAddText = (text) => {
    setTexts((prevTexts) => {
      const updatedTexts = [...prevTexts, text];
      localStorage.setItem("texts", JSON.stringify(updatedTexts));
      return updatedTexts;
    });
  };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <ul>
        {texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
