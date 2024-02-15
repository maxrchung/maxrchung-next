import style from "./gallery.module.scss";
import s3 from "@/s3";
import { Image, MaximizeIcon, minorScale } from "evergreen-ui";
import { useState } from "react";
import Viewer from "./Viewer";

const media = [
  s3("the-boy/origin-2011.jpg"),
  "/the-boy.jpg",
  s3("the-boy/1the-boy-monitors-preview.jpg"),
  s3("the-boy/2the-boy-wide2-preview.png"),
  s3("the-boy/3the-boy-shirt-front-preview.jpg"),
  s3("the-boy/4the-boy-shirt-back-preview.jpg"),
  s3("the-boy/4the-boy-vans-preview.png"),
  s3("the-boy/4the-boy-collection-preview.jpg"),
  s3("the-boy/5the-boy-fanime-pic-preview.jpg"),
  s3("the-boy/6the-boy-laptop-preview.jpg"),
  s3("the-boy/7the-boy-masks-preview.jpg"),
  s3("the-boy/8the-boy-euphonium-preview.jpg"),
  s3("the-boy/puz1-preview.jpg"),
  s3("the-boy/puz2-preview.jpg"),
  s3("the-boy/puz3-preview.jpg"),
  s3("the-boy/puz4-preview.jpg"),
  s3("the-boy/puz5-preview.jpg"),
  s3("the-boy/puz6-preview.jpg"),
  s3("the-boy/puz7-preview.jpg"),
  s3("the-boy/cards-preview.jpg"),
  s3("the-boy/credit-preview.jpg"),
  s3("the-boy/microwave-preview.jpg"),
  s3("the-boy/fitbit-preview.jpg"),
  s3("the-boy/phone-preview.jpg"),
  s3("the-boy/phone2-preview.jpg"),
  s3("the-boy/case-preview.jpg"),
  s3("the-boy/case2-preview.jpg"),
];

export default function Gallery() {
  const [src, setSrc] = useState("");

  return (
    <>
      <div className={style.gallery}>
        {media.map((item) => (
          <div className={style.item} key={item} onClick={() => setSrc(item)}>
            <Image src={item} alt={item} />
            <MaximizeIcon size={minorScale(5)} />
          </div>
        ))}
      </div>

      {<Viewer src={src} onClose={() => setSrc("")} />}
    </>
  );
}
