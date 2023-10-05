const data = [
  {
    data_inicio: "31/05/2023",
    data_termino: "20/05/2023",
    inicio: "08:00",
    id: 1,
    status: "ao vivo",
  },
  {
    data_inicio: "21/05/2023",
    data_termino: "21/05/2023",
    inicio: "09:00",
    id: 2,
    status: "finalizado",
  },
  {
    data_inicio: "22/05/2023",
    data_termino: "22/05/2023",
    inicio: "10:00",
    id: 3,
    status: "a iniciar",
  },
  {
    data_inicio: "23/05/2023",
    data_termino: "23/05/2023",
    inicio: "11:00",
    id: 4,
    status: "ao vivo",
  },
  {
    data_inicio: "24/06/2023",
    data_termino: "24/05/2023",
    inicio: "12:00",
    id: 5,
    status: "finalizado",
  },
  {
    data_inicio: "25/05/2023",
    data_termino: "25/05/2023",
    inicio: "13:00",
    id: 6,
    status: "ao vivo",
  },
  {
    data_inicio: "26/05/2023",
    data_termino: "26/05/2023",
    inicio: "14:00",
    id: 7,
    status: "a iniciar",
  },
  {
    data_inicio: "27/05/2023",
    data_termino: "27/05/2023",
    inicio: "15:00",
    id: 8,
    status: "finalizado",
  },
  {
    data_inicio: "28/05/2023",
    data_termino: "28/05/2023",
    inicio: "16:00",
    id: 9,
    status: "ao vivo",
  },
  {
    data_inicio: "29/05/2023",
    data_termino: "29/05/2023",
    inicio: "17:00",
    id: 10,
    status: "a iniciar",
  },
];

function populateTable(data) {
  const tableBody = document.getElementById("tableBody");

  data.forEach((item) => {
    const row = tableBody.insertRow();
    Object.values(item).forEach((value) => {
      const cell = row.insertCell();
      cell.textContent = value;
    });
  });
}

function checkFilter(evento, filtro) {
  switch (filtro) {
    case "todos":
      return true;
    case "ao_vivo":
      return evento.status === "ao vivo";
    case "por_data":
      return true;
    case "finalizados":
      return evento.status === "finalizado";
    default:
      return true;
  }
}

function populateTable(data, filtro) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  if (filtro === "por_data") {
    data.sort(sortByDate);
  }

  data.forEach((item) => {
    if (checkFilter(item, filtro)) {
      const row = tableBody.insertRow();
      Object.values(item).forEach((value) => {
        const cell = row.insertCell();
        cell.textContent = value;
      });
    }
  });
}

function sortByDate(a, b) {
  const dateA = new Date(a.data_inicio.split("/").reverse().join("-"));
  const dateB = new Date(b.data_inicio.split("/").reverse().join("-"));
  return dateB - dateA; 
}

document.querySelectorAll('[name="filtro"]').forEach((radio) => {
  radio.addEventListener("change", (event) => {
    const filtro = event.target.value;
    populateTable(data, filtro);
  });
});

populateTable(data, "todos");
