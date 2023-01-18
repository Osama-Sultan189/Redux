import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../states/index';
function Shop() {
    const dispatch = useDispatch();
    const {withDrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
        <h1>Deposit/Withdraw Ammount</h1>
      {/* <button className='btn btn-primary' onClick={()=>dispatch(actionCreators.depositMoney(10))}>+</button>
        Update Balance
      <button className='btn btn-primary' onClick={()=>dispatch(actionCreators.withDrawMoney(10))}>-</button> */}
      <button className='btn btn-primary' onClick={()=>depositMoney(10)}>+</button>
        Update Balance
      <button className='btn btn-primary' onClick={()=>withDrawMoney(10)}>-</button>
    </div>
  )
}

export default Shop
