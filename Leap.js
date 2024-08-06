let year = prompt(`Enter the year:`);
year = Number(year);
function isleap(year){
    if(year % 4 === 0){ // divisible by 4
        if(year % 100 === 0){ // divisible by 100
            if(year % 400 === 0){ // divisible by 400
                return true; //leap year
            }
            else{
                return false; //not leap year
            }
        }
        else{
            return true; // divisible by 4 so leap year
        }
    }
    else{
        return false; //not divisible by 4 so not leap year
    }
}
