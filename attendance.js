import "./guard.js";

const table = document.querySelector("table");

const { data } = await supabase
  .from("attendance")
  .select("date, status, students(name)");

data.forEach(a => {
  table.innerHTML += `
    <tr>
      <td>${a.students.name}</td>
      <td>${a.status}</td>
    </tr>
  `;
});
