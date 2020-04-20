import React from 'react'
import Header from '../Header'




function Authors(props) {
    
    return (
    
    <div className="update">
            <Header />
        <div className='col-sm-12 author'>
                <form name = "myForm" onSubmit={props.onSubmit} className="myForm">
                <h1 className='text'>{props.title}</h1>
                {/* <label>Id</label>
		            <input className="formField" type="number" name="id" defaultValue={props.id} disabled required /><br/> */}
		            <label>Author Name</label>
		            <input className="formField" type="text" name="name" defaultValue={props.name}  onChange={e => props.setName(e.target.value)} placeholder='Enter a Author name' required /><br/>
                    
                    <label>Age</label>
		            <input className="formField" type="number" name="age" defaultValue={props.age} onChange={e => props.setAge(e.target.value)} placeholder="Age" required /><br/>
                   
               
                <button type="submit" className='myButton' >{props.button}</button>
                </form>
           
       </div>
     
    </div>
    )
        }

        export default Authors