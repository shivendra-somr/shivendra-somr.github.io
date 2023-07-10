function openInNewWindow(link) {
    window.open(link, '_blank');
}

function downloadResume() {
    var linkResume = document.createElement('a');
    linkResume.href = "https://drive.google.com/uc?export=download&id=1R8r7h2asT6xN01Vpa0_iIQjvFT5w5sTW";
    linkResume.download = 'resume.pdf';
    linkResume.click();
}