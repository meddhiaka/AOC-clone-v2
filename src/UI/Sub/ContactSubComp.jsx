import { useState } from "react";

export default function ContactSubComp() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [okSentData, setOkSentData] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('subject', subject);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch(`https://formspree.io/${import.meta.env.VITE_FORMSPREE_ENDPOINT}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        console.log('infos sent thankies');
        setSubject('');
        setName('');
        setEmail('');
        setMessage('');
        setOkSentData(true);
      } else {
        console.log('infos not sent ...');
      }
    } catch (error) {
      console.log('error');
    }
  }

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
                <p>artofcodeclub@gmail.com</p>
              </div>
              <div className='mb-10 leading-relaxed'>
                <h4 className='text-sm text-gray-400 font-semibold'>Address</h4>
                <p>Faculty of Science of Bizerte</p>
                <p>7021 Jarzouna - Bizerte, Tunisia</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-3'>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <input
                  className='w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:border-gray-900 active:border-gray-900'
                  type='text'
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  placeholder='Subject'
                />
              </div>
              <div className='mb-4'>
                <input
                  className='w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:border-gray-900 active:border-gray-900'
                  type='text'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder='Name'
                />
              </div>
              <div className='mb-4'>
                <input
                  className='w-full p-4 text-xs font-semibold leading-none bg-gray-50 rounded outline-none focus:border-gray-900 active:border-gray-900'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-4'>
                <textarea
                  className='w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-gray-50 rounded outline-none focus:border-gray-900 active:border-gray-900'
                  type='text'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder='Message...'
                ></textarea>
              </div>
              <div className="flex justify-start">
                {okSentData && (
                  <p className="text-sm text-blue-900 font-semibold leading-none">Data is sent thanks :).</p>
                )}
              </div>
              <div className='flex justify-end'>
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
