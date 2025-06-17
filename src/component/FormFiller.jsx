import React from "react";
import emailjs from "@emailjs/browser";

const FormFiller = () => {
    const[name, setName] = React.useState("");
    const[email, setEmail] = React.useState("");
    const[message, setMessage] = React.useState("");

    const handleSubmit = (e) => {
         e.preventDefault();
         
        const serviceID = "cvReceiver"
        const templateID = "template_t5cvtuq"
        const publicKey = "_sqpRxs3n_9x3WR0M"

        const TemplateParams = {
            from_name: name,
            from_email: email,
            to_name : "badman joe",
            message: message,
    
        }
        emailjs.send(serviceID, templateID, TemplateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                // Reset form fields after successful submission
                setName("");
                setEmail("");
                setMessage("");
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
            });
    } 

return (
    <div className="form-filler">
        <h1>Form Filler</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea 
                    id="message" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        
        </form>
    </div>
  );
}

export default FormFiller;