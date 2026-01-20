import "./guard.js";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  await supabase.from("enquiries").insert({
    student_name: e.target[0].value,
    parent_name: e.target[1].value,
    phone: e.target[2].value,
    status: "new"
  });

  window.location.href = "enquiries.html";
});
