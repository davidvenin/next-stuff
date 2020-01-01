import GhostContentAPI from "@tryghost/content-api";

const api = GhostContentAPI({
  url: "https://api.sephi.dev",
  key: "38fa10904d9e94dff40c5a7937",
  version: "v3"
});

export async function getPosts(limit: number | string = "all") {
  return await api.posts
    .browse({
      limit
    })
    .catch(err => {
      console.error(err);
    });
}
