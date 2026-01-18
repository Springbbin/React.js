// 1. 콜백함수
function main(value) {
  value();
}

function sub() {
  //console.log("sub");
}
main(sub);

//활용
//콜백 함수 이용 시 >> 여러개의 함수 설정을 안해도 콜백함수를 통해 효율 높임
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(count, (idx) => {
  console.log(idx);
});

repeat(count, (idx) => {
  console.log(idx * 2);
});

repeat(count, (idx) => {
  console.log(idx * 3);
});
