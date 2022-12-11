/* eslint-disable promise/prefer-await-to-callbacks */
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../images/'));
  },
  filename: (req, file, cb) => {
    console.log(path.extname(file.originalname));

    console.log(file);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

export default upload;
