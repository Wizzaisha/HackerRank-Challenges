function timeConversion(s) {
    // Write your code here

    let convertedDate = "";

    let hour = s.slice(0, 2);
    const minSecs = s.slice(2, s.length - 2);
    const aux = s.slice(s.length - 2, s.length);

    if (parseInt(hour) === 12 && aux === "PM") convertedDate = hour + minSecs;
    else if (parseInt(hour) === 12 && aux === "AM") convertedDate = "00" + minSecs;
    else if (aux === "PM") convertedDate = `${parseInt(hour) + 12}` + minSecs;
    else if (aux === "AM") convertedDate = hour + minSecs;

    return convertedDate;
}


const s = "12:40:22AM";

console.log(timeConversion(s));