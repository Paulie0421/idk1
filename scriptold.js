document.addEventListener('DOMContentLoaded', function () {
    const bypassButton = document.getElementById('bypassBtn');

    if (bypassButton) {
        bypassButton.addEventListener('click', function () {
            // SET YOUR CODE HERE
            const secretCode = "0000"; 
            
            let userAttempt = prompt("Enter Administrator Bypass Code to unlock:");

            if (userAttempt === null) {
                return; 
            } else if (userAttempt === secretCode) {
                alert("Access Granted. Unlocking site...");
            } else {
                alert("Access Denied: Invalid Code.");
            }
        });
    }
});
