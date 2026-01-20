import "./guard.js";

const table = document.querySelector("table");

const { data } = await supabase
  .from("payments")
  .select("amount, students(name)");

data.forEach(p => {
  table.innerHTML += `
    <tr>
      <td>${p.students.name}</td>
      <td>₹${p.amount}</td>
    </tr>
  `;
});
