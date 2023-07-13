import React from 'react'

const Newsletter = () => {
  return (
    <div>
      <h1>We want your Contact Information</h1>

      <div>
        <form action="">
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="">email</label>
            <input type="email" />
          </div>

          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>

           <div className="form-group">
            <label htmlFor="">Message here</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <div className="form-group">
            <button>Submit</button>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Newsletter