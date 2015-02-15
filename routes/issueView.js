module.exports = function(app) {
    app.get('/issue/view/:id', function(req, res) {
        var issues = app.db.get('issues')
        var ide = parseInt(req.params.id);
        console.log(ide)
        issues.find({id: ide}, {}, 
            function(err, issue){
            	console.log(issue)
             res.render('issueView.jade', {
                    issue: issue[0]
            })
         })
    })

}