function analyzeGIF() {
    const fileInput = document.getElementById('gifFile');
    const file = fileInput.files[0];
    
    if (!file) {
        alert('Please select a GIF file.');
        return;
    }
    
    const formData = new FormData();
    formData.append('gifFile', file);

    fetch('/analyze', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = `Movement detected: ${data.movement} cm`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
