function Tempconvert() {
    const temp = parseFloat(document.getElementById('inputTemp').value);
    const unit = document.getElementById('inputUnit').value;
    let res,r1,r2,r3, celsius, fahrenheit, Kelvin;;

    if (isNaN(temp)) {
        res = "Error, Enter a number!";
        document.getElementById('result').textContent =   res;
        return;
    } else{
        if (unit === "celsius") {
            r2= `${temp}°C is ${(temp * 9/5) + 32}°F`;
            r3= `${temp}°C is ${(temp +273.15)}°K`;
            document.getElementById('r2').innerHTML = `${r2}`;
            document.getElementById('r3').innerHTML = `${r3}`;
            return;
        } else if (unit === "fahrenheit") {
            r1=`${temp}°F is ${(temp - 32) * 5/9}°C`;
            r3= `${temp}°F is ${(temp- 32) * 5/9 + 273.15}°K`;
            document.getElementById('r1').innerHTML = `${r1}`;
            document.getElementById('r3').innerHTML = `${r3}`;
            return;
        }
        else if(unit==="Kelvin"){
            r1=`${temp}°K is ${(temp -273.15)}°C`;
            r2=`${temp}°K is ${(temp- 273.15) * 9/5 + 32}°F`;
            document.getElementById('r1').innerHTML = `${r1}`;
            document.getElementById('r2').innerHTML = `${r2}`;
            return;
        }
    }
}

