async function getData(){
    const res = await fetch('http://localhost:3000/api/products',)
if(!res.ok){
    throw new Error('Failed to fetch data')
}
else{
    return res.json()
}
}

export default async function DataFetch()
 {
    const data = await getData()
  return (
    <div>DataFetch
        <ol typeof="circle">
{
    data.data.map((e,i) => (
       <li key={e.id}>{e.title}</li> 

    ))
    
}

</ol>
    </div>
  )
}
