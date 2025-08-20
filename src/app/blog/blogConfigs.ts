import { EntryFieldTypes } from "contentful";

interface BlogConfigs {
  [slug: string]: {
    title: string;
    time: string;
    // By default, source will be [slug].mdx file, however I'm testing some integrations with Contentful
    source?: "contentful";
  };
}

// Manual copy of Contentful blogPost
export interface BlogPostSkeleton {
  contentTypeId: "blogPost";
  fields: {
    id: EntryFieldTypes.Text;
    content: EntryFieldTypes.Text;
  };
}

const blogConfigs: BlogConfigs = {
  "5": { title: "Site Is Up(almost)!!!", time: "2016-01-23T00:00:09.328Z" },
  "6": {
    title: "Okay, Site Almost Not Up",
    time: "2016-02-08T14:27:20.699Z",
  },
  "7": {
    title: "Drew a Little Something",
    time: "2016-03-11T19:10:37.151Z",
  },
  "8": { title: "One more post...", time: "2016-03-21T21:33:48.112Z" },
  "9": { title: "Finished", time: "2016-03-23T17:27:53.740Z" },
  "10": { title: "3D 3D 3D 3D", time: "2016-05-11T18:42:20.907Z" },
  "11": { title: ":')", time: "2016-05-15T01:11:18.395Z" },
  "12": { title: "Now Using Puma/Nginx", time: "2016-06-02T05:11:38.538Z" },
  "13": { title: "pretty busy", time: "2016-11-21T10:47:15.603Z" },
  "16": { title: "The F-boy Is Coming", time: "2016-11-30T07:14:27.104Z" },
  "17": { title: "Holy Moly", time: "2017-03-05T00:13:57.659Z" },
  "18": { title: "HTTPS", time: "2020-05-19T04:22:20.721Z" },
  "19": { title: "Bulma Activated", time: "2020-05-23T03:01:38.472Z" },
  "20": { title: "awsome", time: "2021-12-30T17:52:17.144Z" },
  "21": { title: "eBay", time: "2024-01-15T18:35:37.091Z" },
  "22": { title: "unlucky", time: "2024-02-02T21:27:37.042Z" },
  "23": {
    title: "Rebuilding this site Version 3.0 Epic",
    time: "2024-02-03T22:52:19.174Z",
  },
  "24": {
    title: "Back in business",
    time: "2024-05-18T20:00:00.000Z",
    source: "contentful",
  },
  "25": {
    title: "I moved a lot of stuff to Railway",
    time: "19 August 2025",
    source: "contentful",
  },
};

export default blogConfigs;
