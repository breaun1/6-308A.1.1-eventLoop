let counter = 0;

function reCount() {
    //without the conditional the counter will run/stack over 20k times... wow
    if (counter >= 10) {
        console.log("Recursion has reached the maximum value.");
        return;
    }
    counter++;
    console.log("Counter:", counter);
    reCount();
}

// Call the function to start the recursion
reCount();
