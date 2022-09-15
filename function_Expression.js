var a=function(x)
{    var res=1;
    for(i=1;i<=x;i++)
    {    
        if(x%i===0)
        {
            res=i*res;
        }
    }return res;
}    
console.log(a(8));


console.log(function(a,b)
{   return a*b;
    }
   (3,2));

var x=function(a,b)
{
    return a*b;
}
console.log(x(4,3))