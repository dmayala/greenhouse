import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import gm from 'gm';
const imageMagick = gm.subClass({ imageMagick: true });

import jwt from 'jwt-simple';

import productRoutes from './routes/products';
import cartRoutes from './routes/carts';

import React from 'react';
import Router from 'react-router';
import routes from 'routes';
import Flux from 'utils/flux';

const app = express();

app.set('port', process.env.PORT || 3000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// JWT setup
app.set('jwtTokenSecret', process.env.JWT_SECRET);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/img/products/:width/:imageName', (req, res, next) => {
  let { width, imageName } = req.params;
  imageMagick(path.join(__dirname, `../public/img/products/${imageName}`))
    .resize(width)
    .stream('png', (err, stdout) => {
      if (err) return next(err);
      res.setHeader('Expires', new Date(Date.now() + 604800000));
      res.setHeader('Content-Type', 'image/png');
      stdout.pipe(res);
    });
});

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
  
// react router config
app.use((req, res, next) => {
  let router = Router.create({ 
    location: req.url,
    routes: routes
  });
  const flux = new Flux();
  router.run((Handler, state) => {
    if (state.routes.length < 1) {
      return next();  
    }
    flux.render(Handler, flux).then((content) => {
      return res.render('index', { html: content.body });
    }); 
  });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

/**
  * Socket.io stuff.
  */

const server = require('http').createServer(app);
const io = require('socket.io')(server);
let onlineUsers = 0;

io.sockets.on('connection', (socket) => {
  onlineUsers++;

  io.sockets.emit('onlineUsers', { onlineUsers });

  socket.on('disconnect', () => {
    onlineUsers--;
    io.sockets.emit('onlineUsers', { onlineUsers });
  });
});

server.listen(app.get('port'), () => {
  if (process.send) {
    process.send('online');
  } 
  console.log(`Express server listening on port ${app.get('port')}`);
});
