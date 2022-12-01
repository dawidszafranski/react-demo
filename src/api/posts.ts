export type Post = { userId: number; id: number; title: string; body: string };

export function getPosts(): Promise<Post[]> {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
    response.json()
  );
}

export function setPost({ title, body, userId }: Partial<Post>): Promise<Post> {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
}
