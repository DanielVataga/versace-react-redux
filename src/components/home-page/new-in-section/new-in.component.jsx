import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SHOP_DATA } from '../../../shop-data'
import Card from '../../card/card.component'
import './new-in.styles.scss'


const NewIn = () => {
  let products = SHOP_DATA.filter(product => product.categoryName === 'new-in');
  let navigate = useNavigate()

  const navToProd = (id) => {
    navigate(`${id}`)
  }

  return (
    <div className='NewInWrapper'>
      <div className="NewInTitleWrapper">
        <h2>NEW <span className='italicFont'>in:</span> <br />ROSE — EMBLLISHED</h2>
      </div>

      <div className='CardWrapper'>
        {products.map((product, index) => <Card key={index} product={product} navToProd={navToProd} />)}
      </div>
    </div>
  )
}

export default NewIn