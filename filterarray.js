//To print even numbers
a=[22,23,25,26]
var b=a.filter(function (ele){if(ele%2===0) return true})
console.log(b);

//To print positive numbers
num=[-5,-4,-2,0,1,2,4,5,6]
res=num.filter(function(ele){if(ele>0)return true})
console.log(res)

//To print +ve num with arrow
 num1=[-5,-4,-2,0,1,2,4,5,6]
 res1=num1.filter((ele)=> ele>0);
 console.log(res1);

 a=['a','b','c','d']
 res=a.filter(a=>a.length>4)
 console.log(res)

 