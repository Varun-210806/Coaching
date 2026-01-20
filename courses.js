import "./guard.js";

const container = document.querySelector(".grid");

const { data } = await supabase.from("courses").select("*");

data.forEach(c => {
  container.innerHTML += `
    <div class="card">
      <h3>${c.name}</h3>
      <p>Duration: ${c.duration}</p>
      <p>Fee: ₹${c.fee}</p>
    </div>
  `;
});
