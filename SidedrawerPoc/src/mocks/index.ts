import {createServer} from 'miragejs';
import {login} from './login';

const runMock = (window: any) => {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = createServer({
    routes() {
      login.call(this);
    },
  });
};

export default runMock;
