import app from './app';
import environment from './config/environment';

const port = environment.port;

app.listen(port, () => {
  console.log('server running in http://localhost:8080');
});
