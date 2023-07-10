function openInNewWindow(link) {
    window.open(link, '_blank');
  }

  function downloadResume(link) {
    var link = document.createElement('a');
    link.href = 'link';
    link.download = 'resume.pdf';
    link.click();
  }