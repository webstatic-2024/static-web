import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between lg:flex-row flex-col pt-[100px] xl:pt-[133px] pb-[50px] items-center">
        <div className="mb-[50px] xl:mb-0 lg:mr-[70px] xl:mr-[125px] w-full md:w-[60%] xl:w-[50%]">
          <h1 className="text-[40px] xl:text-[64px] leading-tight font-medium lg:font-bold text-[#0a1015] mb-6">
            Contact Us
          </h1>
          <p className="text-[#0a1015] text-[16px] xl:text-[18px] leading-normal normal-case tracking-normal mb-[50px]">
            Feel free to contact us with any questions or concerns. You can use
            the form on our website or email us directly. We appreciate your
            interest and look forward to hearing from you.
          </p>
          <div className="flex flex-col gap-2 mb-6">
            <p className="text-[#0a1015] text-2xl leading-tight font-semibold">
              Email
            </p>
            <p className="text-[#0a1015] text-[16px] xl:text-[18px] leading-tight font-normal">
              info@example.com
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#0a1015] text-2xl leading-tight font-semibold">
              Address
            </p>
            <p className="text-[#0a1015] text-[16px] xl:text-[18px] leading-normal font-normal">
              9/2478 S/F, OLD NO- 974 975, S/O SH. <br />
              RAJINDER KUMAR JAIN, GALI NO 18, <br />
              KAILASH NAGAR, DELHI, East Delhi, <br />
              Delhi, 110031
            </p>
          </div>
        </div>
        <div className="md:w-[503px] md:h-[469px] w-full h-[313px] relative">
          <Image
            src="/images/contact-image.avif"
            alt="contact"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
