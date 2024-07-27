import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className='w-full h-screen bg-midnight flex justify-center items-center p-4'>
            <form action="#" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>//Submit the form below or shoot me an email - yourname@domain.com</p>
                </div>
                <input type="text" placeholder='Name' name='name' className='bg-fog p-2' />
                <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-fog' />
                <textarea name="message" rows={8} className='bg-fog p-2' placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send email</button>
            </form>
        </div>
    )
}

export default Contact