function fact(num) //function signature
{
    res=1;
for(i=1;i<=num;i++)
     {
      if(num%i==0)
       {
        res=i*res;
       }
     
   }// functin body 
return res;
}
console.log(fact (12)) //function call
console.log(fact (6))
console.log(fact (5))
console.log(fact (8))
console.log(fact(4))



function mul(a,b)
{
  
  return   a*b;
}
console.log(mul(3,3))

