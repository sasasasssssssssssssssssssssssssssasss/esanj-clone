document.getElementById("test-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let q1 = document.querySelector('select[name="q1"]').value;
    let q2 = document.querySelector('select[name="q2"]').value;
  
    let result = "نتایج تست:\n";
  
    if (q1 === "yes") {
      result += "شما در جمع احساس راحتی می‌کنید.\n";
    } else {
      result += "شما در جمع احساس راحتی نمی‌کنید.\n";
    }
  
    if (q2 === "yes") {
      result += "شما به راحتی استرس می‌گیرید.\n";
    } else {
      result += "شما به راحتی استرس نمی‌گیرید.\n";
    }
  
    alert(result);
  });
  