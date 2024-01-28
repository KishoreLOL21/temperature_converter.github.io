let t;
let cel_check=document.getElementById("cel_rb");
let f_check=document.getElementById("f_rb");
let final_temperature;

document.getElementById("submit").onclick = function () {
    t = document.getElementById("input_box").value;
  
    if (f_check.checked) {
      final_temperature = (t * (9 / 5)) + 32;
      document.getElementById("result_display").innerHTML += final_temperature + '°F';
    } 
    else if (cel_check.checked) {
      final_temperature = (5 / 9) * (t - 32); 
      document.getElementById("result_display").innerHTML += final_temperature + '°C';
    } 
    else {
      document.getElementById("result_display").innerHTML += "Please Select an Option";
    }
  }
  