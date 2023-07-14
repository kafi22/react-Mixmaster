import React from 'react';
import Wrapper from '../wrappers/Newsletters';
import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData(); 
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};



// const Newsletter = () => {

//   const navigation = useNavigation()
//   const isNavigation = navigation.state === "submitting" 
//   return (
//     <Wrapper>
//       <h1>NewsLetter</h1>

//       <div>
//         <Form action="" method='POST'>
//           <div className="form-group">
//             <label htmlFor="name">First Name</label>
//             <input type="text" name='firstName'  required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="lastName">Last Name</label>
//             <input type="text" name='lastName'  required />
//           </div>


//            <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input type="text" name="email" id=""  defaultValue='test@test.com'  required />
//           </div>


//           <div className="form-group">
//             <button type='submit' className='submit-btn' disabled={isNavigation}>
              
//               {isNavigation ? "submitting" : "submit"}
//             </button>
//           </div>


//         </Form>
//       </div>
//     </Wrapper>
//   )
// }

// export default Newsletter 



const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>

      <h1>our newsletter</h1>
    <Form className='form' method='POST'>
      
      {/* name */}
      <div className='form-group'>
        <label htmlFor='name' className='form-label'>
          name
        </label>
        <input
          type='text'
          className='form-input'
          name='name'
          id='name'
          required
        />
      </div>
      {/* lastName */}
      <div className='form-group'>
        <label htmlFor='lastName' className='form-label'>
          last name
        </label>
        <input
          type='text'
          className='form-input'
          name='lastName'
          id='lastName'
          required
        />
      </div>
      {/* email */}
      <div className='form-group'>
        <label htmlFor='email' className='form-label'>
          email
        </label>
        <input
          type='text'
          className='form-input'
          name='email'
          id='email'
          defaultValue='test@test.com'
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">
          password
        </label>
          <input type="password" name='password' required  />
      </div>
      
      <button
        type='submit'
        className='submit-btn'
        style={{ marginTop: '0.5rem' }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'submitting' : 'submit'}
      </button>
    </Form>
    </Wrapper>
  );
};
export default Newsletter;
