const ps=require('prompt-sync');
const prompt=ps();

const {Musician}=require('./Musician.js');
const {Troupe}=require('./Troupe.js')
const musFunctions=require('./musFunctions.js');
var choice = 0;

while(true)
{
    if(choice==0){
        console.log('==================');
        console.log('Select your choice');
        console.log('\t1.Create a Musician\n\t2.Create a Troupe\n\t3.Add a musician to a troupe \n\t4.Provide a summary description of a troupe \n\t5.Provide a detailed description of a troupe.\n\t6.Calculate cost of deploying troupe\n\t7.Read a list of troupe names from a text file\n\t8.Write a list of the detailed descriptions for all troupes to a given filename \n\t9.Exit');
        choice=prompt('Enter your choice [1,2,3,4,5,6,7,8,9] : ');
    }

    if(choice==1)
    {
        musFunctions.createMusician();
        choice = 0;
    }

    if(choice==2)
    {
        musFunctions.createTroupe();
        choice = 0;
    }

    if(choice==3)
    {
        let tn = prompt ('Enter a Troupe name to add musician:')
        let mn = prompt ('Enter a Musician Name:')
        musFunctions.addMusiciantoTroupe(tn,mn);
        choice = 0;
    }
    
    if(choice==4)
    {
        musFunctions.getTroupeList();
        choice = 0;
    }
    
}