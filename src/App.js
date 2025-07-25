
import { useState } from 'react';
import './App.css';

function App() {

 const[values,setvalues]= useState ({
  firstname:'',
  lastname:'',
  email:'',
  contact:'',
  gender:'',
  subject:'',
  resume:'',
  enterurl:'',
  about:''
 })
 const handleChanges=(e) =>{
   setvalues({...values,[e.target.name]:[e.target.value]})
 }
 const handleSubmit = (e) =>{
  e.preventDefault()
  console.log(values)
 }
  return (
    <div className='container'>
      <h1>Form In React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>First Name *</label>
        <input  type='text' placeholder='Enter First Name' name='firstname'
        onChange={(e)=> handleChanges(e)} required/>
        <br></br>
        <label htmlFor='lastname'>Last Name</label>
        <input type="text" placeholder='Enter Last Name' name='lastname'
        onChange={(e)=> handleChanges(e)} required/>
        <br></br>
        <label htmlFor='email'>Enter Email</label>
        <input type='email' placeholder='Enter Email' name='email'
        onChange={(e)=> handleChanges(e)} required></input>
        <br></br>
        <label htmlFor='contact'>Enter contact Number</label>
        <input type='text' placeholder='Contact Number' name='contact'
        onChange={(e)=> handleChanges(e)} required></input>
        <br></br>
        <label htmlFor='gender'>Gender*</label>
        <input type='radio' name='gender'
        onChange={(e)=> handleChanges(e)}required></input>Male
        <input type='radio' name='gender'
        onChange={(e)=> handleChanges(e)}required></input>Female
        <input type="radio" name='gender'
        onChange={(e)=> handleChanges(e)}required></input>Other
        <br></br>
        <label htmlFor='subject'> Your best Subject </label>
        <select name='subject' id='subject'onChange={(e)=> handleChanges(e)}>
          <option value="math">Math</option>
          <option value="physics">Physics</option>
          <option value="Chmestry">Chemstry</option>
        </select>
        <br></br>
        <label htmlFor='resume'>Upload Resume</label>
        <input type='file' name='resume' placeholder='Update Resume'onChange={(e)=> handleChanges(e)}></input>
        <br></br>
        <label htmlFor='enterurl'>Enter Url</label>
        <input type="url" name='enterurl' placeholder='Enter Url'onChange={(e)=> handleChanges(e)}></input>
        <br></br>
        <label htmlFor='about'>About</label>
        <textarea name='about' id='name' cols="30" rows="10" placeholder='Enter about your self'onChange={(e)=> handleChanges(e)}></textarea>
        <button type='submit' id='reset'>Reset</button>
        <button type="submit" id="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
