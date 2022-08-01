const {Musician}=require('./Musician.js');

class Percussionist extends Musician {
    constructor (musname, yearspl, hrate){
        super (musname,yearspl,hrate)
    }

    set percussionist(pinstrument){
        if (pinstrument == "Percussionist"){
            this.pinstrument=pinstrument;
        }
    } 
    get percussionist(){
    return this.pinstrument
    }
    displayDetails(){
        return (this.musname+' is a percussionist. Me drum' )
    }
}

module.exports={Percussionist};
