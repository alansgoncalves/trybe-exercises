const express = require('express');
const multer = require('multer');
const app = express();
const { resolve } = require('path')

app.use(express.static(resolve(__dirname + '/uploads')));

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, 'uploads/'),
  filename: (req, file, callback) => callback(null, file.originalname)
})

const upload = multer({ storage })

app.post('/files/upload', upload.single('file'), (req, res) => {
  return res.status(200).send()
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
