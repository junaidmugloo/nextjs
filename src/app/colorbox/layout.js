// layout 

export default function ColorBoxLayout({children,left,right}){
  const is_on=0;
return(
    <section>
    {children}
    {is_on?left:right}
    </section>
)
}