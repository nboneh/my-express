module.exports = function(app) {

    app.get('/event/list', function(req, res) {

    	var perPage = parseInt(req.query.perPage) || 10
        var page = parseInt(req.query.page) || 1

        var events = app.db.get('events')

      	events.find({},{},function(err, obj){
      		var count = obj.length;
      		var pageNumbers = [];
      		var j = 1;
      		for(var i = 0; i < count; i+=perPage){

      			pageNumbers.push(j);
      			j++;
      		}
      		var skipCount = (page -1)* perPage;
			 events.find({
			}, {
				skip: skipCount,
				limit: perPage
			}, function(err, events) {

			res.render('eventList.jade', {
            	events: events,
            	pageNumbers: pageNumbers
            })
			})
      	});
	})

}