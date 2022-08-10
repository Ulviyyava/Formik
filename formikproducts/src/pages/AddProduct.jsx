import React from 'react'
import { Formik,Form} from 'formik'


const AddProduct = () => {
  return (
    <div className='bg-danger vh-100'>
            <h1>Sign Up</h1>
            <Formik
      initialValues={{
        name: '',
        price: '',
        url: '',
      }}
      onSubmit={(values) => {
        const product = JSON.parse(localStorage.getItem('products'))
        product.push({...values})
        localStorage.setItem('products',JSON.stringify(product))
      }}
    >
      {({handleSubmit,handleChange}) => (
              <Form className='col-lg-5 mx-auto' onSubmit={handleSubmit}>
              <label htmlFor="firstName">Product Name</label>
              <input className='form-control' name="name" placeholder="Product" onChange={handleChange} />
      
              <label htmlFor="lastName">Last Name</label>
              <input className='form-control' name="price" placeholder="$1000" onChange={handleChange} />
      
              <label htmlFor="email">Image Url</label>
              <input className='form-control' name="url" placeholder="https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/mobile/gallery/2022-ford-f-150-diesel-exterior-61a09bad4e7d2.jpg" type="text" onChange={handleChange}/>
              <button className='btn btn-primary' type="submit">Submit</button>
            </Form>
  )}
    </Formik> 
    </div>
  )
}

export default AddProduct
