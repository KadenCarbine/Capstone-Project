import React, {useState, useEffect} from "react";
import axios from "axios";
import CardList from "./CardList";

const Filter = () => {
    const baseAPI = 'https://fakestoreapi.com/products'

    const [data, setData] = useState([])
    const cat = [...new Set(data.map((item) => item.category))]
    const fetchData = async () => {
        try {
            const response = await axios.get(baseAPI)
            setData(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const filterItem = (curcat) => {
        const newItem = data.filter((newVal) => {
            console.log(newVal.category)
          return newVal.category === curcat; 
                // comparing category for displaying data
        });
        setData(newItem);
    };

    return (
        <>
          <div className="d-flex justify-content-center">
            {cat.map((Val, id) => {
              return (
                <button
                  className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                  key={id}
                  onClick={() => filterItem(Val)}
                >
                  {Val}
                </button>
              );
            })}
            <button
              className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
              onClick={() => setData(data)}
            >
              All
            </button>
           </div>
        </>
      );
    };

export default Filter