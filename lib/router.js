Router.route('/', function () {
  this.render('charts');
});

Router.route('/new', function(){
    this.render('moreCharts')
})
