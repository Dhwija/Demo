//sort method with numeric
a=[3,4,2,1,5]
res=a.sort()
console.log(res);

//sort method with string
month=["May","Sep","Jan","Nov"]
res=month.sort()
console.log(res);

//sort function
a=[2,6,3,7,1]
res=a.sort(function(a,b){
    return a-b
});
console.log(res)

//sort function with arrow
 a=[8,3,2,9,1]
 res=a.sort((a,b)=>a-b);
 console.log(res)


