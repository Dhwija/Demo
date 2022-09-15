a=[1,2,2,1,1,2]
count={}
for(ele of a){
    if(count[ele]){
        count[ele]=count[ele]+1
    }
    else{
        count[ele]=1
    }
    
}
console.log(count)