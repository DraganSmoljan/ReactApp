import React from 'react'

function FutureWeathers({ className, ...props }) {
    let iterative = 0;
    let weekday = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun" ];
   console.log("objekt", props);

    return (
        <div className={className}>
            <p>5 days forecast</p>
            {props.list.map((item, index) => {
             
                if (index % 8 === 0) {
                    let date = new Date(item.dt_txt);
                    console.log("datte", date.getDay());
                    return (
                        <>
                            <p>{ weekday[date.getDay()] }</p>
                             <p>{ (item.main.temp - 273.15).toFixed(2)} <span>&#8451;</span> </p>
                            <p>{ item.weather[0].main }</p> 
                        </>
                    )
                }
            })}

        </div>
    )
}

export default FutureWeathers