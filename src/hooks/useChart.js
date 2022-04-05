import { useEffect, useState } from "react"

const useChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(results => setData(results))
    }, []);

    return [data, setData];
}

export default useChart;