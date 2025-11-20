import { faGithub, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCopy, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import { Bounce, toast, ToastContainer } from 'react-toastify';


const ContactSection = () => {
    const [data, setData] = useState({ name: "", email: "", message: "" });
    console.log(data);


    const copyClipboard = () => {
        navigator.clipboard.writeText("prithvirajvnair.pvr@gmail.com")
        toast.success("Copied!", {
            position: "bottom-center",
            autoClose: 500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            className: 'toast-success'
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const {name,email,message} = data
        if(name || email|| message){
            emailjs
            .send(
                "service_g2iw1g5",
                "template_0hwmakg",
                {
                    from_name: data.name,
                    email_id: data.email,
                    message: data.message,
                },
                "EC1cWJbf9XCnI2rN5"
            )
            .then((result) => {
                toast.success("Message sent successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                    className: 'toast-success'
                });
            })
            .catch((error) => {
                toast.error("Failed to send message!");
                console.log(error);
            })
        }
        else{
            toast.error("Please Fill The Details")
        }
    };

    return (
        <div id='contact' className='p-0 pt-15 md:p-10 lg:p-20 bg-black text-white'>
            <div>
                <h2 className='text-center text-yellow-200 text-xl'>CONTACT ME</h2>
            </div>
            <div className='lg:grid grid-cols-[1fr_4fr] py-10 lg:py-20 px-5'>
                <div className='bg-white/10 flex justify-center items-center p-5 md:p-20 md:m-5'>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                        <h1 className='text-2xl mb-5'>Get In <span className='text-yellow-200'>Touch</span></h1>
                        <label htmlFor="contact-name">Full Name</label>
                        <input
                            id='contact-name'
                            type="text"
                            placeholder="John Doe"
                            className="p-2 rounded bg-white/10 text-white"
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                        />

                        <label htmlFor="contact-email">Email</label>
                        <input
                            id='contact-email'
                            type="email"
                            placeholder="johndoe@gmail.com"
                            className="p-2 rounded bg-white/10 text-white"
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                        />

                        <label htmlFor="contact-message">Message</label>
                        <textarea
                            id='contact-message'
                            placeholder="Hi! How Are You..?"
                            className="p-2 h-32 rounded bg-white/10 text-white"
                            onChange={(e) => setData({ ...data, message: e.target.value })}
                        ></textarea>

                        <button
                            type="submit"
                            className="p-2 bg-yellow-200/50 text-white rounded hover:bg-yellow-200/60 active:transform active:scale-95 duration-100 cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
                <div className='xl:grid grid-rows-2'>
                    <div className='xl:grid grid-rows-2'>
                        <div className='bg-white/10 mt-5 md:m-5 flex justify-center items-center'>
                            <p className='text-center sm:text-3xl md:text-5xl p-5'>PRITHVIRAJ V NAIR</p>
                        </div>
                        <div className='bg-white/10 md:m-5 flex justify-center items-center p-5'>
                            <p className='text-center md:text-base text-sm'>Let's connect and create something futuristic.
                                Send me a message, I'm always open to interesting ideas.</p>
                        </div>
                    </div>
                    <div className='xl:grid grid-cols-2'>
                        <div className='bg-white/10 flex flex-col justify-center items-center p-5 md:m-5'>
                            <h2 className='px-10 text-center py-5 text-glow font-bold md:text-base text-sm'>Lets Work Together on Your Next Project</h2>
                            <button className='mt-1 py-2 bg-yellow-200/20 px-3 rounded flex justify-center items-center text-sm cursor-pointer active:transform active:scale-96 duration-100' onClick={copyClipboard}><FontAwesomeIcon icon={faCopy} className='me-3' />Email</button>
                        </div>
                        <div className='bg-white/10 md:m-5 flex flex-col justify-center items-center p-5'>
                            <h2 className='md:text-2xl'>Socials</h2>
                            <div className='p-5'>
                                    <a href="https://www.linkedin.com/in/prithvirajvnair" target='_blank' className='text-white text-sm md:text-2xl border p-1 rounded me-2 hover:bg-yellow-200 hover:text-black'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                    <a href="https://github.com/PrithvirajVNair" target='_blank' className='text-white text-sm md:text-2xl border p-1 rounded mx-2 hover:bg-yellow-200 hover:text-black'><FontAwesomeIcon icon={faGithub} /></a>
                                    <a href="https://x.com/PrithvirajVNair" target='_blank' className='text-white text-sm md:text-2xl border p-1 rounded mx-2 hover:bg-yellow-200 hover:text-black'><FontAwesomeIcon icon={faXTwitter} /></a>
                                    {/* <a href="mailto:prithvirajvnair.pvr@gmail.com" className='text-white text-sm md:text-2xl border p-1 rounded mx-2 hover:bg-yellow-200 hover:text-black'><FontAwesomeIcon icon={faEnvelope} /></a> */}
                                  </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </div>
    )
}

export default ContactSection