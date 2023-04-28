function solve(input){
    let actorName=input[0];
    let academyPoints=Number(input[1]);
    let countJudges=Number(input[2]);
    let try=0

    let totalPoints=academyPoints


    for(let i=3; i<input.length; i+=2){
        let judgeName=input[i];
        let givenPoints=Number(input[i+1])

        let collecteDpointsfromJudges=judgeName.length*givenPoints/2
        totalPoints+=collecteDpointsfromJudges
        if(totalPoints>1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`)
            return;
        }
        

    }

    if(totalPoints<1250.5){
        console.log(`Sorry, ${actorName} you need ${(1250.5-totalPoints).toFixed(1)} more!`)
    }


}
solve(["Zahari Baharov",

          "205",

          "4",

     "Johnny Depp",

          "45",

       "Will Smith",

          "29",

       "Jet Lee",

         "10",

    "Matthew Mcconaughey",

         "39"])