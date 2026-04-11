// 🔍 SEARCH FUNCTION
function searchResult() {
  const rollNumber = document.getElementById("rollInput").value.trim().toString();

  const result = students.find(student => student.roll == rollNumber);

  if (result) {

    document.getElementById("name").innerText = result.name;
    document.getElementById("class").innerText = result.class;
    document.getElementById("roll").innerText = result.roll;

    const table = document.getElementById("marksTable");
    table.innerHTML = "";

    let isFail = false;

    result.subjects.forEach(sub => {
      if (sub.mark < 18) isFail = true;

      table.innerHTML += `
        <tr>
          <td>${sub.name}</td>
          <td>${sub.total}</td>
          <td>${sub.mark}</td>
        </tr>
      `;
    });

    document.getElementById("total").innerText = result.total;
    document.getElementById("percentage").innerText = result.percentage + "%";
    document.getElementById("rank").innerText = result.rank;
    document.getElementById("attendance").innerText = result.attendance;

    const statusElement = document.getElementById("status");

    if (isFail) {
      statusElement.innerText = "FAIL";
      statusElement.style.color = "red";
    } else {
      statusElement.innerText = "PASS";
      statusElement.style.color = "green";
    }

    // ✅ SHOW RESULT
    document.getElementById("resultSection").style.display = "block";

  } else {
    alert("Result not found!");
  }
}


// 📥 PDF FUNCTION (CLEAN)
function downloadPDF() {
  const element = document.getElementById("resultBox");
  const btns = document.querySelector(".btns");

  // Hide button
  if (btns) btns.style.display = "none";

  html2pdf().set({
    margin: 5,
    filename: 'Madrasa_Result.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).from(element).save().then(() => {

    // Show again
    if (btns) btns.style.display = "block";

  });
}
