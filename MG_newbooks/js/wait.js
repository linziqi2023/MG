onload=function(){
    setInterval(go, 1000*60);
};
var x=2;
function go(){
    x--;
    if(x>0){
        document.getElementById("sp").innerHTML=x;
    }else{
        alert("确认支付")
        location.href='success_MG_books.html';
    }
}
