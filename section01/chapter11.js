//함수

function greeting() {
  //console.log("안녕하세요");
}

greeting();

//  화살표 함수
let varC = (value) => {
  console.log(value);
  return value + 1;
};
//console.log(varC(10));

//  콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 3);
});
