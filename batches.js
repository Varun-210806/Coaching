import "./guard.js";

const container = document.querySelector(".grid");

const { data } = await supabase.from("batches").select("*");

data.forEach(b => {
  container.innerHTML += `
    <div class="card">
      <h3>${b.name}</h3>
      <p>${b.start_time} - ${b.end_time}</p>
      <p>Max Students: ${b.max_students}</p>
    </div>
  `;
});
