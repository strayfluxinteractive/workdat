Meteor.publish('exercises', function() {
  return Exercises.find({ createdBy: this.userId }); 
});

Meteor.methods({
  'insertExercise' : function(exerciseName, exerciseType) {
    var currentUserId = Meteor.userId();
    Exercises.insert({
      createdBy : currentUserId,
      name : exerciseName,
      type : exerciseType
    });
  }
});