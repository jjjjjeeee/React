import './App.css';

function App() {
  const style = {
    padding:"10px",
    backgroundColor:"lightgreen",
    color:"white"
  }
  // 이벤트 발생시 처리할 함수
  const eventTest = ()=>{
    alert("이벤트가 발생함");
  }

  const eventTest2 = (name)=>{
    alert("이벤트 발생~~~~~~"+name);
  }

  const eventTest3 = (e, m)=>{
    console.log(e);
    alert(m);
  }

  return (
    /* javascript     jquery       react(대소문자구별됨)*/
    /* onclick         click      onClick. onMouseover*/
    <div className="App">
      {/** 이벤트 발생시 함수 호출 */}
      <button style={style} onClick={eventTest}>클릭이벤트처리하기</button>
      {/** 이벤트 발생시 매개변수에 데이터 전달하여 함수 호출 */}
      <button style={style} onClick={()=>eventTest2('이정은')}>클릭(매개변수 함수호출)</button>
      <button style={style} onClick={(event)=>eventTest3(event, 'event 종류 알아보기')}>클릭(이벤트종류)</button>
    </div>
  );
}

export default App;
