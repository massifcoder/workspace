import LeftSide from '../../components/mail/leftSide'
import CenterSide from '../../components/mail/centerSide'
import RightSide from '../../components/mail/rightSide'

export default function Mail(){
    return(
        <div className="w-screen bg-[#e3e5e7] p-6 min-h-screen h-fit">
            <div className="rounded-3xl bg-white w-full h-full flex">
                <LeftSide/>
                <CenterSide/>
                <RightSide/>
            </div>
        </div>
    )
}