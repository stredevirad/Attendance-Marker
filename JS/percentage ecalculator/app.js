console.log("app");
function calculateAttendance() {
    // Retrieve input values
    const totalClasses = parseInt(document.getElementById('totalClasses').value);
    const attendedClasses = parseInt(document.getElementById('attendedClasses').value);
    const requiredPercentage = parseFloat(document.getElementById('requiredPercentage').value);

    // Validate input
    if (isNaN(totalClasses) || isNaN(attendedClasses) || isNaN(requiredPercentage)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Calculate attendance percentage
    const attendancePercentage = (attendedClasses / totalClasses) * 100;
    
    // Calculate the maximum number of classes they can miss to stay above required attendance
    const requiredClasses = (requiredPercentage / 100) * totalClasses;
    const allowableMissedClasses = Math.floor(totalClasses - requiredClasses - attendedClasses);

    // Display results
    document.getElementById('attendanceResult').innerText = 
        `Your Attendance Percentage: ${attendancePercentage.toFixed(2)}%`;

    if (attendancePercentage >= requiredPercentage) {
        document.getElementById('allowableMissedResult').innerText = 
            `You can miss up to ${allowableMissedClasses} more classes and still meet the requirement.`;
    } else {
        document.getElementById('allowableMissedResult').innerText = 
            `You do NOT meet the required attendance percentage.`;
    }
}