import "./guard.js";

const table = document.getElementById("enquiryTable");

const { data } = await supabase
  .from("enquiries")
  .select("*")
  .order("created_at", { ascending: false });

data.forEach(e => {
  table.innerHTML += `
    <tr>
      <td>${e.student_name}</td>
      <td>${e.phone}</td>
      <td>${e.status}</td>
    </tr>
  `;
});
