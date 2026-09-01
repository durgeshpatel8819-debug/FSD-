let d= 11;
function f(){
    var b=76;
    f2();
    function f2(){
        console.log(b);
        let c =56;
        f3();
        function f3(){
            console.log(c);
            console.log(d);
        }
    }
}
f();