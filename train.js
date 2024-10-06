const schedule = {
    trains: [],

    addTrain: function(trainNumber, arrivalTime, departureTime) {
        this.trains.push({
            trainNumber,
            arrivalTime,
            departureTime
        });
        this.display();
    },
  
    display: function() {
        const scheduleList = document.getElementById('schedule');
        scheduleList.innerHTML = ''; 

        this.trains.forEach(train => {
            const listItem = document.createElement('li');
            listItem.textContent = `Train Number: ${train.trainNumber}, Arrival: ${train.arrivalTime}, Departure: ${train.departureTime}`;
            scheduleList.appendChild(listItem);
        });
    }
};


document.getElementById('trainForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const trainNumber = document.getElementById('trainNumber').value;
    const arrivalTime = document.getElementById('arrivalTime').value;
    const departureTime = document.getElementById('departureTime').value;


    schedule.addTrain(trainNumber, arrivalTime, departureTime);

    
    event.target.reset();
});
