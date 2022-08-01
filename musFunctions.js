const ps=require('prompt-sync');
const prompt=ps();
const fs = require ('fs');

const {Musician}=require('./Musician.js');
const {Guitarist}=require('./Guitarist.js');
const {Bassist}=require('./Bassist.js');
const {Flautist}=require('./Flautist.js');
const {Percussionist}=require('./Percussionist.js');
const {Troupe}=require('./Troupe.js');

var musicianDetails = new Array();
var troupeDetails = new Array();
let instrument;


// Create a new musician
function createMusician()
{
    let musicianName= "";
    let yPlay=0;
    let hourlyR=0;


instrument = prompt ("Enter instrumentalist (Guitarist; Bassist; Flautist, Percussionist):");
while (true)
{
   if (instrument == "Guitarist" || instrument == "Bassist" || instrument == "Percussionist" || instrument == "Flautist"   )
   {
       if(musicianName.length>=3 && musicianName.length<=30)
       {
           if (yPlay>=0)
           {
               if(hourlyR>=50)
               {
                   break;
               }
               else
               {
                yPlay=prompt ('Enter years (Years playing must be non-negative):');
               }
           }
           else
           {
            hourlyR=prompt ('Enter hourly rate (greater than 50):');
           }
       }
       else
       {
           musicianName=prompt('Enter a musician name (3 to 30 characters):');
       }
   }
   else 
   {
       console.log("Invalid instrument");
   }
}


const mus1=new Musician();
mus1.musName=musicianName;
mus1.yearsPlaying=yPlay;
mus1.hourlyRate=hourlyR;
addMusician(mus1);

}

function addMusician(musician)
{
    musicianDetails.push(musician);
    console.log(musicianDetails);
}

// get musician list
function getMusicianList()
{
return musicianDetails;
}

// Create a new troupe
function createTroupe () {

    let trName="";
    let trGenre="";
    let minimumDur=0;
    
    while (true)
{
   
       if(trName.length>=3 && trName.length<=30)
       {
           if (trGenre == 'rock' || trGenre == 'pop' || trGenre == 'jazz')
           {
               if(minimumDur>=0.5 && minimumDur<=3)
               {
                   break;
               }
               else
               {
                minimumDur=prompt ('Enter minimum duration (between 0.5 and 3):');
                  }
           }
           else
           {
            trGenre=prompt ('Enter genre (rock, pop, jazz):')
            
           }
       }
       else
       {
           trName=prompt('Enter a troupe name (3 to 30 characters):');
       }
   }

    const tr1 = new Troupe();
    tr1.troupeName=trName;
    tr1.genre=trGenre;
    tr1.minDuration=minimumDur;
    troupeReg(tr1);
}

function troupeReg(troupe){
    troupeDetails.push(troupe);
    console.log(troupeDetails);
}

// get list of troups
function getTroupeList()
{
return troupeDetails;
}

// add Musician to a troupe
function addMusiciantoTroupe (troName, misicianName) // under 
{
    if(troupeDetails.troupeName == troName)
    {
        for (i=0; i<musicianDetails.length; i++)
        {
            if(musicianDetails[i].troupeName == troName)
            {
                troupeDetails.push(musicianDetails[i]);
            }
            console.log(troupeDetails)
        }
    }
}

// Display summary disc about a troupe
function summaryDiscription(troupename) // under
{
    for (i=0; i <troupeDetails.length; i++)
    {
        if(troupeDetails[i].troupeName == troupename)
        {
            console.log("The troupe name is" +troupeDetails[i].troupeName)
        }
    }
}
module.exports={createMusician, addMusician, createTroupe, troupeReg, addMusiciantoTroupe, getTroupeList,getMusicianList, summaryDiscription};