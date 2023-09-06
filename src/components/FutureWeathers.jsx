import React from 'react'

function FutureWeathers({ ...props }) {
    let day;
    let date;
    let weekday = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    console.log("props", props)
    return (
        <div className={"weather"}>
            <p>5 days forecast</p>
            <div className='forecast'>
                {props.list.map((item, index) => {
                    if (index % 8 === 0) {
                        console.log("date text", item.dt_txt)
                        date = new Date(item.dt_txt);
                        day = date.getDay();
                        return (
                            <div key={item.id}>
                                <p>{weekday[day]}</p>
                                <p>{(item.main.temp - 273.15).toFixed(0)} <span>&#8451;</span> </p>
                                <p>{item.weather[0].main}</p>
                            </div>
                        )
                    }
                })}
            </div>

        </div>
    )
}

export default FutureWeathers