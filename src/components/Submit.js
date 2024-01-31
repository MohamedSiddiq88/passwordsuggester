import React from 'react'

function Submit({ data, password, setPassword, lengthOfPass }) {
  
  
  let submit = () => {

// make the passwrod array empty before store
// it is not making sense if you compare with empty form
// after one time you clicked on submit button it generate 3 passwords 
// and then you cliked on submit button again it will generate 6 passwords to avoid that we make the array empty 
// becuase we need only 3 passwords for now
      password.length = 0;

// here we caomparing password length what user provide like 6 or 7...
// we need the the user input password length greater than 5
// because most of the password length starts from 6 
// and then we chek some of the value should not be empty like favColor, petName, dob
    if (lengthOfPass > 5 && data.favColor != "" && data.petName != "" && data.dob != "") {
      // in this array we storing 3 string value and these are the fist string of out password
      // firstName and rest of the password favColor
      // favColor and rest of the password favColor
      // petName and rest of the password favColor
      let strArr = [data.firstName, data.favColor, data.petName];

      // in this array we are going to store the three password (fully completed password)
      let newPassArr = [];

      // this for loop goign to itrate (strArr.length)'s time  
      for (let i = 0; i < strArr.length; i++) {

        // we store new password it is not full completed one (step 1)
        // reason for "- 5"  4 char from year and 1 is speacial char (4+1)  
        let newPass = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1, (lengthOfPass) - 5) + '@' + ((data.dob).slice(0, 4));
        
        // if newPass's length is less than user input password length that means the password need more charector to complete
        if (newPass.length < lengthOfPass) {

          // find out the differance between user input password length and new pass length
          // we are going to use this diff in slice method
          let diff = lengthOfPass - newPass.length;

          // this newStr gointo add with the new pass to complete the length (which user provided)
          let newStr = (data.favColor) + (data.petName);

          // we are using differance here 
          // add the newStr with newPass
          newPass += newStr.slice(0, diff)

        }

        // adding the newPass into newPassArr
        newPassArr.push(newPass);
      } //for loop end
      
      // update the state with newPassArr
      // by using this we are going to display on UI
      setPassword( [...newPassArr]);
    } else { // the conditon is not fulfild in the if conditon then password will not generated it will show an alert msg
      alert("Please fill * marked fields and make sure the length is greater than 5")
    }
  }


  return (
    <div>
      <button className='btn btn-primary' type='submit' onClick={() => submit()}>Submit</button>
    </div>
  )
}

export default Submit
