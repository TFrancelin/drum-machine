import {AudioClip} from "../src/types.ts";

interface DrumProps {
    audioClip: AudioClip;
}
const Drum = ({audioClip}:DrumProps) => {
    // const [descValue, setDescValue] = useState<string>("");
    const playSound = (audioClip:AudioClip) => {
        (document.getElementById(audioClip.keyTrigger) as HTMLAudioElement)
            .play()
            .catch(console.error)

        // setDescValue(audioClip.description);
        document.getElementById('display')!.innerHTML = audioClip.description;
    }
    return (
        <button className="drum-pad"
                id={`dum-${audioClip.keyTrigger}`}
                onClick={() => playSound(audioClip)}>
            {audioClip.keyTrigger}
            <audio src={audioClip.url} id={audioClip.keyTrigger} className="clip"></audio>
        </button>
    );
}

export default Drum;