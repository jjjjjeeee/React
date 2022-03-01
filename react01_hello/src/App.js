import logo from './logo.svg';
import './App.css';

function Hello() {
  // var
  // let
  // const
  const name = '김이박';

  // 리엑트에서 함수 생성하기
  function myWelCome(){
    let hello = "하이!!!";
    // let hello = "asdf"; let 이라서 에러발생 
    if(true){
      let hello = '헬로우~~~';
      console.log(hello);
    }
    console.log(hello);
    return hello;
  }

  return (
    <div>
      <h1>바로 반응한다.</h1>
      <p>Welcome Page : {name}</p>
      <ul>
        <li>name : {name}</li>
        <li>welCome : {myWelCome()}</li>
      </ul>
    </div>
  );
}

export default Hello;
