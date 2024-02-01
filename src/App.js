import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Submit from './components/Submit';
import { useState } from 'react';
import PasswordContainer from './components/PasswordContainer';

function App() {
  const [firstName, setFirstName] = useState("");
  const [midName, setMidName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [favColor, setFavColor] = useState("");
  const [petName, setPetName] = useState("");
  const [favNumber, setFavNumber] = useState("");
  const [lengthOfPass, setLengthOfPass] = useState(0);
  const [password,setPassword] = useState([]);
  
  return (
    <div className='container main'>
    <div className='form-div'>
    <div className="container">
      <div className='row'>
      <Input name={'First Name'} type={'text'} data={firstName} setData={setFirstName} require={true}></Input>
      <Input name={'Mid Name'} type={'text'} data={midName} setData={setMidName}require={false}></Input>
      <Input name={'Last Name'} type={'text'} data={lastName} setData={setLastName} require={false}></Input>
      <Input name={'DOB'} type={'date'} data={dob} setData={setDob} require={true}></Input>
      <Input name={'Fav Color'} type={'text'} data={favColor} setData={setFavColor} require={true}></Input>
      <Input name={'Pet Name'} type={'text'} data={petName} setData={setPetName} require={true}></Input>
      <Input name={'Fav Number (one digit)'} type={'text'} data={favNumber} setData={setFavNumber} require={false}></Input>
      <Input name={'Length Of Pass'} type={'number'} data={lengthOfPass} setData={setLengthOfPass} require={true}></Input>
      </div>
      
      <Submit data={{
    firstName: firstName,
    midName: midName,
    lastName: lastName,
    dob: dob,
    favColor: favColor,
    petName: petName,
    favNumber: favNumber
      }}
      password={password}
      setPassword={setPassword}
      lengthOfPass={lengthOfPass}
      ></Submit>



      <div className='password-display-container'>
        {password.map((ele)=>(
          
            <PasswordContainer ele={ele}></PasswordContainer>

         
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
