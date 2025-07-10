

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Backend server is running');
});

app.get('/home', (req, res) => {
  res.send('hi sadiq !');
});
app.use("/contac",()=>{
  console.log("hi");
  
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
