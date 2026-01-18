// 1. async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드
// 객체가 프로미스의 결과값이 된다

async function getData() {
  return new promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "이정환",
        id: "winterwood",
      });
    }, 1500);
  });
}

//console.log(getData());

// 2. await
//async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
// 원래는 then메소드로 처리, 그러나 더 쉽게 할 수 있다

async function printData() {
  const data = await getData();
  console.log(data);
}

printData();
