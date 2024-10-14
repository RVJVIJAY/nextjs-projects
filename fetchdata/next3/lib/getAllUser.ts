
export default async function getAllUser() {
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
   if(!res.ok) throw new Error("there was an error into fetching data");
  return res.json();
}
