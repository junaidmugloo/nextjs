import Image from 'next/image'
import MyImage from '../../../public/images/KTS-Logo.png'
import  '../css/stylex.css'
export default function LearnCss() {
  return (
    <div className="btx text-orange-400">
        LearnCss
        <button className="bs1">CLick karo</button>
    <Image src={MyImage} alt="Picture of the author" width={100} height={100} />
    </div>
  )
}
