function openInNewWindow(link) {
    window.open(link, '_blank');
}

// function downloadResume(link) {
//     var linkResume = document.createElement('a');
//     linkResume.href = link;
//     linkResume.download = 'resume.pdf';
//     linkResume.click();
// }
// Get the resume links
const resumeLink1 = document.getElementById('resume-link-1');
const resumeLink2 = document.getElementById('resume-link-2');

// Function to handle resume link click
function handleResumeLinkClick(event) {
  event.preventDefault(); // Prevent default link behavior
  window.open(event.target.href, '_blank');
}

// Add event listeners to the resume links
resumeLink1.addEventListener('click', handleResumeLinkClick);
resumeLink2.addEventListener('click', handleResumeLinkClick);