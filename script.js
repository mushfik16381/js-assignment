// Problem:1  radianToDegree

function radianToDegree(radian){
    if (typeof radian !== 'number'){
        return "input a valid number";
    }

    const pi = 3.14159265359;
    let degree;
    degree = radian * (180/pi);
    return degree.toFixed(2);
}

// ====================================



// Problem:2  isJavaScriptFile 

function isJavaScriptFile (fileName){
    if (typeof fileName !== 'string'){
        return "input a valid string"
    }
    let effect = fileName.endsWith(".js");
    return effect;
}

// ====================================



// Problem 3: oilPrice

function oilPrice (desel, petrol, octen){
    if ( typeof desel !== 'number' || typeof petrol !== 'number' || typeof octen !== 'number'){
        return "input a valid number"
    }

    let totalPrice = (desel*114) + (petrol*130) + (octen*135);
    return totalPrice;
}
// =========================================



// Problem 4: publicBusFare 

function publicBusFare (memberOfPeople){
    if ( typeof memberOfPeople !== 'number'){
        return "Enter a valid number"
    }

    let bus = parseInt(memberOfPeople/50);
    bus*=50;

    memberOfPeople-=bus;
    let micro = parseInt(memberOfPeople/11);
    micro*=11;

    memberOfPeople-=micro;

    let totalPublicBusFare = (memberOfPeople*250);
    return totalPublicBusFare;


}

// ===============================




// Problem 5: isBestFriend

function isBestFriend (firstObject, secondObject)
{
    if ((typeof firstObject !== 'object' || Array.isArray(firstObject)) && (typeof secondObject !== 'object' || Array.isArray(secondObject)) )
    {
    return "Enter a valid object"
    }

    if (firstObject.name === secondObject.friend && secondObject.name === firstObject.friend){
        return true;
    }

    else{
    return false;
    }

}

// =======================================
