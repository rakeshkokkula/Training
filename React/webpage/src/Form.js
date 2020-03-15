import React from 'react'
import './head.css'

function Form(){
    return(
        <div className='row registration'>
            <div className='col-sm-12 forms'>
            <form name = "myForm" onsubmit = "">
		<label>Full Name: </label>
		<input type="text" name="name" required /><br/>
		<label>Course: </label>
		<select required>
			<option>AWS</option>
			<option>HTML</option>
			<option>CSS</option>
			<option>JavaScript</option>
			<option>React.js</option>
			<option>Node.js</option>
		</select><br/>
		<label>Email ID: </label>
		<input type="email" name="email" required /><br/>
		<input type="checkbox" name="join" /> Join Immediately {" "}
		<input type="checkbox" name="join" /> Join later <br/>
		<input type="checkbox" name="checkbox" /> Subscribe to our News<br/>
		<textarea name="notes" rows="5" cols="30" placeholder="Notes" required></textarea><br/>
		<button type="submit" value="submit" className='btn btn-success bt'>Submit</button>
	</form>
    </div>
    </div>
    )
}
export default Form