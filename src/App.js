//ファイルの先頭
import { useState } from "react";

function App() {
  const [left, setLeft] = useState(0);
  const [ope, setOpe] = useState(null);
  const [right, setRight] = useState(0);
  const [ans, setAns] = useState(null);
  return (
    <div className="calc">
      <header>電卓</header>
      <div className="display">
        {/*ここに計算結果表示*/} {left} {ope} {right}
        {left}
        {ope === null ? "" : ope}
        {ope === null ? "" : right}
      </div>
      <div className="numbers">
        {/*ここに数字のボタンや「.」、 「=」ボタン*/}
      </div>
      <div className="operators">
        {/*ここに「+」、「-」、「*」、「/」ボタン*/}
      </div>
    </div>
  );
}

export default App;
