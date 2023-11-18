import './App.css';
import {AudioClip} from "./types.ts";
import Drum from "../components/Drum.tsx";
import React from "react";

const audioClips:AudioClip[] = [
  {
    keyTrigger: 'Q',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
    description: 'Heater 1'
  },
  {
    keyTrigger: 'W',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
    description: 'Heater 2'
  },
  {
    keyTrigger: 'E',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
    description: 'Heater 3'
  },
  {
    keyTrigger: 'A',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
    description: 'Heater 4'
  },
  {
    keyTrigger: 'S',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    description: 'Clap'
  },
  {
    keyTrigger: 'D',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    description: 'Open HH'
  },
  {
    keyTrigger: 'Z',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    description: "Kick n' Hat"
  },
  {
    keyTrigger: 'X',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    description: 'Kick'
  },
  {
    keyTrigger: 'C',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    description: 'Closed HH'
  }
]

function App() {

  const playAudio = (e:React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find(
        (clip) => clip.keyTrigger === e.key.toUpperCase());
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement)
        .play()
        .catch(console.error)

    document.getElementById("drum-" + clip.keyTrigger)?.focus();
    document.getElementById('display')!.innerText = clip.description;
    // setDescValue(clip.description);
  }

  return (
      <div className="container" id="drum-machine" onKeyDown={playAudio}>
        <div className="drum-display">
          <h1>Drum Machine</h1>
          <div className="drum-pads">
            {audioClips.map((clip) => (
                <Drum key={clip.keyTrigger} audioClip={clip}/>
            ))}
          </div></div>
        <div className="drum-controls">
            <div className="control">
                <label htmlFor="power">Power</label>
                <input type="checkbox" name="power" id="power"/>
            </div>
            <div className="description" id="display"></div>
            <div className="control">
                <input type="range" name="volume" id="volume" min="0" max="100" defaultValue="50"/>
            </div>
            <div className="control">
                <label htmlFor="bank">Bank</label>
                <input type="checkbox" name="bank" id="bank"/>
            </div>
        </div>
      </div>
  );
}

export default App
