import React, {useState, useEffect} from "react";
import axios from "axios";

const ModelDatafetcher = () => {
    const [data, setdata] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:4444/openapi.json');
                setdata(res);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
}

export default ModelDatafetcher;

