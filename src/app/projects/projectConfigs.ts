export interface ProjectConfig {
  thumbnail: string;
  title: string;
  description: string;
  lastUpdate: string;
  start: string;
  end?: string;
}

interface ProjectConfigs {
  [slug: string]: ProjectConfig;
}

const projectConfigs: ProjectConfigs = {
  test: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "This is a titleThis is a titleThis is a title",
    description:
      "skribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio clone",
    lastUpdate: "2024/2/3",
    start: "2020/1/1",
  },
  test2: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "This is a title",
    description: "skribblio clone",
    lastUpdate: "2024/2/3",
    start: "2020/1/1",
    end: "2023/12/31",
  },
  test3: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "This is a title",
    description: "skribblio clone",
    lastUpdate: "2024/2/3",
    start: "2020/1/1",
    end: "2023/12/31",
  },
};

export default projectConfigs;
