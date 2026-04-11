console.log(students);
function searchResult() {
  const rollNumber = document.getElementById("rollInput").value.trim();
  const result = students.find(student => student.roll == rollNumber);

  if (result) {
    document.getElementById("name").innerText = result.name;
    document.getElementById("class").innerText = result.class;
    document.getElementById("roll").innerText = result.roll;

    const table = document.getElementById("marksTable");
    table.innerHTML = "";

    let isFail = false;

    result.subjects.forEach(sub => {
      if (sub.mark < 18) {
        isFail = true;
      }

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

    const statusElement = document.getElementById("status");

    if (isFail) {
      statusElement.innerText = "FAIL";
      statusElement.style.color = "red";
    } else {
      statusElement.innerText = "PASS";
      statusElement.style.color = "green";
    }

    document.getElementById("resultSection").style.display = "block";

  } else {
    alert("Result not found!");
  }
}


// ✅ PDF FUNCTION (OUTSIDE)
<script>
function downloadPDF() {
  const element = document.getElementById("resultBox");

  html2pdf().set({
    margin: 5,
    filename: 'Madrasa_Result.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }).from(element).save();
}
</script>

  // ✅ Hide button
  button.style.display = "none";

  html2canvas(element).then(canvas => {
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgWidth = 190;
    const imgHeight = canvas.height * imgWidth / canvas.width;

    pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
    pdf.save("result.pdf");

    // 🟢 Show buttons again after PDF download
    btns.style.display = "block";
  });
}
