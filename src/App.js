import {useState, useRef} from 'react'

function App() {
  const [dob, setDob]= useState('')
  const [number, setNumber]= useState('')
  const inputEl = useRef(null)

  function showMessage(msg){
    inputEl.current.innerText= msg
  }

  function checknoisLucky(sum, number){
    if(sum%number===0){
      return true
    }
  }

  function calculateSum(dateOfbirth){
    let sum= 0;
    for(const digit of dateOfbirth){
      sum+= Number(digit)
    }
    return sum
  }

  function clickHandler(){
    if(dob && number){
      const dateOfbirth = dob.replaceAll("-", "")
      const sum= calculateSum(dateOfbirth)
      console.log(sum)
      let isLucky= false
      isLucky= checknoisLucky(sum, number)
      if(isLucky){
        showMessage("Your Date of birth is Lucky")
        inputEl.current.classList.remove('isnotlucky')
        inputEl.current.classList.add('islucky')
      }else{
        showMessage("Your date of birth is not lucky")
        inputEl.current.classList.remove('islucky')
        inputEl.current.classList.add('isnotlucky')
      }
    }
  }



  return (
    <div className="App">

      <header className="con-header">
        <div className="container">
          <h1>Is your birthday Lucky?</h1>
        </div>
      </header>

      <main className="con-main">
        <div className="container con-dateOfBirth">
          <div className="con-dob">
            <label className="input-label ip-dob" for="date-of-birth">Date Of Birth:</label>
            <input type="date" id="date-of-birth" className="input dob" onChange={(e) => setDob(e.target.value)}/>
          </div>
          <div className="con-dob">
            <label className="input-label ip-luckyNo"  for="lucky-number" >Lucky Number:</label>
            <input type="number" id="lucky-number" class="input lucky-no" placeholder="Enter a number" onChange={(e) => setNumber(e.target.value)}/>
          </div>
          <button className="calculate-number" onClick={clickHandler}>Check Number</button>
          <p ref={inputEl} className="output"></p>
        </div> 
      </main>

      <footer>
          <div className="container">
          <h3 class="connect-me">Connect with me</h3>
                    <a href="https://twitter.com/itsmebipul00" class="svg" target="_blank">
                        <img alt="Bipul Sharma | Twitter" width="22px"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" />
                    </a>
                    <a href="https://www.linkedin.com/in/bipul-sharma-69b7751a0/" class="svg" target="_blank">
                        <img alt="Bipul's LinkdeIN" width="22px"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />
                    </a>
                    <a href="https://github.com/itsmebipul00" class="svg" target="_blank">
                        <img alt="Bipul's Github" width="22px"
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg" />
                    </a>
          </div>
      </footer>

    </div>
  );
}

export default App;
