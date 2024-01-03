import { useEffect } from "react";
import pharmacyApi from "../../services/api"




export default function Home() {
    const getDutyPharmacy = async () =>{
      const response = await pharmacyApi.getDistrictList("İstanbul");
    }
    useEffect(()=>{
      getDutyPharmacy();
    },[])
  return (
    <>
    </>
  )
}
