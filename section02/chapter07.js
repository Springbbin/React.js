// 6가지의 요소 조작 메서드(배열)

//1. push
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

//2.pop
//배열의 맨 뒤에 있는 요소를 제거, 반환
let arr2 = [1, 2, 3];
const popedItem = arr2.pop();

//3.shift
//배열의 맨 앞에 있는 요소 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

//4.unshift
// 배열의 맨 앞에 새로운 요소 추가
let arr4 = [1, 2, 3];
const unshiftLength2 = arr4.unshift(0);

//shift,unshift는 push,pop보다 동작이 느림
//인텍스를 밀어야하거나 앞으로 땡겨야함
//되도록 push나 pop으로 해결할 것!

//5.slice
//배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr6.slice(2, 5);
let sliced2 = arr5.slice(2); // 두번째 값 생략 가능
let sliced3 = arr5.slice(-3); // 뒤애서부터 3개 slice 경우
//slice(시작 인덱스 , 마지막 인덱스+1);
//slice 해도 원본 배열은 바뀌지 않음 > console.log(arr5) 호출시

//6.concat
//두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7); //arr6 뒤에 arr7붙음
