module.exports = function(app) {

     app.get('/issue/list', function(req, res) {

        var perPage = parseInt(req.query.perPage) || 10
        var page = parseInt(req.query.page) || 1

        var issues = app.db.get('issues')

        issues.find({},{},function(err, obj){
            var count = obj.length;
            var pageNumbers = [];
            var j = 1;
            for(var i = 0; i < count; i+=perPage){

                pageNumbers.push(j);
                j++;
            }
            var skipCount = (page -1)* perPage;
             issues.find({
            }, {
                skip: skipCount,
                limit: perPage
            }, function(err, issues) {

            res.render('issueList.jade', {
                issues: issues,
                pageNumbers: pageNumbers
            })
            })
        });
    })
}