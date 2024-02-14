import style from "./style.module.scss";
import s3 from "@/s3";
import { Image, MaximizeIcon, ShareIcon, majorScale } from "evergreen-ui";

const media = [
  s3("the-boy/origin-2011.jpg"),
  "/the-boy.jpg",
  s3("the-boy/origin-2011.jpg"),
  "/the-boy.jpg",
];

export default function TheBoyGallery() {
  return (
    <div className={style.gallery}>
      {media.map((item) => (
        <div className={style.item} key={item}>
          <Image src={item} alt={item} />
          <ShareIcon size={majorScale(3)} />
        </div>
      ))}
    </div>
  );
}
