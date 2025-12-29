//배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three] = arr;
console.log(one, two, three);

/*
let[one, two, three] = arr;
console.log(one, two);4
두개만 해도 무방 */

/*
let[one, two, three, four = 4(기본값)] = arr;
console.log(one, two, three, four);
배열에 없어도 무방(출력: undefined) */

//객체의 구조 분해 할당

let person = {
  name: "박수빈",
  age: 27,
  hobby: "테니스",
};
/*
let {name, age: myAge, hobby, extre="hello"} = personalbar;
console.log(name, age, hobby, extra); */

const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
