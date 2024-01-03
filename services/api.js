
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const pharmacyApi = {
    getDutyPharmacy: async (province,district) =>{
       const response = fetch(`${apiUrl}dutyPharmacy?ilce=${district}&il=${province}`,{
            method:"GET",
            headers:{
             "authorization": apiKey,
               
            }
        })
        return (await response).json()
    },
    getDistrictList: async (province) =>{
        const response = await fetch(`${apiUrl}districtList?il=${province}`,{
            headers:{
                "authorization": apiKey,
            }
        });
        return await response.json();
    }
}
export default pharmacyApi;