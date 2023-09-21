import React from 'react'

function Pagination(props) {

    let {pageNumProp, onNextProp ,onPrevProp} = props;
  return (
    < div className='flex justify-center my-4'>
    <div  onClick ={onPrevProp} className='border-2 p2 rounded-l-xl border-blue-400'>
            Previous Button
        </div>

        <div onClick= {pageNumProp} className = 'border-2 p2 rounded--xl border-blue-400'>
            {pageNumProp}
        </div>

        <div onClick = {onNextProp} className = 'border-2 p2 rounded-r-xl border-blue-400'>
            Next button
        </div>
      
    </div>
  )
}

export default Pagination
