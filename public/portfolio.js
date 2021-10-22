var form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append(
    "name",
    document.querySelector('input[name="Contact-Name"]').value
  );
  formData.append(
    "email",
    document.querySelector('input[name="Contact-Email"]').value
  );

  fetch("https://getform.io/f/a103f70f-5192-4a75-a809-fc0e6cc87c45", {
    method: "POST",
    body: formData,
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
