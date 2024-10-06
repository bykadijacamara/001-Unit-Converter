const lengthMetric = document.getElementById("length-metric")
const volumeMetric = document.getElementById("volume-metric")
const massMetric = document.getElementById("mass-metric")
const inputField = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")

const METERS_TO_FEET = 0.3048;
const FEET_TO_METERS = 3.28;
const GALLONS_TO_LITERS = 3.78541;
const LITERS_TO_GALLONS = 0.264172;
const POUNDS_TO_KILOS = 0.453;
const KILOS_TO_POUNDS = 2.2;


convertBtn.addEventListener("click", function(){

    const inputValue = parseFloat(inputField.value)

    const lengthinMeters = inputValue * METERS_TO_FEET
    const lengthinFeet = inputValue * FEET_TO_METERS
    const volumeinLiters = inputValue * GALLONS_TO_LITERS
    const volumeinGallons = inputValue * LITERS_TO_GALLONS
    const massinKilograms = inputValue * POUNDS_TO_KILOS
    const massinPounds = inputValue * KILOS_TO_POUNDS

    lengthMetric.innerHTML = `${inputValue} meters = ${lengthinFeet.toFixed(3)} feet | ${inputValue} feet = ${lengthinMeters.toFixed(3)} meters`
    volumeMetric.innerHTML = `${inputValue} liters = ${volumeinGallons.toFixed(3)} gallons | ${inputValue} gallons = ${volumeinLiters.toFixed(3)} liters`
    massMetric.innerHTML = ` ${inputValue} kilos = ${massinPounds.toFixed(3)} pounds | ${inputValue} pounds = ${massinKilograms.toFixed(3)} kilos `

    inputField.value = ""

})

