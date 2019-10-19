let audioUrl = undefined
let start = false
let stop = false

function record(){

    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
    const audioChunks = [];
    
    if (start){
        mediaRecorder.start();
    }
    
    mediaRecorder.addEventListener("dataavailable", event => {
        audioChunks.push(event.data);
    });
    
    mediaRecorder.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks);
        audioUrl = URL.createObjectURL(audioBlob);
    });
    if (stop){
        mediaRecorder.stop();
    }
})}
