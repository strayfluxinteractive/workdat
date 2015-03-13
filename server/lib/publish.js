Meteor.publish('exercises', function() {
  return Exercises.find(); 
});