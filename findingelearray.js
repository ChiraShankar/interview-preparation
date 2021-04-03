////to be checked


function findElement(items,match){
    for(let i=0,total=items.length;i<total;i++)
    if(items[i]==match){
        return i;
        return -1;
    }
};
findElement([1,2,3,5,1],1); //output 0