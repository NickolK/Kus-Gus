function validateForm() {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var email = document.getElementById("email").value;
  var gender = document.getElementById("gender").value;
  var message = document.getElementById("message").value;
  
  // Kontrola, či nie sú polia prázdne
  if (name.trim() == "" || surname.trim() == "" || email.trim() == "" || gender.trim() == "" || message.trim() == "") {
    alert("Všetky polia sú povinné.");
    return false;
  }
  
  // Kontrola formátu emailu pomocou regulárneho výrazu
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Prosím, zadajte platnú emailovú adresu.");
    return false;
  }
  
  // Ak všetky kontroly prejdú, formulár je považovaný za správny
  return true;
}
