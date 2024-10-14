export default  async function getAllPost(){
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts`)
    if(!res.ok) throw new Error('There was an error in fetching data')
    
        return res.json()
}