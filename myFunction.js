function myFunction(a,b){

const datos = Object.keys(a)

for (let i = 0; i < datos.length;i ++){

    if (datos [i] === b ) {
        if (a[datos[i]] !== undefined){
            return true;
    }
        }
        
}
return false;}

console.log(myFunction({a:1,b:2,c:3},'b'));
console.log(myFunction({x:'a',y:'b',z:'c'},'a'));
console.log(myFunction({x:'a',y:'b',z:undefined},'z'));
