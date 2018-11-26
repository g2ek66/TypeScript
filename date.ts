class Date
{
    private _year : number;
    private _mouth : number;
    private _day : number;

    constructor (theYear:number, theMouth:number, theDay:number)
    {
        this._year = theDay;
        this._mouth = theMouth;
        this._day = theDay;
    }

    get year(): number {
        return this._year;
    }

    set year(newYear: number) {
        if(newYear > 0)
            this._year = newYear;
        else
            console.log("Error: L'annee ne doit pas etre negative");
    }
    get mouth(): number {
        return this._mouth;
    }

    set mouth(newMouth: number) {
        if(newMouth >=1 || newMouth <= 12)
            this._mouth = newMouth;
        else
            console.log("Error: le moi doit etre compris entre 1 et 12");
    }

    get day(): number {
        return this._day;
    }

    set day(newDay: number) {
        if(newDay >=1 || newDay <= 31)
            this._day = newDay;
        else
            console.log("Error: Le jour doit etre compris entre 1 et 31");
    }

    toString(): string
    {
        return this._year+'-'+this._mouth+'-'+this._day
    }

    setDate(theYear: number, theMouth: number, theDay: number): string
    {
        if(theYear > 0)
            this._year = theYear;
        else
            console.log("Error: L'annee ne doit pas etre negative");
        if(theMouth > 0 || theMouth <= 12)
            this._year = theMouth;
        else
            console.log("Error: L'annee ne doit pas etre negative");
        if(theDay > 0 || theDay <= 31)
            this._year = theDay;
        else
            console.log("Error: L'annee ne doit pas etre negative");
        return toString();
    }

    yesterday()
    {
        this._day = this._day -1;
        return toString();
    }

    tomorrow()
    {
        this._day = this._day +1;
        return toString();
    }

    addYear(numberYear = 1 )
    {
        this._year = this._year + numberYear;
        return toString();
    }

    subYear(numberYear = 1)
    {
        this._year = this._year - numberYear;
        return toString();
    }

    addMouth(numberMouth = 1)
    {
        this._mouth = this._mouth + numberMouth;
        return toString();
    }

    subMouth(numberMouth = 1)
    {
        this._day = this._day - numberMouth;
        return toString();
    }

    addDay(numberDay = 1)
    {
        this._day = this._day + numberDay;
        return toString();
    }

    subDay(numberDay = 1)
    {
        this._day = this._day - numberDay;
        return toString();
    }
}

export {Date}