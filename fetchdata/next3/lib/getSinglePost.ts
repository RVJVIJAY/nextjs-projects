export default async function getSinglePost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{next:{revalidate:60}});
  if (!res.ok) throw new Error("There Was an error in fetching data");
  return res.json();
}
