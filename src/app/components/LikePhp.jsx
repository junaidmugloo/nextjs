import connetdb from "@/lib/connetDB"
import News from "@/models/News"
const create = async (formData)=>{
'use server'
await connetdb()

    const result= await News.create(
        {title:formData.get('title'),
            content:formData.get('content')
        });
        console.log(result);
        
}

export default async function LikePhp() {
    
    const news = await News.find()
    return (
    <div>LikePhp
        <ol typeof="circle">
{
    news.map((e,i) => (
       <li key={e.id}>{e.title}</li> 

    ))
    
}

</ol>

<form action={
create
} method="post">
    <input type="text"  name="title" />
    <input type="text" name="content" />
    <button type="submit">Add Data</button>
</form>
    </div>
  )
}
