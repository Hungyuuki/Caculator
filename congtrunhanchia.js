function add(){
    let First0perand = parseInt(document.getElementById("First0perand").value);
    let Second0perand = parseInt(document.getElementById("Second0perand").value);
    let result = First0perand + Second0perand
    document.getElementById('result').innerHTML = ('Kết quả ' + result);
}
function sub(){
    let First0perand = document.getElementById("First0perand").value;
    let Second0perand = document.getElementById("Second0perand").value;
    let result = First0perand - Second0perand
    document.getElementById('result').innerHTML = ('Kết quả ' + result);
}
function mul(){
    let First0perand = document.getElementById("First0perand").value;
    let Second0perand = document.getElementById("Second0perand").value;
    let result = First0perand * Second0perand
    document.getElementById('result').innerHTML = ('Kết quả ' + result);
}
function div() {
    let First0perand = document.getElementById("First0perand").value;
    let Second0perand = document.getElementById("Second0perand").value;
    let result = First0perand / Second0perand
    document.getElementById('result').innerHTML = ('Kết quả '+ result);
}