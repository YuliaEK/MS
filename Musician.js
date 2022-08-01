
const ps=require('prompt-sync')
const prompt=ps()


class Musician{
    constructor()
    {

    }
    set musName(musname)
    {
        if(musname.length>=3 && musname.length<=30)
        {
        this.mus_name=musname;
        }
        else
        {
            console.log('Invalid Musician Name (Name should be between 3 and 30 charactesr');
        }
    }
    get musName(){
        return this.mus_name;
    }
    set yearsPlaying(yearspl)
    {
        if(yearspl>=0)
        {
        this.years_pl=yearspl;
        }
        else
        {
            console.log('Years playing must be non-negative');
        }
    }
    get yearsPlaying()
    {
        return this.years_pl;
    }
    set hourlyRate(hrate)
    {
        if(hrate>=50)
        {
            this.hourly_rate=hrate;
        }
    
        else
        {
            console.log('Hourly rate must be over 50');
        }
    }

    get hourlyRate()
    {
        return this.hourly_rate;
    }

}

 
module.exports={Musician};
