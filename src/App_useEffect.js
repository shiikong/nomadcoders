import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  // counter
  const [value, setValue] = useState(0);
  const counter = () => setValue((prev) => prev + 1);

  // input text effect
  const [keyword, setkeyword] = useState("");
  console.log("load all the time");
  useEffect(() => {
    console.log("load api");
  }, []);
  const onChange = (e) => {
    setkeyword(e.target.value);
  };
  useEffect(() => {
    console.log("search for : " + keyword);
  }, [keyword]);

  // hide/show effect
  const [isShow, setIsShow] = useState(true);
  const handleShow = () => setIsShow((prev) => !prev);
  function Hello() {
    //useEffect의 subscription을 종료할 때 즉, 컴포넌트가 unmount될 때 실행할 로직은 useEffect의 EffectCallback에서 반환되는 함수로 구현한다.
    //여기서 반환되는 함수(byFn)를 cleanup function이라고 부르고 메모리 누수를 방지하기 위해 사용된다.
    // function byFn() {
    //   console.log("destroyed :(");
    // }
    // function hiFn() {
    //   console.log("created :)");
    //   return byFn;
    // }
    // useEffect(hiFn, []);
    useEffect(() => {
      console.log("created :)");
      return () => console.log("destroyed :(");
    }, []);
    return <h1>hello</h1>;
  }

  return (
    <div className="App">
      {isShow ? <Hello /> : null}
      <button text="button" onClick={handleShow}>
        {isShow ? "hide" : "show"}
      </button>

      <p>{value}</p>
      <button text="button" onClick={counter}>
        카운터 버튼
      </button>
      <input type="text" value={keyword} onChange={onChange} />
      {/* <Button text={"버튼"} /> */}
    </div>
  );
}

export default App;
