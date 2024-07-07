import React from "react";
import { FaBarsProgress, FaCartShopping } from "react-icons/fa6";
import Collection from "../data/db.js";


const Gadget = () => {

  return (
    <div className="gadget-div">
      <div className="container pt-5 pb-4">
        <div className="text-center">
          <div className="row g-4">
            <div className="col-md-4 text-start">
              <h5 className=" text">Let's Cater for Your Gadget</h5>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <FaCartShopping />
              <FaBarsProgress className="mx-3" />
            </div>
            <div className="col-md-12">
              <h4 className="mb-5"> Our Collections</h4>
            </div>
          </div>
        </div>

        {/* product mapping */}
        <div>
        <div className="tab-pane fade show p-0 active">
          <div className="row g-4">
            <div className="col-md-12 prod-container">
              <div className="row g-4 d-flex justify-content-center my-prod">
                {Collection.map(phone => 
                  <div className="col-md-6 col-12 box" key={phone.id}>
                    <div className="card pb-3 mb-3">
                    <div className="product-img img-fluid">
                      <img
                        src={phone.Img}
                        alt="product image"
                        className="img-fluid w-100 rounded-sm"
                      />
                    </div>
                    <div className='detail '>
                        <div className="detailed ">
                  <h6 className="text-center name pt-3 mb-3 fw-bold">{phone.Name} </h6>
                  <div className="text-center des mb-3">{phone.Description} </div>
                  <div className='details px-4'>
                  <h6 className="">${phone.Price} </h6>
                  <div className="d-flex justify-content-end icon mb-3"> {phone.Title} </div> 
                  </div>
                  </div>
                  <div className="d-flex justify-content-end px-4">
                  <button onClick={() => handleAddToCart(phone)} className=' detail-btn py-2 px-3 border-0 text-white'>View Phones</button>
                  </div>
              </div>
                    </div>
                  </div>
                  
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
