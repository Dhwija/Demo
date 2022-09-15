a=[1,2,3,4]
a1=[]
for(i=a.length-1;i>=0;i--)
{
   a1.push(a[i])
}
console.log(a1);


a2=[]
for(i=0;i<=3;i++)
{
    a2.unshift(a[i])
}
console.log(a2);