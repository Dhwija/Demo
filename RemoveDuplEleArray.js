/*var a=["A","B","A","C","B"];
function removeDuplicates(a){
    return a.filter((ele,index) => a.indexOf(ele)===index);
}
console.log(removeDuplicates(a) )*/


var a=["A","B","A","C","B"];
var b=a.filter((ele,index)=>{return a.indexOf(ele)===index});
console.log(b);