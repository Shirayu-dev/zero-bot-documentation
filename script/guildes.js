const guildStatNameBonus=[["Force","Chance","Mana","Vitesse","Précision","Endurance"],["Mana","Vitesse","Force","Chance","Précision","Endurance"],["Précision","Endurance","Force","Chance","Mana","Vitesse"],["Force","Précision","Vitesse","Endurance","Mana","Chance"],["Force","Précision","Vitesse","Endurance","Mana","Chance"]];

const arrayXNb=(ArrayOne,nb)=>{
    var XArray=[]
    for (var i=0;i<ArrayOne.length;i++){
        XArray.push(Math.round(ArrayOne[i]*nb))
    }
    return XArray;
};

function guildStatBonus(guildNb,level) {
    let realLevel=level<=0?1:level>5?5:level;
    document.getElementById(`bonusLevel${guildNb}`).value=realLevel;
    document.getElementById(`level${guildNb}`).innerText=realLevel;
    console.log(true)
    const bonusLevel=realLevel-1;
    const bonusArray=guildNb==4?arrayXNb([15,15,15,15,15,15],1.5**bonusLevel):guildNb==5?arrayXNb([6,6,6,6,6,6],1.5**bonusLevel):arrayXNb([20,20,-4,-4,-4,-4],1.5**bonusLevel);
    let nb=0;
    for(const value of bonusArray) {
        document.getElementById(`${guildStatNameBonus[guildNb-1][nb].toLowerCase()}${guildNb}`).innerText=`${value<0?value:`+${value}`}`;
        nb++;
    }
}

//<--------------------------------------------------------------------------------------------->

const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});