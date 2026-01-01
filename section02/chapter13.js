// 1. Promise
// 비동기 작업을 효율적으로 처리 할 수 있도록 도와주는 js의 내장 객체
// pending(대기),fullfilled(성공),rejected(실패)

const promise = new Promise((resolve, reject) => {
  //비동기 작업 실행하는 함수
  //executor

  setTimeout(() => {
    const num = 10;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});

//promise 체이닝
promise
  .then((value) => {
    console, log(value);
  })
  .cathch((error) => {
    console.log(error);
  });

/*
// then 메서드 (성공사 그후 결과값 이용>> 매개변수)
// >> 그 후에
promise.then((value)=> {
    console.log(value);
});
// 값이 null 인경우
promise.catch((error)=>{
    console.log(error);
});
*/

/* setTimeout(() => {
        console.log("안녕");
        reject("왜 실패했는지 이유...");
        resolve("안녕");
    }, 2000);
});

setTimeout(() => {
    console.log(promise);
}, 3000);*/

// 콜백지옥 promise활용법
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    //executor

    setTimeout(() => {
      const num = 10;

      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });

  return promise;
}

const p = add10(0);
p.then((result) => {
  console.log(result);

  const newP = add10(result);
  newP.then((result) => {
    console.log(result);
  });
  return newP;
});

//간결 버전

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
