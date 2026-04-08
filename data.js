const resultData = {
  name: "Muhammed Fawzan",
  class: "8",
  roll: "101",
  subjects: ["Fiqh", "Thareeq", "Duroos", "Lisan"],
  mark: "350",
  percentage: "87.5%",
  rank: "8",
  attendance: "163"
};

document.getElementById("name").innerText = resultData.name;
document.getElementById("class").innerText = resultData.class;
document.getElementById("roll").innerText = resultData.roll;
document.getElementById("subjects").innerText = resultData.subjects.join(", ");
document.getElementById("mark").innerText = resultData.mark;
document.getElementById("percentage").innerText = resultData.percentage;
document.getElementById("rank").innerText = resultData.rank;
document.getElementById("attendance").innerText = resultData.attendance;
