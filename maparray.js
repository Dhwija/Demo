//A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
//Calls a defined callback function on each element of an array, and returns an array that contains the results.


//To print ele and index
a=[22,23,25,26]
b=a.map(function (element,index){console.log(element+" "+index);return element})
console.log(b);

a=[1,2,3]
a.map((element,index) => element+""+index)
console.log(a);

//to print mul of ele
a=[3,2,4,1,5]
res=a.map((ele)=> ele*ele*ele)
res.sort(function(a,b){
    return a-b
});
console.log(res)

