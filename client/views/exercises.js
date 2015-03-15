Template.exercises.helpers({
  'exercise' : function() {
    return Exercises.find();
  }
});

Template.addExercise.events({
  'submit form': function(){
    event.preventDefault();
    var exerciseName = event.target.exerciseName.value;
    var exerciseType = event.target.exerciseType.value;
    $('#addExerciseModal').modal('hide');
    Meteor.call("insertExercise", exerciseName, exerciseType);
    event.target.exerciseName.value = "";
  }
});