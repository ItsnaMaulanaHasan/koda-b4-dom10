const form = document.getElementById("form-survey");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  let dataFormUrl = new URLSearchParams(formData);
  dataFormUrl = dataFormUrl.toString();
  const localDatas = window.localStorage.getItem("dataForm");
  if (localDatas) {
    let localDataJson = JSON.parse(localDatas);
    localDataJson.push(dataFormUrl);
    window.localStorage.setItem("dataForm", JSON.stringify(localDataJson));
  } else {
    window.localStorage.setItem("dataForm", JSON.stringify(new Array(dataFormUrl)));
  }
  form.reset();
  window.location.href = "http://127.0.0.1:5500/data-form.html";
});