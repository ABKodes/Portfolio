const Contact = () => {
  return (
    <div
      id="contact"
      className=" bg-[#39A7FF] text-[#FFFBF5] max-w[1040px] m-auto md:pl-20 p-4 py-16"
    >
      <h1 className="py-4 text-3xl font-bold text-center">Contact Me</h1>
      <form action="" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="font-light text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-light text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="Phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="font-light text-sm py-2"> Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="Email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="font-light text-sm py-2"> Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="Subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="font-light text-sm py-2"> Message</label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-gray-300"
            rows={10}
            type="text"
            name="Subject"
          ></textarea>
        </div>
        <button className="dhover:bg-[#3876BF]hover:font-semibold bg-[#00A9FF] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
