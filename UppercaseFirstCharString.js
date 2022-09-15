  //to find1st char
  a="apple"
 res=a.charAt(0);
console.log(res)

//to print uppercase
a="apple"
res=a.toUpperCase()
console.log(res)

//except 1st char remaining string
a="apple"
res=a.slice(1,5)
console.log(res)
res1=a.substring(2)
console.log(res1)

//To print only 1st char uppercase
a="apple"
res=a.charAt(0).toUpperCase()+a.slice(1,5)
console.log(res)

a=["abc","def"]
for(b of a){
    b=b.charAt(0).toUpperCase()+b.substring(1)
    console.log(b)
}

