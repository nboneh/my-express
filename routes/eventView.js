var _ = require('lodash')
module.exports = function(app) {
    app.get('/event/view/:id', function(req, res) {

        var account = app.data.accounts[req.params.id -1];
        var img = app.data.notes;
        img = _.filter(img, function(r){
            return (account.username == r.account.username)&&(r.medias.length > 0)
        })

        res.render('accountView.jade', {
            account: account,
            images: img
        })
    })

}