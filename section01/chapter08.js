//1.null 병합 연산자
//존재하는 값을 추려내는 기능(null,undifined가 아닌 값을 찾아내는 연산자)

let var1;
let var2 = 1;
let var3 = 20;

let var4 = var1 ?? var2;
//var4 = 10 저장
//둘다 null이 아니라면 맨 앞 변수 숫자 적용

//2. typeof 연산자
//값의 타입을 문자열로 변환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
//String 출력

//3.삼항 연산자
let res = var8 % 2 === 0 ? "짝" : "홀";
