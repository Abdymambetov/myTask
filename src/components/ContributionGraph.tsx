import { useEffect, useState } from "react"
import { request } from "../api"
import Graph from "./Graph/Graph"


const ContributionGraph = () => {
    const [contribution, setContribution] = useState({})
    
    useEffect(() => {
        const getContribution = async() => {
            const response = await request()
            setContribution(response)
        }
        getContribution()
    }, [])
    return(
        <Graph contribution={contribution}/>
    )
}

export default ContributionGraph