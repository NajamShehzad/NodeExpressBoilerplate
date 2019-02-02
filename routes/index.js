exports = module.exports = function (app, mongoose) {

  require('./users')(app, mongoose);
  require('./home')(app, mongoose);

};
