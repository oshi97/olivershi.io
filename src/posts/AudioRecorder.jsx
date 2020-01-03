import React from 'react'

// https://developers.google.com/web/fundamentals/media/recording-audio
export default class AudioRecorder extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const player = document.getElementById('player');

    const handleSuccess = function(stream) {
      if (window.URL) {
        player.srcObject = stream;
      } else {
        player.src = stream;
      }
    };
  
    navigator.mediaDevices.getUserMedia({ audio: true, video: false }).then(handleSuccess);
  }

  render() {
    return (
      <div>
        <input type="file" accept="audio/*" capture/>
        <audio id="player" controls></audio>
      </div>
    )
  }
}

