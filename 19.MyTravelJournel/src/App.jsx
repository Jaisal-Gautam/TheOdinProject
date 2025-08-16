import Header from "./Component/header"
import Entry from "./Component/entry"
import data from "./Component/data"
export default function App() {

  const cards=data.map((dataVal) =>{
    return(
      <Entry key={dataVal.id}
              img={dataVal.img}
              title={dataVal.title}
              country={dataVal.country}
              googleMapsLink={dataVal.googleMapsLink}
              dates={dataVal.dates}
              text={dataVal.text}  />
    )
  })

  return (    
    <>
      <Header />
      {cards}
      
    </>
  )
}


