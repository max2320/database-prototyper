import {Router} from 'express';

const routes = [
  {
    url: '/',
    path: '/',
    type: 'get',
    fn: (req, res, next) => {
      res.render('index');
    }
  },{
    url: '/config',
    path: '/',
    type: 'get',
    fn: (req, res, next) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({
        WS_PORT: process.env.WS_PORT,
        APP_DOMAIN: process.env.APP_DOMAIN
      }));
    }
  }
];


export const setupRoutes = (app)=>{
  routes.forEach(({ url, fn, type, path })=>{
    app.use(url, Router()[type](path, fn.bind()));
  });
};
