function solve(input){
let totalSum=0
let countGroups=Number(input[0])
let musala=0
let monblan=0
let kilimandzharo=0
let k2=0
let everest=0

for(let i=1; i<=countGroups; i++){
    let peoplePerGroup=Number(input[i])
    totalSum+=peoplePerGroup
    if(peoplePerGroup<=5){
        musala+=peoplePerGroup
    }else if(peoplePerGroup>5 && peoplePerGroup<=12){
        monblan+=peoplePerGroup
    }else if(peoplePerGroup>12 && peoplePerGroup<=25){
        kilimandzharo+=peoplePerGroup
    }else if(peoplePerGroup>25 && peoplePerGroup<=40){
        k2+=peoplePerGroup
    }else{
        everest+=peoplePerGroup
    }
    
}
console.log(`${(musala/totalSum*100).toFixed(2)}%`);
console.log(`${(monblan/totalSum*100).toFixed(2)}%`);
console.log(`${(kilimandzharo/totalSum*100).toFixed(2)}%`)
console.log(`${(k2/totalSum*100).toFixed(2)}%`)
console.log(`${(everest/totalSum*100).toFixed(2)}%`)


    

}solve(["5",

"25",

"41",

"31",

"250",

"6"])