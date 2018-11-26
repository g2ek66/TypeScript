"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Date = (function () {
    function Date(theYear, theMouth, theDay) {
        this._year = theDay;
        this._mouth = theMouth;
        this._day = theDay;
    }
    Object.defineProperty(Date.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (newYear) {
            if (newYear > 0)
                this._year = newYear;
            else
                console.log("Error: L'annee ne doit pas etre negative");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Date.prototype, "mouth", {
        get: function () {
            return this._mouth;
        },
        set: function (newMouth) {
            if (newMouth >= 1 || newMouth <= 12)
                this._mouth = newMouth;
            else
                console.log("Error: le moi doit etre compris entre 1 et 12");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Date.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (newDay) {
            if (newDay >= 1 || newDay <= 31)
                this._day = newDay;
            else
                console.log("Error: Le jour doit etre compris entre 1 et 31");
        },
        enumerable: true,
        configurable: true
    });
    Date.prototype.toString = function () {
        return this._year + '-' + this._mouth + '-' + this._day;
    };
    Date.prototype.setDate = function (theYear, theMouth, theDay) {
        if (theYear > 0)
            this._year = theYear;
        else
            console.log("Error: L'annee ne doit pas etre negative");
        if (theMouth > 0 || theMouth <= 12)
            this._year = theMouth;
        else
            console.log("Error: L'annee ne doit pas etre negative");
        if (theDay > 0 || theDay <= 31)
            this._year = theDay;
        else
            console.log("Error: L'annee ne doit pas etre negative");
        return toString();
    };
    Date.prototype.yesterday = function () {
        this._day = this._day - 1;
        return toString();
    };
    Date.prototype.tomorrow = function () {
        this._day = this._day + 1;
        return toString();
    };
    Date.prototype.addYear = function (numberYear) {
        if (numberYear === void 0) { numberYear = 1; }
        this._year = this._year + numberYear;
        return toString();
    };
    Date.prototype.subYear = function (numberYear) {
        if (numberYear === void 0) { numberYear = 1; }
        this._year = this._year - numberYear;
        return toString();
    };
    Date.prototype.addMouth = function (numberMouth) {
        if (numberMouth === void 0) { numberMouth = 1; }
        this._mouth = this._mouth + numberMouth;
        return toString();
    };
    Date.prototype.subMouth = function (numberMouth) {
        if (numberMouth === void 0) { numberMouth = 1; }
        this._day = this._day - numberMouth;
        return toString();
    };
    Date.prototype.addDay = function (numberDay) {
        if (numberDay === void 0) { numberDay = 1; }
        this._day = this._day + numberDay;
        return toString();
    };
    Date.prototype.subDay = function (numberDay) {
        if (numberDay === void 0) { numberDay = 1; }
        this._day = this._day - numberDay;
        return toString();
    };
    return Date;
}());
exports.Date = Date;
