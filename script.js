function searchResult() {
  const rollNumber = document.getElementById("rollInput").value.trim();
  const result = students.find(student => student.roll === rollNumber);

  if (result) {
    document.getElementById("name").innerText = result.name;
    document.getElementById("class").innerText = result.class;
    document.getElementById("roll").innerText = result.roll;

    // Subject table fill
    const table = document.getElementById("marksTable");
    table.innerHTML = "";

    result.subjects.forEach(sub => {
      const row = `
        <tr>
          <td>${sub.name}</td>
          <td>${sub.total}</td>
          <td>${sub.mark}</td>
        </tr>
      `;
      table.innerHTML += row;
    });

    document.getElementById("total").innerText = result.total;
    document.getElementById("percentage").innerText = result.percentage;
    document.getElementById("rank").innerText = result.rank;
    document.getElementById("attendance").innerText = result.attendance;

    document.getElementById("resultSection").style.display = "block";
  } else {
    alert("Result not found!");
  }
}
