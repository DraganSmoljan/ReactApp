function City({ name, weather, icon}) {
  return (
    <div>
         {name}, {weather}
        <div>
            {icon}
        </div> 
    </div>
  )
}

export default City