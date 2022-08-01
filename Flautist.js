const {Musician}=require('./Musician.js');

class Flautist extends Musician {
    constructor (musname, yearspl, hrate){
        super (musname,yearspl,hrate)
    }
    set flautist(finstrument){
        if (finstrument == "Flautist"){
            this.finstrument=finstrument;
        }
    } 
    get flautist(){
    return this.finstrument
    }
    displayDetails(){
        return (this.musname+' is a flautist. 1989 heavy metal instrument of the year' )
    }
}

module.exports={Flautist};

