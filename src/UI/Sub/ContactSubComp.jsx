export default function ContactSubComp() {
  return (
    <section className='py-20'>
      <div className='container px-4 mx-auto'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-full lg:w-1/2 px-3'>
            <div className='max-w-sm'>
              <h2 className='mt-2 text-4xl font-bold font-heading text-yellow-500'>
                We will be glad to hear from you!
              </h2>
            </div>
            <div className='mt-10 lg:mt-24'>
              <div className='mb-10 leading-relaxed'>
                <h4 className='text-sm text-gray-400 font-semibold'>E-mail</h4>
                <p>artofcode@email??</p>
              </div>
              <div className='mb-10 leading-relaxed'>
                <h4 className='text-sm text-gray-400 font-semibold'>Address</h4>
                <p>Faculty of Science of Bizerte</p>
                <p>7021 Jarzouna - Bizerte, Tunisia</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-3'>
            <form>
              <div className='mb-4'>
                <input
                  className='w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:border-gray-900 active:border-gray-900'
                  type='text'
                  placeholder='Subject'
                />
              </div>
              <div className='mb-4'>
                <input
                  className='w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:border-gray-900 active:border-gray-900'
                  type='text'
                  placeholder='Name'
                />
              </div>
              <div className='mb-4'>
                <input
                  className='w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:border-gray-900 active:border-gray-900'
                  type='email'
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-4'>
                <textarea
                  className='w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-gray-50 rounded outline-none focus:border-gray-900 active:border-gray-900'
                  type='text'
                  placeholder='Message...'
                ></textarea>
              </div>

              <div className='flex justify-between items-center'>
                <label>
                  <input
                    className='mr-2 text-yellow-600'
                    type='checkbox'
                    name='terms'
                    value='1'
                  />
                  <span className='text-sm font-semibold'>
                    I agree to terms and conditions.
                  </span>
                </label>
                <button
                  className='py-4 px-8 text-sm text-white font-semibold leading-none bg-gray-800 hover:bg-gray-900 rounded'
                  type='submit'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
