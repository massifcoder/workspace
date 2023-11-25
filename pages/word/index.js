import { useEffect, useState } from "react";
import Hl from "../../components/word/files/Hl";
import NavBar from "../../components/word/files/Navbar";
import Template from "../../components/word/files/Template";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();
  const [userName, setUserName] = useState('Loading...')
  const [fname,setFname] = useState('Loading...')
  useEffect(() => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('username');
    const fname = localStorage.getItem('fname');
    console.log(fname);
    setUserName(name);
    setFname(fname);
    if (token === null || name === null || fname === null) {
      router.push('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[setUserName,setFname])
  return (
    <div>
      <NavBar userName={userName} fname={fname}/>
      <Hl />
      <Template />
    </div>
  )
}