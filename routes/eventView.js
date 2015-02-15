module.exports = function(app) {
    app.get('/event/view/:id', function(req, res) {
        var events = app.db.get('events')
        var ide = req.params.id;
        events.find({id: ide}, {}, 
            function(err, even){
             res.render('eventView.jade', {
                    even: even[0]
            })
         })
    })

}