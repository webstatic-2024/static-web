export default function ContactForm() {
  return (
    <div className="mb-[15px]">
      <form
        id="wf-form-Contact-Form"
        name="wf-form-Contact-Form-2"
        data-name="Contact Form"
        method="get"
        aria-label="Contact Form"
      >
        <div className="flex justify-between sm:gap-[50px] sm:flex-nowrap flex-wrap">
          <div className="input-group w-full">
            <label
              className="text-[16px] font-semibold mb-2 block"
              htmlFor="Name"
            >
              Name
            </label>
            <input
              className="w-full h-[41px] text-black bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] py-[10px] text-[16px] transition-all duration-300 ease-in-out"
              maxLength={256}
              name="Name"
              data-name="Name"
              placeholder="Enter your name"
              type="text"
              id="Name"
            />
          </div>
          <div className="input-group w-full">
            <label
              className="text-[16px] font-semibold mb-2 block"
              htmlFor="Email"
            >
              Email
            </label>
            <input
              className="w-full h-[41px] text-black bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] py-[10px] text-[16px] transition-all duration-300 ease-in-out"
              maxLength={256}
              name="Email"
              data-name="Email"
              placeholder="Enter your email"
              type="email"
              id="Email"
              required
            />
          </div>
        </div>
        <div className="flex justify-between sm:gap-[50px] sm:flex-nowrap flex-wrap mb-[10px] sm:mb-0">
          <div className="input-group w-full">
            <label
              className="text-[16px] font-semibold mb-2 block"
              htmlFor="Subject"
            >
              Subject
            </label>
            <input
              className="w-full h-[41px] text-black bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] py-[10px] text-[16px] transition-all duration-300 ease-in-out"
              maxLength={256}
              name="Subject"
              data-name="Subject"
              placeholder="Enter your subject"
              type="text"
              id="Subject"
            />
          </div>
          <div className="input-group w-full">
            <label
              className="text-[16px] font-semibold mb-2 block"
              htmlFor="Phone-No"
            >
              Phone No
            </label>
            <input
              className="w-full h-[41px] text-black bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] py-[10px] text-[16px] transition-all duration-300 ease-in-out"
              maxLength={256}
              name="Phone-No"
              data-name="Phone No"
              placeholder="Enter your phone no"
              type="tel"
              id="Phone-No"
            />
          </div>
        </div>
        <select
          id="field"
          name="field"
          data-name="Field"
          className="w-full h-[45px] bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] text-[16px] leading-[1.42857] text-[#333]"
        >
          <option value="">Select one...</option>
          <option value="First">First choice</option>
          <option value="Second">Second choice</option>
          <option value="Third">Third choice</option>
        </select>
        <div className=" flex w-full items-start flex-col mb-[10px]">
          <label
            htmlFor="Message"
            className="text-[16px] font-semibold mb-2 block"
          >
            Message
          </label>
          <textarea
            id="Message"
            name="Message"
            maxLength={5000}
            data-name="field"
            placeholder=""
            className="w-full h-[100px] text-black bg-[#faf5ff] border border-[#e5e2ff] rounded-[30px] mb-[20px] px-[20px] py-[10px] text-[16px] transition-all duration-300 ease-in-out"
          />
        </div>
        <input
          type="submit"
          data-wait="Please wait..."
          className="text-white text-center bg-[#6f00eb] rounded-[30px] px-[30px] py-[10px] cursor-pointer border-0 inline-block transition-colors duration-300 ease-in-out hover:bg-[#5b00c4]"
          value="Send Message"
        />
      </form>
    </div>
  );
}
