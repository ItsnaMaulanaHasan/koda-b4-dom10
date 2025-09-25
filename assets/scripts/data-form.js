const dataLocal = window.localStorage.getItem("dataForm");
const dataJson = JSON.parse(dataLocal);

const createRowTable = (...data) => {
  const element = document.querySelector("#data-tabel-form > tbody");
  const tr = document.createElement("tr");
  data.forEach((item) => {
    const td = document.createElement("td");
    if (typeof item === "array") {
      item = item.join(", ");
      td.innerText = item;
    } else {
      if (item === "man") {
        item = "Laki-laki";
      } else if (item === "woman") {
        item = "Perempuan";
      } else if (item === "true") {
        item = "Ya";
      } else if (item === "false") {
        item = "Tidak";
      }
      td.innerText = item;
    }
    tr.append(td);
  });
  element.append(tr);
};

dataJson.forEach((data) => {
  data = new URLSearchParams(data);
  const obj = Object.fromEntries(data);
  const { name, old, gender, isSmoker } = obj;
  const cigar = data.getAll("cigar");
  createRowTable(name, old, gender, isSmoker, cigar);
});

document.getElementById("btn-back").addEventListener("click", (e) => {
  window.history.back();
});
