import { GalleryConfig } from "@/components/Main/Gallery/Gallery";
import s3 from "@/s3";
import { Link } from "evergreen-ui";

const galleryConfigs: GalleryConfig[] = [
  {
    mediaType: "image",
    previewSrc: s3("the-boy/origin-2011.jpg"),
    src: s3("the-boy/origin-2011.jpg"),
    caption: "The Boy in the Mirror, the original picture that started it all",
  },
  {
    mediaType: "image",
    previewSrc: "/the-boy.jpg",
    src: "/the-boy.jpg",
    caption: "A simple crop of the face, yet so powerful",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/2the-boy-wide2-preview.png"),
    src: s3("the-boy/2the-boy-wide2.jpg"),
    caption: "The wide (and epic) version",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/1the-boy-monitors-preview.jpg"),
    src: s3("the-boy/1the-boy-monitors.jpg"),
    caption:
      "I'm pretty sure it's been 6 years and I haven't changed my background",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/3the-boy-shirt-front-preview.jpg"),
    src: s3("the-boy/3the-boy-shirt-front.jpg"),
    caption:
      "Okay now this is where things start rolling, a very epic shirt. I actually like my hair here too, the color was nice. I think it was the first time I got it dyed.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/4the-boy-shirt-back-preview.jpg"),
    src: s3("the-boy/4the-boy-shirt-back.jpg"),
    caption:
      "The back is actually why I got this shirt. I don't remember where I got this from but they offered this pretty cool looking collage pattern.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/4the-boy-vans-preview.png"),
    src: s3("the-boy/4the-boy-vans.png"),
    caption: "Custom Vans, I mean, why not amirite? SW@G Sw@g sw@g",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/4the-boy-collection-preview.jpg"),
    src: s3("the-boy/4the-boy-collection.jpg"),
    caption:
      "Jumped ahead a little bit but I got some pins and took a family photo. Also, bleached hair.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/5the-boy-fanime-pic-preview.jpg"),
    src: s3("the-boy/5the-boy-fanime-pic.jpg"),
    caption: "I drew this while waiting for something at FanimeCon",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/6the-boy-laptop-preview.jpg"),
    src: s3("the-boy/laptop.jpg"),
    caption:
      "MacBook Pro skin, and a face. My cousin works at Apple so I got a discount on the laptop (10% I think?), thanks cousin. I also have a custom laptop case but don't have a picture of it on hand.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/7the-boy-masks-preview.jpg"),
    src: s3("the-boy/7the-boy-masks.jpg"),
    caption: "This was during Covid so yeah that makes a lot of sense",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/8the-boy-euphonium-preview.jpg"),
    src: s3("the-boy/8the-boy-euphonium.jpg"),
    caption: (
      <>
        This is more of a funny picture than something of physical value. I was
        working on the{" "}
        <Link href="maxrchung.com/projects/dreamsolister">
          DREAM SOLISTER storyboard
        </Link>{" "}
        and swapped out one of the sprites for The Boy.
      </>
    ),
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/puzzle-overview-preview.jpg"),
    src: s3("the-boy/puzzle-overview.jpg"),
    caption:
      "My roommate Aaron suggested creating a puzzle, and you're gonna see quite a bit of this coming up",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/puz1-preview.jpg"),
    src: s3("the-boy/puz1.jpg"),
    caption:
      "This was actually pretty challenging. I mean, not that any of us were pro jigsaw people, but there's very little detail on each piece and a lot of pieces.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/puz2-preview.jpg"),
    src: s3("the-boy/puz2.jpg"),
    caption: "A couple of more progress pictures (2)",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/puz3-preview.jpg"),
    src: s3("the-boy/puz3.jpg"),
    caption: "A couple of more progress pictures (3)",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/puz4-preview.jpg"),
    src: s3("the-boy/puz4.jpg"),
    caption:
      "A couple of more progress pictures (4). By the way, Jiufu my roommate went pretty ham and did like half of this entire thing. Guy's a beast.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/puz5-preview.jpg"),
    src: s3("the-boy/puz5.jpg"),
    caption:
      "Aaron's family owns a frame making business, or something like that, but that's how we got a custom frame for the puzzle",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/puz6-preview.jpg"),
    src: s3("the-boy/puz6.jpg"),
    caption: "The boy looking at The Boy",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/puz7-preview.jpg"),
    src: s3("the-boy/puz7.jpg"),
    caption:
      "On the wall, probably one of my most prized possessions to be honest. I also still have those Adidas slides.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/cards-preview.jpg"),
    src: s3("the-boy/cards-preview.jpg"),
    caption: (
      <>
        Business cards, I think from <Link href="https://moo.com">MOO</Link>
      </>
    ),
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/credit-preview.jpg"),
    src: s3("the-boy/credit.jpg"),
    caption: "Credit card skins, I mean why not",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/microwave-preview.jpg"),
    src: s3("the-boy/microwave.jpg"),
    caption:
      "This is one of my favorites, it's a reflection of the framed puzzle on a microwave door",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/fitbit-preview.jpg"),
    src: s3("the-boy/fitbit.jpg"),
    caption: "Fitbit 727, need I say more? Fulcrum come in.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/phone-preview.jpg"),
    src: s3("the-boy/phone.jpg"),
    caption:
      "I think this was my new OnePlus 9. I chose OnePlus because it had Alexa integration. Boy did I regret doing that.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/phone2-preview.jpg"),
    src: s3("the-boy/phone2.jpg"),
    caption: "Top down",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/case-preview.jpg"),
    src: s3("the-boy/case.jpg"),
    caption:
      "This card holder changed my life. I don't carry a wallet anymore.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/case2-preview.jpg"),
    src: s3("the-boy/case2.jpg"),
    caption:
      "I can only carry like 2 cards though, so just my driver's license and one credit card for me",
  },
  {
    mediaType: "video",
    previewSrc: s3("the-boy/kindlep.jpg"),
    src: s3("the-boy/kindle.mp4"),
    caption:
      "There was an opportunity for me to join a Kindle related team so I bought a Kindle to check it out and ended up not joining the team nor ever using that Kindle ever again. But, maybe I'll actually use it again now that I think about it.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/keycapsp.jpg"),
    src: s3("the-boy/keycaps.jpg"),
    caption:
      "Keycaps, I guess I'm into mechanical keybaord stuff but less and less as the years go by",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/homep.jpg"),
    src: s3("the-boy/home.jpg"),
    caption:
      "Nothing new but I moved and thought this was a pretty funny setup",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/glamp.jpg"),
    src: s3("the-boy/glam.jpg"),
    caption:
      "My coworker GQ put it through a filter and showed this to me, bless her",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/minecraft1p.jpg"),
    src: s3("the-boy/minecraft1.jpg"),
    caption:
      "I did this in survival. Man I spent a lot of time breeding and producing wool for this. This was 64x64.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/minecraft2p.jpg"),
    src: s3("the-boy/minecraft2.jpg"),
    caption: "Big",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/minecraft3p.jpg"),
    src: s3("the-boy/minecraft3.jpg"),
    caption: "Sunset",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/minecraft4p.jpg"),
    src: s3("the-boy/minecraft4.jpg"),
    caption: "Night",
  },
  {
    mediaType: "video",
    previewSrc: s3("the-boy/mini-cardp.jpg"),
    src: s3("the-boy/mini-card.mp4"),
    caption:
      "Mini business cards because I lost my other business cards at AX, rip. Also thanks GQ for the nails.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/fitp.jpg"),
    src: s3("the-boy/fit.jpg"),
    caption: "Fit check for AX",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/pantsp.jpg"),
    src: s3("the-boy/pants.jpg"),
    caption:
      "Finally found some pants. They are probably too big for me though so not sure how I feel about them.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/phonesp.jpg"),
    src: s3("the-boy/phones.jpg"),
    caption:
      "I switched to iPhone 15 Pro Max because my name is Max. But here's my full phone collection. I'm surprised my mega old phone still works.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/whiteboardp.jpg"),
    src: s3("the-boy/whiteboard.jpg"),
    caption:
      "I used this for my LinkedIn profile. I think it's a little cross-eyed but otherwise looks pretty cool.",
  },
  {
    mediaType: "image",
    previewSrc: s3("the-boy/whiteboard2p.jpg"),
    src: s3("the-boy/whiteboard2.jpg"),
    caption: "Spook",
  },
];

export default galleryConfigs;
