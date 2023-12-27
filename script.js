let counter = 0;

function reCount() {
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
