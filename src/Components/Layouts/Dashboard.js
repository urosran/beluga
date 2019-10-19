import React, { Component} from 'react'
import {Grid, Typography, Button} from "@material-ui/core"
import Wall from '../Wall.js'
import Charts from '../Charts.js'
import { func } from 'prop-types'
import {MicrophoneRecorder} from './VoiceRecorder'

const styles ={
    Paper: {
        padding: 10,
        margin: 10,
        marginRight: 0,
        marginLeft: 0,
        // minHeight: "100%",
        maxHeight: 700,
        overflowY: 'scroll',
    }, 
    Grid: {
        // maxHeight: "100%",
        backgroundColor:"#e9ebee",
        overflow: 'hidden',
        
    }
}
let audioUrl = undefined
let mediaRecorder;
let audioChunks = []

export default class CustomCard extends Component {
    constructor(props) {
        super(props);
        this.record = this.record.bind(this);
        this.startRecording = this.startRecording.bind(this);
        this.stopRecording = this.stopRecording.bind(this);
        this.state={}
        this.speech_to_text=this.speech_to_text.bind(this)
    }


    record = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {

            mediaRecorder = new MediaRecorder(stream);
            console.log(mediaRecorder.state, "top state")
            
            audioChunks = [];
            console.log("im inside")

            // mediaRecorder.addEventListener("dataavailable", event => {
            //     console.log("inside data available")
            //     audioChunks.push(event.data);
            // });
            mediaRecorder.ondataavailable = function(e) {
                console.log("pushing audio")
                audioChunks.push(e.data);
              }
            
            mediaRecorder.addEventListener("stop", () => {
                console.log('inside stop')
                const audioBlob = new Blob(audioChunks);
                audioUrl = URL.createObjectURL(audioBlob);
                console.log(audioUrl)
            console.log(mediaRecorder.state, "stop state")

            });
    })}

    startRecording=()=>{
        console.log("pressed")
        mediaRecorder.start()
        console.log(mediaRecorder.state, "inisde startRec")

    }

    stopRecording = () => {
        mediaRecorder.stop()
        this.speech_to_text().catch(console.error
            
        )
    }

    componentDidMount(){
        this.record()
    }

    async speech_to_text(){
        // Imports the Google Cloud client library
        const speech = require('@google-cloud/speech');

        // Creates a client
        const client = new speech.SpeechClient();

        /**
         * TODO(developer): Uncomment the following lines before running the sample.
         */
        const gcsUri = audioUrl;
        const encoding = 'LINEAR16';
        const sampleRateHertz = 16000;
        const languageCode = 'en-US';

        const config = {
        encoding: encoding,
        sampleRateHertz: sampleRateHertz,
        languageCode: languageCode,
        };

        const audio = {
        uri: gcsUri,
        };

        const request = {
        config: config,
        audio: audio,
        };

        // Detects speech in the audio file. This creates a recognition job that you
        // can wait for now, or get its result later.
        const [operation] = await client.longRunningRecognize(request);
        // Get a Promise representation of the final result of the job
        const [response] = await operation.promise();
        const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
        console.log(`Transcription: ${transcription}`);
    }
    // main().catch(console.error);

    render(){
        return(        
            <Grid container={true} spacing={1} style={styles.Grid}>
                <Grid item  xs={12} sm={7} lg={7} md={7} height={1}>
                    <Button onClick={this.startRecording}>Start</Button>
                    <Button onClick={this.stopRecording}>Stop</Button>
                </Grid>
            </Grid>
    )}
}