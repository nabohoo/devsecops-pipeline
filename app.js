const express = require('express');
const _ = require('lodash');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/profile', (req, res) => {
  const defaults = { role: 'guest', theme: 'light' };
  const profile = _.merge({}, defaults, req.body);
  res.json({ profile });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));