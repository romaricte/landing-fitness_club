import React from 'react'
import './Plans.css'
import {plansData} from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
   <div className="plans-container">
    <div className="programs-header" style={{gap:'2rem'}}>
        <spna className='stroke-text'>READY TO START</spna>
        <spna>YOUR JOURNEY</spna>
        <spna className='stroke-text'>NOW WITH US</spna>
    </div>

    <div className="plans">
{plansData.map((plan,i)=>(
<div className="plan" key={i}>
    {plan.icon}
    <span>{plan.name} </span>
    <span>{plan.price}XAF </span>

    <div className="features">
        {plan.features.map((feature, i)=>(
            <div className="feature">
                <img src={whiteTick} alt="" />
                <span key={i}>{feature}</span>
            </div>
        ))}
    </div>
    <div><span>See more benefits</span></div>
    <button className="btn">join now</button>
</div> ))}
    </div>
   </div>
  )
}

export default Plans