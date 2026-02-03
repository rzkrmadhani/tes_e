const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ── middleware ──
app.use(express.json());

// ── HTML page ──
app.get('/', (req, res) => {
  const now = new Date().toLocaleString('id-ID');

  res.send(`<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express API — Tes Deploy</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, sans-serif;
            min-height: 100vh;
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        .card {
            background: rgba(255, 255, 255, 0.12);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 24px;
            padding: 56px 48px;
            max-width: 520px;
            width: 100%;
            text-align: center;
            color: white;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
        }
        .icon {
            font-size: 64px;
            margin-bottom: 24px;
            display: block;
        }
        h1 {
            font-size: 30px;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
        }
        .subtitle {
            font-size: 15px;
            opacity: 0.75;
            margin-bottom: 28px;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            padding: 12px 18px;
            margin-bottom: 10px;
            font-size: 14px;
        }
        .info-row .label { opacity: 0.7; }
        .info-row .value { font-weight: 600; }
        .badge {
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.4);
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            margin-top: 24px;
        }
        .api-box {
            margin-top: 28px;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 12px;
            padding: 16px 20px;
            text-align: left;
            font-size: 13px;
        }
        .api-box .label {
            opacity: 0.6;
            margin-bottom: 8px;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .api-box code {
            display: block;
            background: rgba(255,255,255,0.08);
            padding: 6px 10px;
            border-radius: 6px;
            margin-bottom: 4px;
            font-family: 'Courier New', monospace;
        }
    </style>
</head>
<body>
    <div class="card">
        <span class="icon">🚂</span>
        <h1>Express.js API</h1>
        <p class="subtitle">Deployment Test — NODE_SERVER</p>

        <div class="info-row">
            <span class="label">Tipe Deploy</span>
            <span class="value">NODE_SERVER</span>
        </div>
        <div class="info-row">
            <span class="label">Framework</span>
            <span class="value">Express.js</span>
        </div>
        <div class="info-row">
            <span class="label">Port</span>
            <span class="value">${PORT}</span>
        </div>
        <div class="info-row">
            <span class="label">Process Manager</span>
            <span class="value">PM2</span>
        </div>
        <div class="info-row">
            <span class="label">Request Time</span>
            <span class="value">${now}</span>
        </div>

        <div class="badge">✅ Server Running</div>

        <div class="api-box">
            <div class="label">Available API Endpoints</div>
            <code>GET  /</code>
            <code>GET  /api/info</code>
            <code>GET  /api/time</code>
        </div>
    </div>
</body>
</html>`);
});

// ── API: info ──
app.get('/api/info', (req, res) => {
  res.json({
    app: 'tes-express',
    version: '1.0.0',
    framework: 'Express.js',
    deployType: 'NODE_SERVER',
    port: PORT,
    processManager: 'PM2',
    nodeVersion: process.version,
  });
});

// ── API: time ──
app.get('/api/time', (req, res) => {
  res.json({
    utc: new Date().toISOString(),
    local: new Date().toLocaleString('id-ID'),
    timestamp: Date.now(),
  });
});

// ── start ──
app.listen(PORT, () => {
  console.log(`🚂 Express server running on port ${PORT}`);
});