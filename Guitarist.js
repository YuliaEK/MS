const {Musician}=require('./Musician.js');

class Guitarist extends Musician {
    constructor (musname, yearspl, hrate){
        super (musname,yearspl,hrate)
    }
   
    set guitarist(ginstrument){
        if (ginstrument=="Guitarist"){
            this.ginstrument=ginstrument;
        }
    }
    get guitarist()
    {
        return this.ginstrument;
    }
   
    displayDetails(){
        return (this.musname+' is a guitarist. The more strings you have, the better you are' )
    }
   
   
   }

   module.exports={Guitarist};
