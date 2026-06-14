function cekLaptop() {
  const status = document.getElementById("status");

  const kondisi = [
    "🔥 Masih hidup tapi trauma",
    "💀 CPU sedang meditasi terakhir",
    "🌪 Fan bunyi: jet tempur versi murahan",
    "🧠 RAM: 90% dipakai buat menyesal",
    "⚡ Mode survival aktif"
  ];

  status.innerText = kondisi[Math.floor(Math.random() * kondisi.length)];
}

function updateSpec() {
  const cpu = ["Intel i3 Sedih", "i5 Setengah Ikhlas", "Core Kentang"];
  const ram = ["2GB (realistis)", "4GB (tapi 3GB dipakai sistem)", "8GB (halu)"];
  const heat = ["Dingin (bohong)", "Panas dikit", "Mau meledak"];

  document.getElementById("cpu").innerText = cpu[Math.floor(Math.random()*cpu.length)];
  document.getElementById("ram").innerText = ram[Math.floor(Math.random()*ram.length)];
  document.getElementById("heat").innerText = heat[Math.floor(Math.random()*heat.length)];
}

function toggleMode() {
  const mode = document.getElementById("mode");

  if (mode.innerText === "OFF") {
    mode.innerText = "ON - Laptop masuk mode darurat";
    document.body.style.filter = "hue-rotate(200deg)";
  } else {
    mode.innerText = "OFF";
    document.body.style.filter = "none";
  }
}

function addNote() {
  const input = document.getElementById("noteInput");
  const text = input.value;

  if (!text) return;

  const li = document.createElement("li");
  li.innerText = "💬 " + text;

  document.getElementById("notes").appendChild(li);
  input.value = "";
}
