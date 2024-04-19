import { ChevronLeftIcon, ChevronRightIcon } from "evergreen-ui";
import style from "./viewer.module.scss";
import { useEffect, useState } from "react";
import { GalleryConfig } from "./Gallery";
import { MouseEvent } from "react";
import classNames from "classnames";

enum ViewerState {
  Inactive = "Inactive",
  Loading = "Loading",
  Loaded = "Loaded",
}
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
  const [state, setState] = useState(ViewerState.Inactive);

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

      setState(ViewerState.Loading);
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0";

      setState(ViewerState.Inactive);
    }
  }, [index]);

  if (!state) {
    return null;
  }

  return (
    <div
      onClick={() => setIndex(-1)}
      className={classNames(style.viewer, {
        [style.inactive]: state === ViewerState.Inactive,
        [style.load]:
          state === ViewerState.Loading || state === ViewerState.Loaded,
      })}
    >
      <button
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          // This seems pretty sus putting this on every UI element
          event.stopPropagation();

          setIndex(index - 1);
        }}
        className={classNames(style.navButton, {
          [style.load]:
            index > 0 &&
            (state === ViewerState.Loading || state === ViewerState.Loaded),
        })}
      >
        <ChevronLeftIcon />
      </button>

      {index !== -1 && (
        <div className={style.main}>
          {galleryConfigs[index].mediaType === "video" ? (
            <video
              src={galleryConfigs[index].src}
              autoPlay
              loop
              onLoadedData={() => setState(ViewerState.Loaded)}
              onClick={(event) => event.stopPropagation()}
            />
          ) : (
            <img
              src={galleryConfigs[index].src}
              alt={galleryConfigs[index].src}
              onLoad={() => setState(ViewerState.Loaded)}
              onClick={(event) => event.stopPropagation()}
            />
          )}

          <p onClick={(event) => event.stopPropagation()}>
            {galleryConfigs[index].caption}
          </p>
        </div>
      )}

      <button
        onClick={(event: MouseEvent<HTMLButtonElement>) => {
          event.stopPropagation();
          setIndex(index + 1);
        }}
        className={classNames(style.navButton, {
          [style.load]:
            index < galleryConfigs.length - 1 &&
            (state === ViewerState.Loading || state === ViewerState.Loaded),
        })}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
