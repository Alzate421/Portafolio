import React from 'react'

const Backend = () => {
  return (
    <div className='skills_content'>
        <h3 className='skills_title'>Back end developer</h3>

        <div className='skills_box'>
            <div className='skills_group'>
                <div className='skills_data'>
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills_name'>PHP</h3>
                        <span className='skills_level'>Basic</span>
                    </div>
                </div>

                <div className='skills_data'>
                    <i className='bx bx-badge-check'></i>

                    <div>
                        <h3 className='skills_name'>MySQL</h3>
                        <span className='skills_level'>Basic</span>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Backend
