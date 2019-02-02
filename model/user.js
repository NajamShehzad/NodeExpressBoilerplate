exports = module.exports = function (app, mongoose) {
    'use strict';
    let Schema = mongoose.Schema;

    let UserSchema = new Schema({
        name: {
            type: String,
        },
        email: {
            type: String,
        }
    });
    app.db.model('User', UserSchema);
}