/*단락평가(접근조차 하지 않는다)
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());

//returnTrue를 먼저 호출시, 단락 평가 진행 XX
//falsy,trythy 대입해서 해도 같음(undefined,숫자)*/

//단락평가 활용 사례(중요)
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "박수빈" });
//person 값이 falsy하다면, person.name접근X
//const name에는 undefined가 담김(단락평가)
//console 출력으로는 or연산이기 때문에 falsy || Truthy(문자열)
//printName 호출하였을때, Truthy한 값 출력 > person 값이 없음
//printName( name: 박수빈 )호출하였을 때,
//const name = T && T
//console.log = T || T 출력 > 박수빈 (T||T 연산은 첫번째 T출력, T&&T 두번째 T출력)
