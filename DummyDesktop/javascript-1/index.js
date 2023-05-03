let var_count = 0;
let count = document.getElementById("count");
let buttoninc = document.getElementById("buttoninc");
let buttondec = document.getElementById("buttondec");
countincfunction=()=>{
    count.innerText = `count is ${++var_count}`
    colourdeside(var_count);
}
countdecfunction=()=>{
    count.innerText = `count is ${--var_count}`
    colourdeside(var_count);
}
colourdeside=(var_count)=>{
    if(var_count>0)
        count.style.color = ("green")
    else if(var_count<0)
        count.style.color = ("red")
}