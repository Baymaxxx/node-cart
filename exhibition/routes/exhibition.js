module.exports = function (app) {
    //详情
    app.get('/exh_detail', function (req, res) {
        var Commodity = global.dbHelper.getModel('commodity');
        var uid = req.query.uid;
        Commodity.findOne({"_id":uid}, function (err, doc) {
            if (err) {
                return res.redirect('/');
            }else {
                res.render('exh_detail',{
                    commodity:doc
                });
            }
        })
    })
}