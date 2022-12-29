/* eslint-disable promise/prefer-await-to-callbacks */
import multer from 'multer';
import path from 'path';

const storageUpload = (pathImage: string): multer.Multer => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, `../images/${pathImage}`));
    },
    filename: (req, file, cb) => {
      console.log(path.extname(file.originalname));

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });
  const upload = multer({ storage, limits: { fileSize: 1048576 } });
  return upload;
};

export default storageUpload;
