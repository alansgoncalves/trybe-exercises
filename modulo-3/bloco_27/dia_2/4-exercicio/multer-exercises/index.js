require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const multer = require('multer');

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads')
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`)
  }
});

const fs = require('fs')

const fileExists = (fileName) => {
  const path = fs.readdirSync(`${__dirname}/uploads`);
  let result;

  if (fs.existsSync(path)) {
    result = fs.readdirSync(path).some(existingFile => {
      const splittedExistingFileName = existingFile.split('-');
      splittedExistingFileName.shift;

      const existingFileOriginalName = splittedExistingFileName.join('-');
      return existingFileOriginalName === fileName.originalname;
    });
  }
  return !result
}

const fileFilter = (req, file, cb) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = true;
    return cb(null, false);
  }
  if (fileExists(file.originalname)) {
    req.fileDuplicated = true;
    return cb(null, false);
  }
  cb(null, true);
}

const upload = multer({ storage, fileFilter })

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);
app.post('/upload', upload.single('file'), controllers.upload);

app.use(express.static(`${__dirname}/uploads`));

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
