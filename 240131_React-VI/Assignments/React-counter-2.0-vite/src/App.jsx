import { useEffect, useState } from "react";

function App() {
	const [count , setCount] = useState(0);
	const [toPrime , setPrime] = useState(false);

	useEffect(()=>{
		isPrime()
	},[count])
	function isPrime(){
		let countSum = 0;
		for(let i =1; i<= count;i++){
			if(count % i == 0){
				countSum += 1
			}
		}

		if (countSum == 2) {
			setPrime("true")
		}
		else {
			setPrime("false")
		}
	}
	return (
	  <div>
		<div>
		  <button className="minusonebtn" onClick={()=>{setCount(count-1)}}>disabled</button>
		  <button className="plusonebtn" onClick={()=>{setCount(count+1)}}>plus</button>
		<div>
		  <button className="resetbtn" onClick={()=>{setCount(0)}}>reset</button>
		</div>
		</div>
		<span className="counter">{count}</span>
		<div>
		  <span className="odd-or-even">This Number is:{count % 2==0 ? "Even" : "Odd"}</span>
		  <br />
		  <span className="is-prime">Prime Number: {toPrime.toString()}</span>
		</div>
	  </div>
	);
  
  }
  
  export default App;
  