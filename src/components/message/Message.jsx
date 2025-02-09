import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import { Flash } from './Flash';
import { UseReveal } from '../../hooks/UseReveal';

function Message() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [message, setMessage] = useState({
        new: false,
        content: '',
        type: 'success',
    })

    useEffect(() => {
        let timer
        if (message.new) {
            timer = setTimeout(() => {
                setMessage({
                    ...message, 
                    new: false,
                    content: '',
                    type: 'success',
                })
            }, 5000)
        }

        return () => clearTimeout(timer)

    }, [message.new])

    const form = useRef(null);
    const reveal_1 = useRef(null)
    const reveal_2 = useRef(null)

    UseReveal([reveal_1, form])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_pvywutj', 'template_ds9c7e9', e.target, 'G16tHXJJ1A8opI3nU')
            .then(result => setMessage(prev => ({...prev, new: true, content: "Email enoyé", type: 'success'})))
            .catch(error => setMessage(prev => ({...prev, new: true, content: error.toString(), type: 'danger'})))
            .finally(() => {
                form.current.reset()
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                })
            })
    }

    return (
          <section id='contact' className="contactForm">
               {message.new && <Flash message={message.content} type={message.type}/>} 
               <h2 className='reveal_1' ref={reveal_1}><span>Con</span>tactez-moi</h2>
               <form ref={form} onSubmit={handleSubmit} className="reveal_2 formContainer">
                   <input className='input' type="text" name="name" placeholder='Nom...' value={formData.name} onChange={handleChange}/>
                   <input className='input' type="email" name="email" placeholder='exemple@gmail.com...' value={formData.email} onChange={handleChange}/>
                   <textarea name="message" id="" value={formData.message} onChange={handleChange} placeholder='Message...' cols="30" rows="5"></textarea>
                   <input type="submit" className='submit' value="Envoyer" />
               </form>
          </section>
    )

}
export default Message;
