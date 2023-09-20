import React from 'react'
import Nav from './navigation.jsx'
import Body from './body.jsx'
import Houses from './houses.jsx'
import Footer from './footer.jsx'
import Data from './data.jsx'
import './App.css'

function App (){
const HouseData = Data.map(function(house){
  return (<Houses photo = {house.photo}
                  key = {house.id}
                  name = {house.name}
                  location = {house.location}
                  description = {house.description}
                  price = {house.price}
                  rating = {house.stats.rating}
                  ratingCount = {house.stats.ratingCount}
/>
)

})


  return (
    <div>
      <Nav />
    <div className='main-content'>
      <Body />
        <h2 className='remark' >Book and reserve a space today </h2>
        <section className='house-list'>
          {HouseData}
        </section>
    </div>
  <Footer />

    </div>
  )
}
export default App