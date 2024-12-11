import ContactForm from "@/components/ContactForm";
import { contactData } from "@/constants";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-[#faf5ff]">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col py-[80px] items-center">
          <div className="w-full flex flex-col gap-6 justify-center items-center">
            <div className="sm:max-w-[60%] text-center mx-auto mb-[50px]">
              <h1 className="text-[50px] md:text-[60px] lg:text-[70px] leading-[1.1em] font-bold text-[#110d34] mb-[10px] font-generalsans">
                Contact Us
              </h1>
              <p className="text-[#212123] text-[16px] leading-normal normal-case tracking-normal">
                Feel free to contact us with any questions or concerns. You can
                use the form on our website or email us directly. We appreciate
                your interest and look forward to hearing from you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactData.map((item, index) => (
                <div
                  key={index}
                  className="col-span-1 text-center border border-[#6f00eb] rounded-[30px] p-[30px] flex flex-col justify-start items-center gap-2 mb-6"
                >
                  <div className="w-[60px] h-[60px] bg-bg-icon-contactus bg-no-repeat bg-center bg-contain flex justify-center items-center mb-[20px] mx-auto">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      width={30}
                      height={30}
                    />
                  </div>
                  <p className="text-[16px] md:text-[20px] leading-[1.1em] font-bold text-[#110d34] mb-[10px] font-generalsans">
                    {item.title}
                  </p>
                  <p className="text-[#0a1015] text-[16px]  leading-tight font-normal">
                    {item.description}
                  </p>
                  <p
                    className="text-[#0a1015] text-[16px] leading-tight font-normal"
                    dangerouslySetInnerHTML={{ __html: item.contact }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[80%] lg:w-[70%] mx-auto mt-[50px]">
            <h5 className="text-center text-[20px] md:text-[24px] lg:text-[30px] font-bold text-[#110d34] font-generalsans">
              Do you have question?
            </h5>
            <div className="bg-white rounded-[30px] mt-[30px] md:p-[50px] p-[20px] shadow-[0_0_40px_5px_rgba(132,132,132,0.2)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] mt-[50px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.1536967046584!2d77.27931147538559!3d28.660895175649396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb4a5d251bb7%3A0x97c9f156aeee8e0f!2sGali%2018%2C%20Kailash%20Nagar%2C%20Gandhi%20Nagar%2C%20Delhi%2C%20110031!5e0!3m2!1sen!2sin!4v1709754431039!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kailash Nagar Location"
        />
      </div>
    </div>
  );
}
