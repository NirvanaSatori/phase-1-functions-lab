
// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(street){
    // returns a distance in blocks
    return (Math.abs(street - 42));
}

function distanceFromHqInFeet(street){
    const blocks = distanceFromHqInBlocks(street);
    //  returns a distance in feet
    return (blocks * 264);
}
function distanceTravelledInFeet(start, destination){
    // returns the distance travelled in feet
    const distanceBetweenInFeet = (Math.abs(destination - start)) * 264;
    return distanceBetweenInFeet;
}

function calculatesFarePrice(start, destination){
    const distanceBetweenInFeet = distanceTravelledInFeet(start, destination);

    // gives customers a free sample
    if(distanceBetweenInFeet < 400){
        return 0;
    }
    else if(distanceBetweenInFeet > 400 && distanceBetweenInFeet < 2000){
        return (distanceBetweenInFeet - 400)*0.02;
    }
    else if(distanceBetweenInFeet > 2000 && distanceBetweenInFeet < 2500){
        return 25;
    }
    else if(distanceBetweenInFeet > 2500){
        return 'cannot travel that far';
    }
}
