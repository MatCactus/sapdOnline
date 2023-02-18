import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

export default function SlideShow() {
    const [[page, direction], setPage] = useState([0, 0]);
    const img = [
        // "https://media.discordapp.net/attachments/1072190746007978015/1076282624588402759/img_2.png?width=1440&height=210",
        // "https://media.discordapp.net/attachments/1072190746007978015/1076282624856830052/img_3.png?width=1440&height=210",
        // "https://media.discordapp.net/attachments/1072190746007978015/1076282625146224700/img_1.png?width=1440&height=210",

        "https://cdn.discordapp.com/attachments/1056960362739675156/1074827265130643616/image.png",
        "https://cdn.discordapp.com/attachments/1056960362739675156/1074821634600472637/image.png",
        "https://cdn.discordapp.com/attachments/1056960362739675156/1074819363376476200/image.png",
        "https://cdn.discordapp.com/attachments/1056960362739675156/1074822282452668568/image.png",
        "https://cdn.discordapp.com/attachments/1056960362739675156/1074827392381624430/image.png"
    ]

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = ((page % img.length) + img.length) % img.length;

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className={"relative w-full h-slide-show overflow-hidden"}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={img[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className={"absolute w-full h-slide-show object-cover"}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <div className="absolute text-white mx-6 z-10 inset-y-32 left-0 cursor-pointer" onClick={() => paginate(-1)}>
                <i className="fa-solid fa-chevron-left hover:scale-125"></i>
            </div>

            <div className="absolute text-white mx-6 z-10 inset-y-32 right-0 cursor-pointer" onClick={() => paginate(1)}>
                <i className="fa-solid fa-chevron-right hover:scale-125"></i>
            </div>
        </div >
    );
}
