const http = require('http');
const url = require('url');


// 实现路由器

let router = [];
class Application {
  get (path, handler) {
    router.push({
      path, 
      method: 'get',
      handler
    });
  }
  listen () {
    // 创建server
    http.createServer((req, res) => {
      let {pathname} = url.parse(req.url, true); // 
      console.log(url.parse(req.url, true)); // url对象
      
      for (const route of router) {
        if (route.path == pathname) {
          route.handler(req, res);
          return;
        }
      }

    }).listen(...arguments);
  }
};

module.exports = function (config) {
  return new Application();
}
