//1.filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name : "이정환", hobby: "테니스"},
    {name : "김효빈", hobby: "테니스"},
    {name : "홍길동", hobby: "배드민턴"},
];

const tennisPeople = arr1.filter((item) => {
    if (item.hobby === "테니스") return true;
});

//console.log(tennisPeople);

//2. map
//배열의 모든 요소를 순회하며, 각각 콜백함수를 실행하고 
//그 결과값들을 모아소 새로운 배열로 변환
let arr2 = [1,2,3];
const mapResult1 = arr2.map((item,idx,arr) => {
    return item*2
});

//console.log(mapResult1);

let names = arr.map((item.name) => {});
//console.log(names);

//3. sort
//배열을 사전순으로 정렬하는 메서드
let arr3 = ["b","a","c"];
arr3.sort();
//console.log(arr3);
// **문자가 아닌 숫자배열이면**, sort 정상작동 X (사전순)
//  //콜백함수를 넘겨줘야 함

let arr4 = [10,3,5];
arr4.sort((a,b)=>{
    if(a>b) {
        return 1; //오름차순 형식이고, 내림차순은 retur 바꿔주면 됨
    }
    else if(a>b) {
        return -1; 
    }
    else {
        return 0 
    }
});
//console.log(arr4);

//4. toSorted (가장 최신 함수)
//정렬된 새로운 배열을 반환하는 메서드
arr5 = ["c","a","f","d"];
const sorted = arr.toSorted();
//console.log(arr5); //정렬되지 않은 배열
//console.log(sorted); // 정렬된 배열

//5. join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "i'm", "su"];
const joined = arr6.join("-");//구분자 설정 가능  
//console.log(joined);



