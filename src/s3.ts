// Next.js SSG doesn't support rewrite/redirects so we are a bit SOL. I'm
// probably going to leave Content.mdx files as is since there's so many of them
// but otherwise try and use this s3 utility for new paths.

const BASE_URL = "https://d1yx06f4zik90o.cloudfront.net";
const s3 = (url: string) => `${BASE_URL}/${url}`;
export default s3;
