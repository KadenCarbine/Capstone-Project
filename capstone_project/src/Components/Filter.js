import React from "react";
import Button from 'react-bootstrap/Button';

const Filter = ({data, setData, fetchData}) => {
    const category = [...new Set(data.map((item) => item.category))]
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
            {category.map((Val, id) => {
              return (
                <Button
                variant='outline-dark ms-2'
                  className="filters"
                  key={id}
                  onClick={() => filterItem(Val)}
                >
                  {Val}
                </Button>
              );
            })}
            <Button
            variant="outline-dark ms-2"
              className="filters"
              onClick={() => fetchData()}
            >
              All
            </Button>
           </div>
        </>
      );
    };

export default Filter