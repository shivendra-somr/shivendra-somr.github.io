function openInNewWindow(link) {
    window.open(link, '_blank');
}

//Job Title animation start
const jobTitleElement = document.getElementById('job-title');
const cursorElement = document.createElement('span');
cursorElement.classList.add('cursor');
cursorElement.textContent = '|';
jobTitleElement.appendChild(cursorElement);

const jobTitles = [
  'Full Stack Web Developer.',
  'Java Backend Developer.'
];

let currentIndex = 0;

function updateJobTitle() {
  const currentJobTitle = jobTitles[currentIndex];
  const typingDelay = 150; // Delay between typing each character
  const erasingDelay = 100; // Delay before erasing the job title

  let i = 0;
  let isErasing = false;

  function typeNextCharacter() {
    if (isErasing) {
      const updatedJobTitle = currentJobTitle.slice(0, i);
      jobTitleElement.textContent = updatedJobTitle;
      i--;
      if (i === 0) {
        isErasing = false;
        currentIndex = (currentIndex + 1) % jobTitles.length;
        setTimeout(updateJobTitle, 500);
      } else {
        setTimeout(typeNextCharacter, erasingDelay);
      }
    } else {
      const updatedJobTitle = currentJobTitle.slice(0, i) + '|';
      jobTitleElement.textContent = updatedJobTitle;
      i++;
      if (i <= currentJobTitle.length) {
        setTimeout(typeNextCharacter, typingDelay);
      } else {
        isErasing = true;
        cursorElement.style.visibility = 'hidden'; // Hide cursor when erasing
        setTimeout(typeNextCharacter, erasingDelay);
      }
    }
  }

  typeNextCharacter();
}

// Start the job title animation
updateJobTitle();
