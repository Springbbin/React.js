import "./Main.css";
// JSX 주의사항
// 1. 중괄호 내부에는 자바스트립트 표현식만 넣을 수 있다
// 조건문이나 반복문 불가능
// 2. 숫자, 문자열 , 배열 값만 렌더링 된다
// undefined, null, bollean 불가능 (오류는 안남)
// 객체의 경우, 그대로 렌더링 불가능(점표시법으로)
// 3. 모든 태그는 닫혀있어야 한다 <> </>
// 4. 최상위 태그는 반드시 하나여야만 한다

function Main() {
  const user = {
    name: "이정환",
    isLogin: true,
  };

  // return <>{user.isLogin ? <div>로그아웃</div> : <div> 로그인 </div>};</>;}
  if (user.isLogin) {
    return <div className="logout">로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
}

export default Main;
