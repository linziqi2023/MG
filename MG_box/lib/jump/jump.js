onload=function(){
    setInterval(go, 1000*60*60*24);
};
function go(){
    alert("您的登录已过期，请登录")
    location.href='login.html';
}
