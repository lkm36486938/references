# 동기 vs 비동기

### node js 에서 동기방식과 비동기방식의 코딩의 차이점을 알아보자


콘솔로그


`synchronous.js 의 동작`

~~~
ex.txt
index.js
ready
can process next job...
~~~

`asynchronous.js 의 동작`

~~~
can process next job...
ex.txt
index.js
ready
~~~
