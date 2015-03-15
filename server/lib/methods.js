Meteor.publish('exercises', function() {
  return Exercises.find({ createdBy: Meteor.userId() }); 
});

Meteor.methods({
  'insertExercise' : function() {
    var currentUserId = Meteor.userId();
    Exercises.insert({
      createdBy : currentUserId,
      name : "exerciseName",
      type : "time/set"
    });
  }
});