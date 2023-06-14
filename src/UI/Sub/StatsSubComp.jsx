import './../../App.css'

export default function StatsSubComp() {
  return (
    <section className="py-20 bg-gray-800">
      <div className='mb-16 max-w-xl mx-auto text-center'>
        <h2 className='font-heading text-4xl md:text-5xl text-yellow-400 font-black tracking-tight'>
          Some numbers...
        </h2>
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4 -mb-8">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <span className="flex items-center justify-center w-24 h-24 mb-8 mx-auto">
              <lord-icon
                src="https://cdn.lordicon.com/soseozvi.json"
                trigger="loop"
                colors="primary:#c7c116,secondary:#916f10"
                style={{ width: '450px', height: '450px' }}>
              </lord-icon>
            </span>
            <h3 className="mb-4 text-2xl font-semibold font-heading text-gray-500">40</h3>
            <p className="text-xl text-gray-200">Members</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <span className="flex items-center justify-center w-24 h-24 mb-8 mx-auto">
              <lord-icon
                src="https://cdn.lordicon.com/kbtmbyzy.json"
                trigger="loop"
                colors="primary:#918d10,secondary:#5c330a"
                style={{ width: '450px', height: '450px' }}>
              </lord-icon>
            </span>
            <h3 className="mb-4 text-2xl font-semibold font-heading text-gray-500">18</h3>
            <p className="text-xl text-gray-200">Events</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <span className="flex items-center justify-center w-24 h-24 mb-8 mx-auto">
              <lord-icon
                src="https://cdn.lordicon.com/hrqwmuhr.json"
                trigger="loop"
                delay="2000"
                colors="primary:#916f10,secondary:#c7c116"
                style={{ width: '450px', height: '450px', transform: 'rotate(180deg) scaleX(-1)' }}>
              </lord-icon>
            </span>
            <h3 className="mb-4 text-2xl font-semibold font-heading text-gray-500">1.2K+</h3>
            <p className="text-xl text-gray-200">Facebook</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <span className="flex items-center justify-center w-24 h-24 mb-8 mx-auto">
              <lord-icon
                src="https://cdn.lordicon.com/smeqxwcv.json"
                trigger="loop"
                colors="primary:#918d10,secondary:#5c460a"
                style={{ width: '450px', height: '450px' }}>
              </lord-icon>
            </span>
            <h3 className="mb-4 text-2xl font-semibold font-heading text-gray-500">4K+</h3>
            <p className="text-xl text-gray-200">Youtube</p>
          </div>
        </div>
      </div>
    </section>
  )
}