function task() {
  setTimeout(() => {
    console.log("안녕하세요");
  }, 3000);
}

//task();

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {}, 3000);
  const food = "짜장면";
  callback(food);
}

//식은 음식
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownFood);
  }, 2000);
}

//냉동 음식
function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
