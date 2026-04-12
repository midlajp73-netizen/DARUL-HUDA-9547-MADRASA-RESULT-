// 🔍 SEARCH FUNCTION
function searchResult() {
  console.log("Search clicked");

  const rollNumber = document.getElementById("rollInput").value.trim();

  if (!rollNumber) {
    alert("Please enter roll number");
    return;
  }

  const result = students.find(s => String(s.roll) === String(rollNumber));

  if (!result) {
    alert("Result not found!");
    return;
  }

  document.getElementById("name").innerText = result.name;
  document.getElementById("class").innerText = result.class;
  document.getElementById("roll").innerText = result.roll;

  const table = document.getElementById("marksTable");
  table.innerHTML = "";

  let failCount = 0; // ✅ count failed subjects

  result.subjects.forEach(sub => {
    if (Number(sub.mark) < 18) failCount++; // pass mark = 18

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

  // ✅ RESULT LOGIC
  if (failCount === 0) {
    statusElement.innerText = "PASS";
    statusElement.style.color = "green";

  } else if (failCount <= 2) {
    statusElement.innerText = "PROMOTED"; // 🔁 instead of Fail
    statusElement.style.color = "orange";

  } else {
    statusElement.innerText = "FAIL";
    statusElement.style.color = "red";
  }

  // SHOW RESULT
  document.getElementById("resultSection").style.display = "block";
  document.getElementById("pdfBtn").style.display = "block";
}
