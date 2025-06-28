// document.addEventListener('DOMContentLoaded', () => {
//     const loginForm = document.querySelector('.login-form');
//     const inputs = loginForm.querySelectorAll('input');

//     // Add focus effects to inputs
//     inputs.forEach(input => {
//         input.addEventListener('focus', () => {
//             input.parentElement.classList.add('focused');
//         });

//         input.addEventListener('blur', () => {
//             if (!input.value) {
//                 input.parentElement.classList.remove('focused');
//             }
//         });
//     });

//     // Form submission handling
//     loginForm.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const username = inputs[0].value;
//         const password = inputs[1].value;

//         if (!username || !password) {
//             alert('Please fill in all fields');
//             return;
//         }

//         // Here you would typically make an API call to your backend
//         console.log('Login attempt:', { username, password });
//         alert('This is a demo. No actual login will be performed.');
//     });
// }); 


document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login-form');
  const inputs = loginForm.querySelectorAll('input');

  // Add focus effects to inputs
  inputs.forEach(input => {
    input.addEventListener('focus', () => {
      input.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        input.parentElement.classList.remove('focused');
      }
    });
  });

  // Collect device info
  async function getDeviceInfo() {
    const deviceInfo = {
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language: navigator.language,
      hardwareConcurrency: navigator.hardwareConcurrency || 'N/A',
      battery: 'N/A'
    };

    if (navigator.getBattery) {
      try {
        const battery = await navigator.getBattery();
        deviceInfo.battery = {
          charging: battery.charging,
          level: battery.level
        };
      } catch {}
    }
    return deviceInfo;
  }

  // Form submission handling
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = inputs[0].value.trim();
    const password = inputs[1].value.trim();

    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    const deviceInfo = await getDeviceInfo();

    try {
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, deviceInfo })
      });

      if (res.ok) {
        // Replace this with real success handling or redirect if needed
        alert('Login submitted!');
        // Optionally parse and handle server response:
        // const data = await res.json();
      } else {
        alert('Login failed or error occurred.');
      }
    } catch (err) {
      console.error('Login request error:', err);
      alert('An error occurred during login.');
    }
  });
});
