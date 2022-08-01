const {Musician}=require('./Musician.js');

class Bassist extends Musician {
    constructor (musname, yearspl, hrate){
        super (musname,yearspl,hrate)
    }
    set bassist(binstrument){
        if (binstrument == "Bassist"){
            this.binstrument=binstrument;
        }
    } 
    get bassist(){
    return this.binstrument
    }
    displayDetails(){
        return (this.musname+' is a bassist. Everyone loves a bassist' )
    }
   
}

module.exports={Bassist};
