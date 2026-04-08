function searchResult() {
  const rollNumber = document.getElementById("rollInput").value.trim();
  const result = students.find(student => student.roll === rollNumber);

  if (result) {
    document.getElementById("name").innerText = result.name;
    document.getElementById("class").innerText = result.class;
    document.getElementById("roll").innerText = result.roll;
    document.getElementById("subjects").innerText = result.subjects.join(", ");
    document.getElementById("mark").innerText = result.mark;
    document.getElementById("percentage").innerText = result.percentage;
    document.getElementById("rank").innerText = result.rank;
    document.getElementById("attendance").innerText = result.attendance;

    document.getElementById("resultSection").style.display = "block";
  } else {
    alert("Roll number കൃത്യമല്ല അല്ലെങ്കിൽ ഫലം ലഭ്യമല്ല!");
    document.getElementById("resultSection").style.display = "none";
  }
}

// PDF Download
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const name = document.getElementById("name").innerText;
  const studentClass = document.getElementById("class").innerText;
  const roll = document.getElementById("roll").innerText;
  const subjects = document.getElementById("subjects").innerText;
  const mark = document.getElementById("mark").innerText;
  const percentage = document.getElementById("percentage").innerText;
  const rank = document.getElementById("rank").innerText;
  const attendance = document.getElementById("attendance").innerText;

  doc.setFontSize(16);
  doc.text("മദ്റസ വാർഷിക ഫലം", 20, 20);
  doc.setFontSize(12);
  doc.text(`പേര്: ${name}`, 20, 40);
  doc.text(`ക്ലാസ്: ${studentClass}`, 20, 50);
  doc.text(`റോൾ നമ്പർ: ${roll}`, 20, 60);
  doc.text(`വിഷയങ്ങൾ: ${subjects}`, 20, 70);
  doc.text(`മാർക്ക്: ${mark}`, 20, 80);
  doc.text(`ശതമാനം: ${percentage}`, 20, 90);
  doc.text(`റാങ്ക്: ${rank}`, 20, 100);
  doc.text(`ആകെ ഹാജർ: ${attendance}`, 20, 110);

  doc.save(`${name}_Result.pdf`);
}
