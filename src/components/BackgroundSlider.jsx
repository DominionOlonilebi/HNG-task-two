import React from 'react'
import { InputGroup } from 'react-bootstrap'

const BackgroundSlider = () => {
  return (
    <section fluid className='background-section'>
        <div className='container py-5'>
            <div className='row g-5 align-items-center justify-content-center d-flex'>
                <div className='col-12'>
                  <h1 className='mb-3'>Phones</h1>
                  <div className='form d-flex justify-content-center'>
                  <div className="col-md-5">
                    <InputGroup>
                      <input
                        type="text"
                        className="form-control mb-4 bg-transparent"
                        required
                      />
                      <span ><button className='py-2 px-3 mx-2 border-0 background-btn text-white'>Search</button></span>
                    </InputGroup>
                    
                  </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BackgroundSlider