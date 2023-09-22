console.log("Print odd numbers in an array")
var a=[1,2,3,4];
function Odd(a)
{
    for(let i=0;i<a.length;i++)
    {
        if(a[i]%2!==0)
        {
            console.log(a[i]);
        }
    }
}
Odd(a);

console.log("Convert all the strings to title caps in a string array")
var b=["mani"];
var word;
function caps(b)
{
    
    return b.map(word=>{
        const first = word.charAt(0).toUpperCase();
        
       const rest=word.slice(1).toLowerCase();
       var final=first+rest;
        console.log(final);
    });
   
}
caps(b);

console.log("Sum of all numbers in an array")
var num=[1,2,3,4,5];
function sum(num)
{
    let sum=0;
    for(var i=0;i<num.length;i++)
    {
        sum=sum+num[i];

    }
    console.log(sum);

}
sum(num);

console.log("Return all the prime numbers in an array")
var a=[1,2,3,4,5,7,8,9];
function prime(a)
{
    a.map((numarr)=>{
    for(let i=2; i<numarr; i++)
    {
        if(numarr %i===0)
        {
            console.log(a[i]);
        }
    }
})}
prime(a);


