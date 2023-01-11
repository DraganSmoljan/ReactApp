import React from 'react'

function FutureWeathers({ ...props }) {
    let date;
    let weekday = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];
    console.log("props", props)
    return (
        <div className={"weather"}>
            <p>5 days forecast</p>
            <div className='forecast'>
                {props.list.map((item, index) => {
                    if (index % 8 === 0) {
                        date = new Date(item.dt_txt);
                        return (
                            <div key={item.id}>
                                <p>{weekday[date.getDay()]}</p>
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