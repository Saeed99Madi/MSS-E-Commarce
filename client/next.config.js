const nextTranslate = require('next-translate');

module.exports = {
  ...nextTranslate(),
  env: {
    BASE_UEL: 'http://localhost:8080/api/v1',
  },
};
