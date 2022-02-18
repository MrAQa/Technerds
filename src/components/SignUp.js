import React from 'react'

export default function SignUp() {
    const [email, setEmail]=React.useState('')
    const [password, setPassword]=React.useState('')

    const handleSubmit =(e)=>{
     e.preventDefault()
     console.log(email,password)
    }
  return (
    <div>
    <h3>SignUp</h3>
    <form onSubmit={(e)=>handleSubmit(e)}>
    <div className='input-field'>
     
    <input type="email" placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>

    </div>
    <button className='btn blue' type='submit'>LogOut</button>
    </form>
    </div>
  )
}
