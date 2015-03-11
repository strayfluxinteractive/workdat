Router.route('/', function() {
  this.render('landing');
});

Router.route('/dashboard', function() {
  this.render('dashboard');
});

var requireLogin = function() {
  if (! Meteor.user() && !Meteor.loggingIn()) {
   // If user is not logged in render landingpage
   this.render('landing');
  }
  else {
   //if user is logged in render whatever route was requested
   this.next();
  }
};
// Before any routing run the requireLogin function.
// Except in the case of "landingpage".
// Note that you can add more pages in the exceptions if you want. (e.g. About, Faq, contact...)
Router.onBeforeAction(requireLogin, {except: ['landing']});
