import React, {useState} from 'react';
import Test from './test.js';
import './App.css';

function App() {

  const name='이정은';
  // React의 useState 훅을 사용하면 함수의 데이터 상태를 추적할 수 있다.

  const [color, setColor] = useState("RED");
  // setTel 을 setter라고 생각하면 됨
  const[tel, setTel] = useState("010-1111-2222");
  
  const flower=["해바라기","수국","코스모스","들국화"];
  
  function FlowerList(props){
    return <li>내가 좋아하는 꽃은? 바로바로~~~~~ {props.flowerName}</li>;
  }
  
  return (
    <div>
      <h1>Color:{color}, tel:{tel}</h1>
      <button onClick={()=>setColor("Green")}>컬러변경 (Green)</button>
      <button onClick={()=>setTel("010-0000-0000")}>연락처변경</button>
      <hr/>
      {<Test/>}
      <h1>배열을 반복문처리</h1>
        <ol>
            {/** map()함수를 이용한 배열의 반복처리를 한다. */}
            {/** 배열명.map() */}
            {flower.map((f)=><FlowerList flowerName={f}/>)}
        </ol>
    </div>
  )
}

export default App;
