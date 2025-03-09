import FlexiblePayment from "@/components/HomePage/flexiblePayment";
import HeaderBanner from "@/components/HomePage/headerBanner";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Review from "@/components/HomePage/review";

export default function Home() {
  return (
    <div>
      <div className="py-8 lg:py-40 xl:pt-44 lg:pb-[80px]">
        <div className="container">
          <HeaderBanner />
        </div>
      </div>
      <div className="bg-primary">
        <div className="container py-8 md:py-16 flex justify-center">
          <p className="text-white text-2xl md:text-[32px] font-bold leading-[1.1em] max-w-[666px] text-center">
            We have partnered with top notch finance companies
          </p>
        </div>
      </div>
      <FlexiblePayment />
      <div className="container">
        <div className="w-full md:w-[80%] lg:w-[70%] mx-auto py-16 lg:py-24">
          <p className="text-center text-3xl md:text-5xl font-bold">
            Get in Touch
          </p>
          <div className="bg-white rounded-[30px] mt-[30px] md:p-[50px] p-[20px] shadow-[0_0_40px_5px_rgba(132,132,132,0.2)]">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="bg-text-02">
        <div className="container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="flex flex-col gap-2">
              <Image
                src="/images/logo-icon.svg"
                width={60}
                height={60}
                alt="icon"
              />
              <p className="mt-8 text-3xl md:text-5xl font-bold text-white">
                Empowering Your Online Payments
              </p>
              <p className="py-2 md:py-3 text-white">
                Sangjeomecom streamlines online payments for Indian customers,
                providing effortless solutions for mobile recharges, bill payments,
                and more. Enjoy convenience and security with every transaction.
              </p>
            </div>
            <div className="grid md:grid-cols-2 md:justify-center items-center gap-8 md:gap-12">
              <div className="p-8 md:p-12 h-fit bg-white rounded-[30px] shadow">
                <p className="text-3xl md:text-5xl font-bold text-primary text-center">
                  150+
                </p>
                <p className="mt-2 text-center font-medium">Secure Payments</p>
              </div>
              <div className="p-8 md:p-12 h-fit bg-white rounded-[30px] shadow">
                <p className="text-3xl md:text-5xl font-bold text-primary text-center">
                  15
                </p>
                <p className="mt-2 text-center font-medium">
                  Trusted by Millions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Review />
    </div>
  );
}
