
const {Musician} = require ('./Musician.js')
class Troupe {
    musinTroupe = new Array();
    
    constructor ()
    {

    }
    set troupeName(tname)
    {
        if(tname.length>=3 && tname.length<=30)
        {
        this.troupe_name=tname;
        }
        else
        {
            console.log('Invalid Troupe Name');
        }
    }
    get troupeName()
    {
        return this.troupe_name;
    }

    set genre(tgenre)
    {
        if (tgenre == 'rock' || tgenre == 'pop' || tgenre == 'jazz')
        {
            this.trgenre=tgenre;
        }
        else 
        {
            console.log ('Invalid genre');
        }
    }
    get genre()
    {
    return this.trgenre;
    }
    set minDuration (mDuration)
    {
        if (mDuration>=0.5 && mDuration<=3)
        {
            this.minduration=mDuration;
        }
        else
        {
         console.log ('Enter number of hours between 0.5 and 3')
        }
    }
    get minDuration()
    {
        return this.minduration;
    }

    // Add musicians to troupe
    addMusician(musician){
        this.musinTroupe.push(musician)  
    }

    displaySummary(){
        console.log ('Name of the troupe:'+this.troupe_name + 'Genre is:'+this.trgenre + 'Minimum duration is:' + this.minduration);
        for (let i=0; i<this.musinTroupe.length; i++) {
            console.log('Musician name is:'+ this.musinTroupe[i].musName);
        }
        console.log('===============');
    }

}
    
module.exports={Troupe};