export interface BlogConfig {
  title: string;
  lastUpdate: string;
}

interface BlogConfigs {
  [slug: string]: BlogConfig
};

export const blogConfigs: BlogConfigs = {
  test: {
    title: "This is a title",
    lastUpdate: "2024/2/3"
  },
  test2: {
    title: "This is a title",
    lastUpdate: "2024/2/3"
  },
  test3: {
    title: "This is a title",
    lastUpdate: "2024/2/3"
  }
};
