const startBtn = document.getElementById("start-btn");

startBtn.addEventListener('click', calculateBMI);

function calculateBMI() {
  let weight = parseFloat(prompt("Enter your Weight in Kilograms (e.g: 70)"));
  let height = parseFloat(prompt("Enter your Height in meters (e.g: 1.75)"));
  
  /* or
  let weightInput = prompt("Enter your Weight in Kilograms (e.g: 70)");
  let heightInput = prompt("Enter your Height in meters (e.g: 1.75)");

  Then Convert prompt result to numbers using parseFloat().
  const weight = parseFloat(weightInput);
  const height = parseFloat(heightInput);
  */

  // Check wheather the weight and height are valid or invalid.
  if (!weight || !height || isNaN(weight) || isNaN(height) || height <= 0 || weight  <= 0) {
    alert("Please enter valid positive number for weight and height.");
    return;
  }

  // BMI Formula
  const BMI = weight / (height * height);
  const bmiRounded = BMI.toFixed(2);

  let status = '';
  if (BMI < 18.5) {
    status = 'Underweight. please stop masturb***😜😜😜';
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    status = 'Normal weight. you are in good 👍👍👍';
  } else if (BMI >= 25.0 && BMI <= 29.9) {
    status = 'Overwwight. you are in danger foodfighter 🤣🤣🤣';
  } else if (BMI >= 30.0) {
    status = 'Obese. RIP 😱😱😱'
  }

  alert(`Your BMI is ${bmiRounded}. Your body status is ${status}.`)
}