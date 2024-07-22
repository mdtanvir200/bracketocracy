 // server.js
const express = require('express');
const app = express();
const zonerouter = require('./router/zoneroute');
const seasonrouter = require('./router/seasonroute');
const teamrouter = require('./router/teamroute');
const roundrouter = require('./router/roundroute');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public',express.static('public'));

// Routes
app.use('/zoneapi', zonerouter);
app.use('/seasonapi',seasonrouter);
app.use('/teamapi',teamrouter);
app.use('/roundapi',roundrouter);


// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start server
const port =  4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});