interface Metadata {
  [slug: string]: {
    thumbnail: string;
    title: string;
    description: string;
    lastUpdate: string;
    start: string;
    end: string;
  }
};

const metadata: Metadata = {
  test: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "This is a title",
    description: "skribblio clone",
    lastUpdate: "2024/2/3",
    start: "2020/1/1",
    end: "2023/12/31",
  },
  test2: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "This is a title",
    description: "skribblio clone",
    lastUpdate: "2024/2/3",
    start: "2020/1/1",
    end: "2023/12/31",
  },
  test3: {
    thumbnail: "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "This is a title",
    description: "skribblio clone",
    lastUpdate: "2024/2/3",
    start: "2020/1/1",
    end: "2023/12/31",
  }
};

export default metadata;