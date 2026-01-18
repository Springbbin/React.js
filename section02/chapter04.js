//Spread 연산자(흩뿌리다)
//객체니 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할
/*
let arr1 = [1,2,3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
console.log(arr2)
-> 너무 반복된 작업, 위험한 방법(배열의 변형 가능성 있음)
*/

//객체의 경우
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

//함수의 경우
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// Rest 매개변수
function funcB(one, ...Rest) {
  console.log(Rest);
}

funcB(...arr1);
//배열로 출력됨 >> (2) [2,3]
//rest 매개변수 뒤에는 새로운 매개변수 선언 안됨!
//이름은 rest 아니어도 되기때문에 ...만 붙이면 됨!
