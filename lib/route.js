// Global router settings
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

// Define routes here
Router.route('/', {name :'landing'});
Router.route('/dashboard', {name :'dashboard'});
Router.route('/exercises', {name : 'exercises', waitOn: function() { return Meteor.subscribe('exercises')}})

// Require login protection for user page
var requireLogin = function() {
  if (! Meteor.user()) {
    if(Meteor.loggingIn()) {
      this.render(this.loadingTemplate)
    }
    else {
      // If user is not logged in render landingpage
      this.render('landing');
    }
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
