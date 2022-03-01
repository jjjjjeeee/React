import {useState} from 'react';

function Test(){
    const [myInfo, setMyInfo] = useState({
        username:'이정은',
        tel:'010-1234-1234',
        addr: '서울시 강남구',
        email: 'asdf@naver.com'
    });
    console.log(myInfo);

    // 나머지 데이터를 보전하면서 수정되는 함수
    const updateInfor = ()=>{
        setMyInfo( previousState =>{
                return {...previousState, addr:'서울시 영등포구', email: 'zzz@naver.com'};
        });
    }

    const updateInfor2 = (part, data)=>{
        setMyInfo( p =>{
              if(part==1) return{...p,username:data};
              if(part==2) return{...p,tel:data};
              if(part==3) return{...p,addr:data};
              if(part==4) return{...p,email:data};
        });
    }

    return(
        <div>
            <ol>
                <li>이름: {myInfo.username}</li>
                <li>연락처: {myInfo.tel}</li>
                <li>주소: {myInfo.addr}</li> 
                <li>이메일: {myInfo.email}</li>
            </ol>
            {/** 데이터 중 1개만 수정할 시 나머지 데이터는 초기화된다. */}
            <button onClick={()=>setMyInfo({tel:'010-9999-9999'})}>연락처 변경하기</button>
            {/** 기존 데이터를 보전하면서 새로운 데이터가 수정되는 함수를 생성한다. */}
            <button onClick={updateInfor}>일부 정보 변경</button>
            <hr/>
            <div>
                <button onClick={()=>updateInfor2(1,'세종대왕')}>이름변경</button>
                <button onClick={()=>updateInfor2(2,'010-9999-9999')}>연락처</button>
                <button onClick={()=>updateInfor2(3,'경기도 고양시')}>주소</button>
                <button onClick={()=>updateInfor2(4,'ggg@nate.com')}>이메일</button>
            </div>
        </div>

    );
}

export default Test;