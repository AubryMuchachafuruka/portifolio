
function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const unitType = document.getElementById("unitType").value;

  if (isNaN(inputValue)) {
    document.getElementById("result").textContent = "Please enter a valid number";
    return;
  }

  let result;
  if (unitType === "length") {
    const lengthFrom = document.getElementById("length-from").value;
    const lengthTo = document.getElementById("length-to").value;

    const lengthFactors = {
      meters:      1,
      kilometers:  1000,
      miles:       1609.34,
      yards:       0.9144,
      feet:        0.3048,
      inches:      0.0254
    };

    result = (inputValue * lengthFactors[lengthFrom]) / lengthFactors[lengthTo];
    document.getElementById("result").textContent = `${inputValue} ${lengthFrom} = ${result.toFixed(5)} ${lengthTo}`;

  } else if (unitType === "weight") {
    const weightFrom = document.getElementById("weight-from").value;
    const weightTo = document.getElementById("weight-to").value;

    const weightFactors = {
      kilograms: 1,
      grams: 0.001,
      pounds: 0.453592,
      ounces: 0.0283495
    };

    result = (inputValue * weightFactors[weightFrom]) / weightFactors[weightTo];
    document.getElementById("result").textContent = `${inputValue} ${weightFrom} = ${result.toFixed(5)} ${weightTo}`;

  } else if (unitType === "temperature") {
    const temperatureFrom = document.getElementById("temperature-from").value;
    const temperatureTo = document.getElementById("temperature-to").value;

    if (temperatureFrom === temperatureTo) {
      result = inputValue;
    } else if (temperatureFrom === "celsius") {
      if (temperatureTo === "fahrenheit") {
        result = (inputValue * 9 / 5) + 32;
      } else if (temperatureTo === "kelvin") {
        result = inputValue + 273.15;
      }
    } else if (temperatureFrom === "fahrenheit") {
      if (temperatureTo === "celsius") {
        result = (inputValue - 32) * 5 / 9;
      } else if (temperatureTo === "kelvin") {
        result = (inputValue - 32) * 5 / 9 + 273.15;
      }
    } else if (temperatureFrom === "kelvin") {
      if (temperatureTo === "celsius") {
        result = inputValue - 273.15;
      } else if (temperatureTo === "fahrenheit") {
        result = (inputValue - 273.15) * 9 / 5 + 32;
      }
    }

    document.getElementById("result").textContent = `${inputValue} ${temperatureFrom} = ${result.toFixed(2)} ${temperatureTo}`;
  }
}

document.getElementById("unitType").addEventListener("change", function() {
  const unitType = this.value;
  document.getElementById("length-options").style.display = unitType === "length"? "block": "none";
  document.getElementById("weight-options").style.display = unitType === "weight"? "block": "none";
  document.getElementById("temperature-options").style.display = unitType === "temperature"? "block": "none";
});

