import './../../App.css'

export default function StatsSubComp() {
  return (
    <section className="py-20 bg-indigo-200">
      <div className="container px-4 mx-auto">
        <div classNameName='mb-16 max-w-xl mx-auto text-center'>
          <h2 className='font-heading text-4xl md:text-5xl text-gray-900 font-black tracking-tight'>
            Some numbers...
          </h2>
        </div>
        <div className="flex flex-wrap items-center -mx-4 -mb-8">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <span className="flex items-center justify-center w-24 h-24 mb-8 mx-auto">
              <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/soseozvi.json"
                trigger="loop"
                delay="2000"
                colors="primary:#110a5c,secondary:#918d10"
                style={{ width: '450px', height: '450px' }}>
              </lord-icon>        </span>
            <h3 className="mb-4 text-2xl font-semibold font-heading">40</h3>
            <p className="text-xl text-gray-500">Members</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <span className="flex items-center justify-center w-24 h-24 mb-8 mx-auto">
              <lord-icon
                src="https://cdn.lordicon.com/kbtmbyzy.json"
                trigger="loop"
                delay="2000"
                colors="primary:#915110,secondary:#1b1091"
                style={{ width: '450px', height: '450px' }}>
              </lord-icon>        </span>
            <h3 className="mb-4 text-2xl font-semibold font-heading">18</h3>
            <p className="text-xl text-gray-500">Events</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <span className="flex items-center justify-center w-24 h-24 mb-8 mx-auto">
              <lord-icon
                src="https://cdn.lordicon.com/hrqwmuhr.json"
                trigger="loop"
                delay="3000"
                colors="primary:#916f10,secondary:#110a5c"
                style={{ width: '450px', height: '450px' }}>
              </lord-icon>
            </span>
            <h3 className="mb-4 text-2xl font-semibold font-heading">1.2K+</h3>
            <p className="text-xl text-gray-500">Facebook</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 text-center">
            <span className="flex items-center justify-center w-24 h-24 mb-8 mx-auto">
              <lord-icon
                src="https://cdn.lordicon.com/smeqxwcv.json"
                trigger="loop"
                delay="2000"
                colors="primary:#4f1091,secondary:#916f10"
                style={{ width: '450px', height: '450px' }}>
              </lord-icon>
            </span>
            <h3 className="mb-4 text-2xl font-semibold font-heading">4K+</h3>
            <p className="text-xl text-gray-500">Youtube</p>
          </div>
        </div>
      </div>
    </section>
  )
}