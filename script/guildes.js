const guildStatNameBonus=[["Force","Chance","Mana","Vitesse","Précision","Endurance"],["Mana","Vitesse","Force","Chance","Précision","Endurance"],["Précision","Endurance","Force","Chance","Mana","Vitesse"],["Force","Précision","Vitesse","Endurance","Mana","Chance"],["Force","Précision","Vitesse","Endurance","Mana","Chance"]];

const xpForAGuildLevel=(guildLvl)=>{
    if (guildLvl>12) return 0;
    const arrayXpForLevel=[2,5,9,14,20,27,35,44,54,65,77,90];
    return arrayXpForLevel[guildLvl-1];
};

//name : addLevelXP | doc : guild
const totalXpForAGuildLevel=(lvl)=>{
    var xp=0;
    for (var i=1;i<=lvl;i++){
        xp+=xpForAGuildLevel(i);
    };
    return xp;
}

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
        labels: ['Niveau 1', 'Niveau 2', 'Niveau 3', 'Niveau 4', 'Niveau 5', 'Niveau 6', 'Niveau 7','Niveau 8', 'Niveau 9', 'Niveau 10', 'Niveau 11', 'Niveau 12'],
        datasets: [{
            type: 'line',
            label: 'Quantité d\'XP pour atteindre ce niveau ',
            data: [xpForAGuildLevel(1), xpForAGuildLevel(2), xpForAGuildLevel(3), xpForAGuildLevel(4), xpForAGuildLevel(5), xpForAGuildLevel(6), xpForAGuildLevel(7), xpForAGuildLevel(8), xpForAGuildLevel(9), xpForAGuildLevel(10), xpForAGuildLevel(11), xpForAGuildLevel(12)],
            backgroundColor: '#000',
            borderColor: '#000',
            borderWidth: 1
        },
        {
            label: 'Quantité d\'XP total ',
            data: [totalXpForAGuildLevel(1), totalXpForAGuildLevel(2), totalXpForAGuildLevel(3), totalXpForAGuildLevel(4), totalXpForAGuildLevel(5), totalXpForAGuildLevel(6), totalXpForAGuildLevel(7), totalXpForAGuildLevel(8), totalXpForAGuildLevel(9), totalXpForAGuildLevel(10), totalXpForAGuildLevel(11), totalXpForAGuildLevel(12)],
            borderColor: '#000',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        interaction: {
            axis: 'xy',
            intersect: true,
            mode: 'nearest'
          },
    }
});