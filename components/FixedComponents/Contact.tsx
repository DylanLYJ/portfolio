import React from 'react'

export const Contact = () => {
  return (
    <div className='bg-white/3 px-10 py-5'>
        <h2 className='text-xl'>Contact</h2>
        <div className="flex space-x-10 py-3">
            <div>
                <h1 className="text-sm">Email</h1>
                <p className="text-xs py-1.5">limyijie1031@gmail.com</p>
            </div>
            <div>
                <h1 className="text-sm">Phone</h1>
                <p className="text-xs py-1.5">+(60)11-11602149</p>
            </div>
                        <div>
                <h1 className="text-sm">Github</h1>
                <a href="https://github.com/DylanLYJ" className="text-xs link-label">https://github.com/DylanLYJ</a>
            </div>
        </div>
    </div>
  )
}

export default Contact