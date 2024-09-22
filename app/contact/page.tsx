export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="mb-8">
        We're here to help! If you have any questions, concerns, or feedback,
        please don't hesitate to reach out to us.
      </p>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-3 py-2 border rounded-md"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
