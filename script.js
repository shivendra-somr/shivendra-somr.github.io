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

// Add event listeners to the resume links
resumeLink1.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  window.open('resume.pdf', '_blank');
});

resumeLink2.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  window.open('resume.pdf', '_blank');
});