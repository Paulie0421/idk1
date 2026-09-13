document.addEventListener('DOMContentLoaded', function () {
    const bypassButton = document.getElementById('bypassBtn');

    // Check if this specific tab has already unlocked the site during this session
    if (sessionStorage.getItem('siteUnlocked') === 'true') {
        loadOriginalWebsite();
    }

    if (bypassButton) {
        bypassButton.addEventListener('click', function () {
            const secretCode = "04212015"; 
            let userAttempt = prompt("Enter Administrator Bypass Code to unlock:");

            if (userAttempt === null) {
                return; // Pressed cancel
            } else if (userAttempt === secretCode) {
                // Remember that this site is unlocked for this session
                sessionStorage.setItem('siteUnlocked', 'true');
                loadOriginalWebsite();
            } else {
                alert("Access Denied: Invalid Code.");
            }
        });
    }
});

// Replaces the block page with the actual intended website
function loadOriginalWebsite() {
    // Get the actual URL the user was trying to visit
    const originalUrl = window.location.href;
    
    // Completely wipe the block page layout and turn it into a fullscreen view of the site
    document.body.innerHTML = `
        <iframe src="${originalUrl}" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"></iframe>
    `;
}
