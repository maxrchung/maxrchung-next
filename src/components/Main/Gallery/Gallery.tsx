import style from "./gallery.module.scss";
import { Image, MaximizeIcon, PlayIcon, majorScale } from "evergreen-ui";
import { ReactNode, useState } from "react";
import Viewer from "./Viewer";

export interface GalleryConfig {
  previewSrc: string;
  src: string;
  mediaType: "video" | "image";
  caption: ReactNode;
}

interface GalleryProps {
  galleryConfigs: GalleryConfig[];
}

export default function Gallery({ galleryConfigs }: GalleryProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className={style.gallery}>
        {galleryConfigs.map(({ previewSrc, mediaType }, index) => (
          <div
            className={style.item}
            key={previewSrc}
            onClick={() => setIndex(index)}
          >
            <img src={previewSrc} alt={previewSrc} />

            {mediaType === "video" && (
              <PlayIcon className={style.play} size={majorScale(4)} />
            )}

            <MaximizeIcon className={style.maximize} size={majorScale(3)} />
          </div>
        ))}
      </div>

      <Viewer
        galleryConfigs={galleryConfigs}
        index={index}
        setIndex={setIndex}
      />
    </>
  );
}
