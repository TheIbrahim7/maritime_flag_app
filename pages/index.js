//npm i @popperjs/core
import Link from "next/link";
import {useRouter} from "next/router";
import Interface from "../layouts/interface";
//import Card from "../components/card"
//import ModelScreen from "../components/modal";
import ModalScreen from "../layouts/modal";
import {InformationShowcase} from "../components/notification";
import styles from '../styles/Home.module.css';



export default function Home() {

const router = useRouter();//to push to the quizzer page

  return (
    <Interface>
      <section className="within-main">
        <div className="board wide">
          <p className="lead"> Hello!, Welcome to the maritime flag app. What do you intend to do now? </p>
        </div>

        <div className="workgroup wide flexor">
          <Link href="/tutorial" passHref><button> Nautical Flags Tutor </button></Link>
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Nautical Flags Quizzer
          </button>          

          <Link href="/about/" passHref><button> About the App </button></Link>
          <button type="button" data-bs-toggle="modal" data-bs-target="#sharemodal">
            Send App Invite to Friends
          </button>

        </div>

        <ModalScreen modal_title={"Proceed To Quizzer"}> 
          <InformationShowcase 
            info={"At the moment, the quizzer only with flag names and meanings. In the coming days, it would include flag identifications and more."}
            btnHandler={()=>router.push("/quizzer/")}
          />
        </ModalScreen>

        <ModalScreen modal_id={"sharemodal"} modal_title={"Share App With People"}> 
          <div>
            <span> facebook </span>
            <span> twitter </span>
            <span> whatsapp </span>
            <span> email </span>
            <span> copy link </span>
          </div>
        </ModalScreen>

      </section>
    </Interface>
  )
}
