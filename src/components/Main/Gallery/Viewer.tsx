import {
  CaretLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  IconButton,
  Image,
  Pane,
  Paragraph,
  majorScale,
} from "evergreen-ui";
import style from "./viewer.module.scss";
import { useEffect, useState } from "react";
import { GalleryConfig } from "./Gallery";
import { MouseEvent } from "react";

interface ViewerProps {
  galleryConfigs: GalleryConfig[];
  index: number;
  setIndex: (index: number) => void;
}

export default function Viewer({
  galleryConfigs,
  index,
  setIndex,
}: ViewerProps) {
  const [state, setState] = useState("");

  // Hide scrollbar when viewer is open, based on some code here:
  // https://github.com/segmentio/evergreen/blob/cce2742921d0ff0a4372503883eee89d00b508c4/src/lib/prevent-body-scroll.js#L10
  // ^ This actually doesn't really work for me so I followed v
  // https://stackoverflow.com/a/56382662
  useEffect(() => {
    if (index !== -1) {
      const previous = document.body.clientWidth;
      document.body.style.overflow = "hidden";
      const updated = document.body.clientWidth;
      const diff = updated - previous;

      // This handles case if we're going between indexes
      if (diff !== 0) {
        document.body.style.paddingRight = diff + "px";
      }

      setState("loading");
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";

      setState("fadeout");
      setTimeout(() => setState(""), 200);
    }
  }, [index]);

  if (!state) {
    return null;
  }

  return (
    <div
      onClick={() => setIndex(-1)}
      className={`${style.viewer} ${
        state === "loaded" || state === "loading" ? style["fade-in"] : ""
      }`}
    >
      {index !== -1 && (
        <>
          {galleryConfigs[index].mediaType === "video" ? (
            <video
              src={galleryConfigs[index].src}
              autoPlay
              loop
              controls
              onLoadedData={() => setState("loaded")}
            />
          ) : (
            <Pane
              display="flex"
              maxHeight="80%"
              width="80%"
              justifyContent="space-between"
              alignItems="center"
            >
              <IconButton
                onClick={(event: MouseEvent<HTMLButtonElement>) => {
                  event.stopPropagation();
                  setIndex(index - 1);
                }}
                icon={<ChevronLeftIcon />}
                size="large"
              />

              <div>
                <Image
                  src={galleryConfigs[index].src}
                  alt={galleryConfigs[index].src}
                  maxHeight="100%"
                  maxWidth="100%"
                  onLoad={() => setState("loaded")}
                />
                <div className={style.textContainer}>
                  <Paragraph
                    color="white"
                    maxWidth="80%"
                    maxHeight="80%"
                    textAlign="center"
                    // This reduces some flickering where text may flicker from middle
                    // screen to bottom while waiting for image to laod
                    visibility={state === "loaded" ? "visible" : "hidden"}
                  >
                    {galleryConfigs[index].caption}
                  </Paragraph>
                </div>
              </div>

              <IconButton
                onClick={(event: MouseEvent<HTMLButtonElement>) => {
                  event.stopPropagation();
                  setIndex(index + 1);
                }}
                icon={ChevronRightIcon}
              />
            </Pane>
          )}
        </>
      )}
    </div>
  );
}
