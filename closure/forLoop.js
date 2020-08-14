// 원하는 결과값은 1,2,3,4 가 나와야함
function func() {
    for (var i = 1; i < 5; i++) {
        setTimeout(function () { console.log(i); }, i * 500);
    }
}
func(); // 5 5 5 5

/* 원인 */
/* 
setTimeout 을 반복문 안에서 돌리면 콜백함수가 계속해서 taskQueue 에 쌓이게 되고 반복문이 끝나고 나서 call Stack 으로 돌아와서 실행된다.
콜백함수는 클로저이기 때문에 상위 스코프에게 i 값을 물어보고 상위 스코프인 func 의 스코프에선 i 가 5까지 증가했기 때문에 5가 4번 출력된다.
*/








// 해결방법 1. 새로운 함수스코프

/* function func() {
    for (var i = 1; i < 5; i++) {
        (function (j) {
            setTimeout(function () { console.log(j); }, j * 500);
        })(i);
    }
}
func(); // 1 2 3 4 */

/* 해석 */
/* 
setTimeout() 을 IIFE(Immediately Invoked Function Expression, 즉시실행함수 표현식)로 감싸게 되면, 
새로운 스코프를 형성하고 나중에 콜백함수가 j 를 참조할 때 그 시점의 i 값을 갖기 때문에 원하는 결과를 얻을 수 있게 된다.
*/









// 해결방법 2. 블록스코프로 해결
/* function func() {
    for (let i = 1; i < 5; i++) {
        setTimeout(function () { console.log(i); }, i * 500);
    }
}
func(); // 1 2 3 4 */

/* 해석 */
/* 
함수 스코프가 아닌 블록 스코프를 갖는 let 을 사용하면 for 문 내의 새로운 스코프를 갖기 때문에 매 반복마다 새로운 i 가 선언되고 반복이 끝난 이후의 값으로 초기화가 된다. 
따라서, setTimeout() 의 클로저인 콜백함수가 i 를 참조하기 위해 상위 스코프를 검색할 때 블록 스코프에서 매 반복마다 선언 및 초기화 된 i 를 참조하는 것이다.
*/