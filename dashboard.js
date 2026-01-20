import "./guard.js";
import "./supabase.js";

// STUDENTS
const { data: students } = await supabase.from("students").select("*");
document.getElementById("studentsCount").innerText = students.length;

// ENQUIRIES
const { data: enquiries } = await supabase.from("enquiries").select("*");
document.getElementById("newEnquiries").innerText = enquiries.length;

// RECENT ENQUIRIES TABLE
const table = document.getElementById("recentEnquiries");
enquiries.slice(0, 5).forEach(e => {
  table.innerHTML += `
    <tr>
      <td>${e.student_name}</td>
      <td>${e.course_id ?? "-"}</td>
      <td>${e.status}</td>
    </tr>
  `;
});

// ATTENDANCE
const { data: attendance } = await supabase.from("attendance").select("*");
const present = attendance.filter(a => a.status === "present").length;
const absent = attendance.filter(a => a.status === "absent").length;

document.getElementById("presentCount").innerText = "Present: " + present;
document.getElementById("absentCount").innerText = "Absent: " + absent;

// ATTENDANCE RATE
const rate = attendance.length
  ? Math.round((present / attendance.length) * 100)
  : 0;

document.getElementById("attendanceRate").innerText = rate + "%";

// FEES
const { data: payments } = await supabase.from("payments").select("*");
const totalPaid = payments.reduce((s, p) => s + p.amount, 0);
document.getElementById("pendingFees").innerText = "₹" + totalPaid;
