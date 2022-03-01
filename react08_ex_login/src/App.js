import Login from './member/Login';

function App() {
  // 자바스크립트에서는 backgroundColor로 사용(background-color => X)
  // document.getElementById("a").style.backgroundColor = "red";
  const loginstyle = {
    height:'100px',
    backgroundColor:"#04a", // rgb code
    fontSize:"3em",
    textAlign:"center",
    color:"#fff",
    lineHeight:'100px'
  }
  return (
    <div >
      <div style={loginstyle}>리액트로 만든 로그인</div>
      {<Login/>}
    </div>
  );
}

export default App;
