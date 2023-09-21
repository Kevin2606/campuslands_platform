import { useCallback } from "react";
import { WaveSurfer, WaveForm } from "wavesurfer-react";
import PropTypes from "prop-types";

export const WaveAudio = ({ srcAudio, refWave }) => {
    const handleWSMount = useCallback(
        (waveSurfer) => {
            refWave.current = waveSurfer;

            if (refWave.current) {
                refWave.current.load(srcAudio);

                if (window) {
                    window.surferidze = refWave.current;
                }
            }
        },
        [refWave, srcAudio]
    );

    return (
        <div className="w-full">
            <WaveSurfer onMount={handleWSMount}>
                <WaveForm
                    id="waveform"
                    responsive={true}
                    progressColor="#fca5a5"
                    waveColor="#EFEFEF"
                    cursorColor="transparent"
                    cursorWidth={0}
                    barWidth={5}
                ></WaveForm>
            </WaveSurfer>
        </div>
    );
};

WaveAudio.propTypes = {
    srcAudio: PropTypes.string.isRequired,
    refWave: PropTypes.object.isRequired,
};
