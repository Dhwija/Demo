num=12;
num1=6;
num2=8;
num3=5;
res=res1=res2=res3=total=1;


for(i=0;i<=num;i++)
{
    if(num%i==0)
    {
       
     res=i*res;
     }
     if(num1%i==0)
     {
        
        res1=i*res1;
     }
     if(num2%i==0)
     {
        
        res2=i*res2;
     }
     if(num3%i==0)
     {
        
        res3=i*res3;
     }
 
}
console.log("sum of 12 fact ",res);
 console.log("sum of 6 fact ",res1);
 console.log("sum of 8 fact ",res2);
 console.log("sum of 5 fact ",res3);

 total=res-res1+res2/res3;
 console.log(total);