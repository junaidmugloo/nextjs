import TopNav from "../components/TopNav";

export default function Admin({children}){
return(
    <div>
        <TopNav/>
        {children}
    </div>
)
}