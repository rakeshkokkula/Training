function validate(form) {
         if (!document.myForm.join[0].checked && !document.myForm.join[1].checked){ 

			//alert("Please select Join Immediately or Join later"); 
			document.getElementById('valid').innerHTML="Please select Join Immediately or Join later";
			return false;
		}
        }
