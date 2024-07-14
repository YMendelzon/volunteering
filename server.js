const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// const express = require('express');
// const apiRouter = require('./routes/index'); // assuming routes are defined in index.js
// const app = express();
// const port = 3000;
// app.use(express.json());
// app.use('/api', apiRouter);
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
