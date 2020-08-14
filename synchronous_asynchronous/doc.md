# 동기 vs 비동기

### node js 에서 동기방식과 비동기방식의 코딩의 차이점을 알아보자

<br/>
<br/>

`synchronous.js 의 동작`
    

~~~javascript
// 동기
var fs = require('fs');

var filenames = fs.readdirSync('.');  
var i;  
for (i = 0; i < filenames.length; i++) {  
    console.log(filenames[i]);
}
console.log('ready');

console.log('can process next job...'); 
~~~

결과
~~~
ex.txt
index.js
ready
can process next job...
~~~

__________________________________________


`asynchronous.js 의 동작`

~~~javascript
// 비동기
var fs = require('fs');

fs.readdir('.', function (err, filenames){  
    var i;
    for (i = 0; i < filenames.length; i++) {
        console.log(filenames[i]);
    }
    console.log('ready');
});

console.log('can process next job...');  
~~~

결과
~~~
can process next job...
ex.txt
index.js
ready
~~~
