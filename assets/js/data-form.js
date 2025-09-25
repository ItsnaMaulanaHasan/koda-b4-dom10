const dataLocal = window.localStorage.getItem("dataForm");

const dataJson = JSON.parse(dataLocal);

// console.log(dataJson);

const createRowTable = (...data) => {
  const element = document.querySelector("#data-tabel-form > tbody");
  const tr = document.createElement("tr");
  data.forEach((item) => {
    const td = document.createElement("td");
    if (typeof item === "array") {
      item = item.join(", ");
      td.innerText = item;
    } else {
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
  console.log(cigar);
});
