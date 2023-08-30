import axios from "axios";

export const request = async() => {
    const response = await axios.get('https://dpg.gg/test/calendar.json')
    return response.data
}