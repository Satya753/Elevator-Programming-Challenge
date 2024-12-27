{
    init: function(elevators, floors) {
        var elevator = elevators[0];
       // Let's use the first elevator

        // Whenever the elevator is idle (has no more queued destinations) ...
        for (let i= 0 ; i < elevators.length ;i++){
            var elevator = elevators[i];
            elevator.on("idle", function() {
                // let's go to all the floors (or did we forget one?)
                elevator.goToFloor(0);
                elevator.goToFloor(1);
                elevator.goToFloor(2);
            });
        }

    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}
