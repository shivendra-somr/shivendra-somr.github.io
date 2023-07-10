function openInNewWindow(link) {
    window.open(link, '_blank');
}

function downloadResume(link) {
    var linkResume = document.createElement('a');
    linkResume.href = link;
    linkResume.download = 'resume.pdf';
    linkResume.click();
}