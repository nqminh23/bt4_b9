document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const phone = document.getElementById("phone").value;

    if (fullname === "" || phone.length !== 10) {
      alert("Vui lòng nhập đầy đủ họ tên và số điện thoại phải là 10 chữ số.");
      return false;
    }

    alert("Form submitted successfully!");
  });
