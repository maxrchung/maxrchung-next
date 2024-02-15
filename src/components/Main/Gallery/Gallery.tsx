import style from "./gallery.module.scss";
import { Image, MaximizeIcon, minorScale } from "evergreen-ui";
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
        {galleryConfigs.map(({ previewSrc }, index) => (
          <div
            className={style.item}
            key={previewSrc}
            onClick={() => setIndex(index)}
          >
            <Image src={previewSrc} alt={previewSrc} />
            <MaximizeIcon size={minorScale(5)} />
          </div>
        ))}
      </div>

      <Viewer
        galleryConfigs={galleryConfigs}
        index={index}
        onClose={() => setIndex(-1)}
      />
    </>
  );
}
