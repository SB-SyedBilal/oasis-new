import React from 'react'

const CallToAction = () => {
  return (
    <div className='flex  justify-center overflow-hidden pb-4'>
      <div className='flex-col flex gap-16 max-w-[1440px] m-auto'>

        <div id='Top Div' className='text-center text-[#37393F]  h-[86px]'>

          <p>Contact Us</p>

          <br />

          <h1 className='font-bold text-3xl'>Request A Call Back !</h1>

        </div>



        <form action="" className="flex flex-col  items-center sm:w-[1220px] space-y-4">
          <div id="bottom-div" className="flex sm:flex-row flex-col items-center sm:flex-wrap gap-8">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="sm:w-[591px] w-[340px] h-[65px] bg-[#F8F8F8] border-2 border-[#DDDDDD] pl-4  focus:border-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="sm:w-[591px] w-[340px] h-[65px] bg-[#F8F8F8] border-2 border-[#DDDDDD] pl-4 focus:border-blue-500 focus:outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="sm:w-[591px] w-[340px] h-[65px] bg-[#F8F8F8] border-2 border-[#DDDDDD] pl-4 focus:border-blue-500 focus:outline-none"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="sm:w-[591px] w-[340px] h-[65px] bg-[#F8F8F8] border-2 border-[#DDDDDD] pl-4 focus:border-blue-500 focus:outline-none"
            />
            {/* <textarea
      name="message"
      placeholder="Message..."
      className="w-full h-[222px] bg-[#F8F8F8] border-2 border-[#DDDDDD] p-4 resize-none focus:border-blue-500 focus:outline-none"
    ></textarea> */}
          </div>

          <div className='flex justify-center'>
            <button className='bg-[#18A000] w-[184px] h-[65px] text-white font-bold'>Submit</button>
          </div>
        </form>


      </div>
    </div>
  )
}

export default CallToAction
