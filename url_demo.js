const url = require('url');

const myUrl = new URL('htttp://www.mydomian.com:5500/action.html?id=100&status=active');

console.log(myUrl.href);
console.log(myUrl.toString());
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);

console.log(myUrl.searchParams);
myUrl.searchParams.append('value','123');

myUrl.searchParams.forEach((value,name) => {
    console.log(name+":"+value);
});