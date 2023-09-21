import { WaveAudio } from "./WaveAudio.jsx";
import { PauseCircleIcon } from "./PauseCircleIcon.jsx";
import { PreviousIcon } from "./PreviousIcon.jsx";
import { NextIcon } from "./NextIcon.jsx";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { useCallback, useRef } from "react";
import confetti from 'canvas-confetti';
import PropTypes from "prop-types";

export const CardAudio = ({ imgConfig, srcAudio, textHeader }) => {
    const { srcImg, altImg, heightImg } = imgConfig;
    const wavesurferRef = useRef();
    let playFirst = true;
    
    const play = useCallback(() => {
        wavesurferRef.current.playPause();
    }, []);

    const handleConfetti = () => {
        playFirst ? (confetti(), playFirst = false) : 
        confetti({
            origin: {
                x: Math.random(),
                y: Math.random() - 0.2
            }
        });
      };
    

    return (
        <>
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50"
                shadow="sm"
            >
                <CardBody>
                    <div className="flex flex-row gap-x-10">
                        <div className="flex justify-center items-center">
                            <Image
                                removeWrapper
                                isZoomed
                                className="object-cover"
                                alt={altImg}
                                shadow="md"
                                height={heightImg}
                                width={heightImg}
                                src={srcImg}
                            />
                        </div>
                        <div>
                            <p className="px-5 text-center text-2xl tracking-wide antialiased font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-yellow-500">{textHeader}</p>
                            <div className="flex flex-row justify-center items-center gap-x-5">
                                <WaveAudio srcAudio={srcAudio} refWave={wavesurferRef} />
                                <div className="flex flex-row justify-center items-center">
                                    <Button
                                        isIconOnly
                                        className="data-[hover]:bg-foreground/10"
                                        radius="full"
                                        variant="light"
                                    >
                                        <PreviousIcon />
                                    </Button>
                                    <Button
                                        isIconOnly
                                        className="w-auto h-auto data-[hover]:bg-foreground/10"
                                        radius="full"
                                        variant="light"
                                        onClick={play}
                                        onPress={handleConfetti}
                                    >
                                        <PauseCircleIcon size={54} />
                                    </Button>
                                    <Button
                                        isIconOnly
                                        className="data-[hover]:bg-foreground/10"
                                        radius="full"
                                        variant="light"
                                    >
                                        <NextIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
};

CardAudio.propTypes = {
    imgConfig: PropTypes.shape({
        srcImg: PropTypes.string.isRequired,
        altImg: PropTypes.string.isRequired,
        heightImg: PropTypes.number.isRequired,
    }).isRequired,
    srcAudio: PropTypes.string.isRequired,
    textHeader: PropTypes.string,
};
