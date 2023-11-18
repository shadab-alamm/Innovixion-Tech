const timer1 = new CountdownTimer({
    selector: "#clock1",
    targetDate: new Date("November, 21 2023 18:00:00"),
});

timer1.startTimer(); 

// setup timer with date set in the future
const timer2 = new CountdownTimer({
    selector: "#clock2",
    targetDate: new Date("November, 21 2024 18:00:00"),
    backgroundColor: "rgba(0,0,0,.15)",
    foregroundColor: "rgba(0,0,0,.50)",
});

timer2.startTimer();