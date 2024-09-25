import React from 'react';

function Form() {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Adopt Your Dog</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">Name</label>
            <input type="text" id="name" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg">Email Address</label>
            <input type="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-lg">Phone Number</label>
            <input type="tel" id="phone" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea id="message" className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-pink-500 px-4 py-2 rounded text-white">Adopt Your Dog</button>
        </form>
      </div>
    </section>
  );
}

export default Form;
