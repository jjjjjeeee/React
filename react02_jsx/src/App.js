import React from 'react';
import './App.css';

function App() {
  // JSX는 Javascript와 XML의 약자이다.
  // JSX는 React에서 HTML을 쉽게 작성하 수 있도록하는 방법이다.

  // 리엑트는 따옴표없이 변수 선언 가능하다.(자바스크립트와 차이점)

  // JSX를 이용하여 태그 사용방법
  const element1 = <h1>HTML은 문자열로 처리해야 한다</h1>;
  const element2 = (
    <ul>
      <li>바나나</li>
      <li>사과</li>
    </ul>
  );
  const element3 = (
    <> 
      <p>해바라기</p>
      <p>코스모스</p>
    </>
  );

  // JSX를 사용하지 않고 태그를 사용하는 방법
  //       <h2>태그 내에 표시되는 내용
  const element4 = React.createElement('h2', {}, '태그 내에 표시되는 내용');

  // 변수 사용하는 방법
  const xx = 100;
  let msg = "React Test~~~~~~~~~~~";
  if(xx>50){
    msg = "새로운 값으로 변경";
  }

  const element5 = <div>{msg}</div>;

  return (
    <ul>
      <li>{element1}</li>
      <li>{element2}</li>
      <li>{element3}</li>
      <li>{element4}</li>
      <li>{element5}</li>
    </ul>
  );
}

export default App;
