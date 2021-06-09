const age = 19;
const isFemale = false;
const driverStatus = "Bob";
const YourName = "Alexander";
const TotalAmount = 10;


if (age >= 18) {

    console.log("Jij bent oud genoeg om naar binnen te mogen.");
} else {

    console.log("Jij bent nog niet oud genoeg om binnen gelaten te worden!")
}

if (age >= 18 && age <= 25) {
    console.log("Jij komt in aanmerking voor 50% korting!")
} else {
    console.log("Helaas geldt de korting niet voor jou!")
}

if (YourName == "Sarah" || YourName == "Bram") {
    console.log("Jij krijgt een gratis biertje!")
} else {
    console.log("Jij moet gewoon betalen voor je bier!")
}

if (isFemale) {

    console.log("Het is LadiesNight!")

} else {

    console.log("Helaas, de mannen betalen wel entree!");
}

if (driverStatus == "Bob") {

    console.log("Jij bent de chauffeur vanavond!")
} else {

    console.log("Ik vermoed dat jij gedronken hebt. Jij mag geen auto meer rijden!")
}

if (TotalAmount > 25) {
    console.log("Jij krijgt een portie bitterballen bij je drankje!")
} else if (TotalAmount > 50) {
    console.log("Jij krijgt een lekker bakje nachos erbij!")
} else if (TotalAmount > 100) {
    console.log("Lekker hoor! Jij hebt een gratis fles Champagne gescoord!")
} else {
    console.log("Als je meer had besteed, had je er gratis producten bij kunnen krijgen.")
}
