export interface ProjectConfig {
  thumbnail: string;
  title: string;
  description: string;
  time: string;
  start: string;
  end?: string;
}

interface ProjectConfigs {
  [slug: string]: ProjectConfig;
}

export const projectConfigs: ProjectConfigs = {
  test: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "This is a titleThis is a titleThis is a title",
    description:
      "skribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio clone",
    time: "2024/2/3",
    start: "2019/1/1",
  },
  test1111: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "This is a titleThis is a titleThis is a title",
    description:
      "skribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio cloneskribblio clone",
    time: "2024/2/3",
    start: "2020/1/1",
  },
  test2: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "This is a title",
    description: "skribblio clone",
    time: "2024/2/3",
    start: "2020/1/1",
    end: "2000/12/31",
  },
  test3: {
    thumbnail:
      "https://maxrchung-rails.s3.amazonaws.com/uploads/skr-thumbnail.png",
    title: "This is a title",
    description: "skribblio clone",
    time: "2024/2/3",
    start: "2020/1/1",
    end: "2023/12/31",
  },
};

export default projectConfigs;
