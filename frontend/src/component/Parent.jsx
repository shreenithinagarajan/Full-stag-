import React from 'react'
import Child from './Child'


const Parent = () => {
  return (
    <div>
      <Child name="shree nithi"
      age={25}
      isActive={true}
      mark={[99,98,97,96,95]}
      address={{
        pincode:654321,
        email:"shreenithi30@gmail.com",
        mobile:9996435903
      }}/>

      <Child name="reva"
      age={25}
      isActive={true}
      mark={[98,95,78,75,76]}
      address={{
        pincode:641668,
        email:"reva2@gmail.com",
        mobile:9876549003
      }}/>
      </div>
  )
}
export default Parent