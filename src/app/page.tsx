import ContactForm from "@/components/ContactForm";
import { CUSTOMER_REVIEW, PAYMET_SOLUTIONS } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="py-8 sm-lg:py-40 pb-[80px]">
        <div className="container">
          <div className="grid grid-rows-2 sm-lg:grid-rows-1 sm-lg:grid-cols-2 gap-[50px] xl:gap-[70px] lg-xl:gap-[100px]">
            <div>
              <p className="text-4xl md:text-7xl font-bold leading-[1.1em]">
                Seamless Online <br /> Payments for India
              </p>
              <p className="py-6 md:py-8 md:text-lg">
                Effortless mobile recharge and bill payments at your fingertips
                with <br /> Vearn Tech.
              </p>
              <div className="flex flex-col items-center justify-center rounded-full px-8 py-1 md:py-2 bg-primary">
                <p className="text-white">★★★★★</p>
                <p className="text-sm text-white uppercase">
                  Rated 4.6 out of 5
                </p>
              </div>
            </div>
            <div className="relative boxCard col-span-1 justify-self-center sm-lg:justify-self-start">
              <div className="absolute w-[474px] h-[295px] sm-lg:w-[370px] sm-lg:h-[230px] xl:w-[474px] xl:h-[295px]">
                <Image
                  src="/images/front-card.png"
                  fill
                  alt="card"
                  className="object-contain h-full transform translate-x-[-102px] translate-y-[59px] rotate-0 sm-lg:translate-x-0 sm-lg:translate-y-[180px] sm-lg:rotate-[44.17deg] xl:translate-y-[130px] xl:rotate-41.17 z-10"
                />
              </div>
              <div
                className="absolute w-[474px] h-[295px] sm-lg:w-[370px] sm-lg:h-[230px] xl:w-[474px] xl:h-[295px] transform z-1 backCard"
              >
                <Image src="/images/back-card.png" fill alt="card" />
              </div>
              <div
                className="w-[56px] h-[56px] bg-white rounded-[5px] hidden sm-lg:flex justify-center items-center absolute top-[0] left-[0] xl:-top-[69px] xl:left-[1px] rotate-[-26.14deg] shadow-[0_0_40px_5px_rgba(132,132,132,0.2)] transform-gpu will-change-transform preserve-3d"
                style={{
                  transform:
                    "translate3d(0px, 4.9397vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                }}
              >
                <Image
                  src="/images/paypal.svg"
                  width={31}
                  height={31}
                  alt="icon"
                />
              </div>
              <div
                className="w-[58px] h-[58px] bg-white rounded-full hidden sm-lg:flex justify-center items-center absolute -top-[150px] left-[22%] xl:top-[-250px] xl:left-[24%] shadow-[0_0_40px_5px_rgba(132,132,132,0.2)] transform-gpu will-change-transform preserve-3d"
                style={{
                  transform:
                    "translate3d(0px, 15.8995vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                }}
              >
                <Image
                  src="/images/mastercard.svg"
                  width={31}
                  height={31}
                  alt="icon"
                />
              </div>
              <div 
                className="w-[70px] h-[70px] bg-white rounded-full hidden sm-lg:flex justify-center items-center absolute top-[0] right-[120px] xl:-top-[15%] xl:right-[50px] shadow-[0_0_40px_5px_rgba(132,132,132,0.2)] transform-gpu will-change-transform preserve-3d"
                style={{
                  transform: "translate3d(0px, 1.3932vh, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                }}
              >
                <Image src="/images/visa.svg" width={39}
                  height={39} alt="icon" />
              </div>
              <div className="w-[75px] h-[75px] bg-white rounded-[5px] hidden xl:flex justify-center items-center absolute bottom-[45px] xl:right-[0] xl:w-[70px] xl:h-[70px] 2xl:right-[-175px] 2xl:w-[75px] 2xl:h-[75px] shadow-[0_2px_40px_7px_rgba(33,33,35,0.2)] transform-gpu will-change-transform preserve-3d rotate-[26.23deg]">
                <Image src="/images/maestro.svg" width={65} height={64} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container py-8 md:py-16 flex justify-center">
          <p className="text-white text-2xl md:text-[32px] font-bold leading-[1.1em] max-w-[666px] text-center">
            We have partnered with top notch finance companies
          </p>
        </div>
      </div>
      <div className="bg-[#f8f8f8]">
        <div className="container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="relative flex justify-center">
              <div className="relative w-[255px] h-[500px] xl:w-[280px] xl:h-[550px] rounded-2xl overflow-hidden">
                <Image src="/images/phone.png" fill alt="icon" />
              </div>
              <div className="absolute -top-[32px] left-[10%] md:left-[20%] 2xl:left-[18%]">
                <div className="hidden md:block relative w-[159px] h-[190px] xl:w-[205px] xl:h-[244px]">
                  <Image
                    src="/images/phone-1.svg"
                    fill
                    alt="icon"
                    className="shadow rounded-[30px]"
                  />
                </div>
              </div>
              <div className="absolute -bottom-[4%] right-[8%] 2xl:right-[15%]">
                <div className="hidden md:block relative w-[255px] h-[207px] xl:w-[280px] xl:h-[228px]">
                  <Image
                    src="/images/phone-2.svg"
                    fill
                    alt="icon"
                    className="shadow rounded-[30px]"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-3xl md:text-5xl font-bold">
                Flexible Payment Solutions
              </p>
              <p className="py-2 md:py-3">
                Vearn Tech offers seamless online payment services for mobile
                recharges and bill payments.
              </p>
              <div className="pt-12 lg:pt-16">
                <div className="">
                  <div className="flex flex-col gap-4 md:gap-7">
                    {PAYMET_SOLUTIONS.map(({ title, description }) => (
                      <div className="flex items-start gap-3" key={title}>
                        <Image
                          src="/images/checked.svg"
                          width={25}
                          height={25}
                          alt="icon"
                        />
                        <div>
                          <p className="text-xl text-text-01 font-semibold">
                            {title}
                          </p>
                          <p className="mt-2">{description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                Vearn Tech simplifies online payments for Indian customers,
                offering seamless solutions for mobile recharges, bill payments,
                and more. Experience convenience and security with every
                transaction.
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
      <div className="bg-[#f8f8f8]">
        <div className="py-8 md:py-16 lg:py-24">
          <div className="container">
            <p className="text-center text-3xl md:text-5xl font-bold">
              What our clients say
            </p>
            <div className="mt-8 md:mt-12 grid md:grid-cols-3 lg:block lg:columns-4 gap-4 lg:gap-12">
              {CUSTOMER_REVIEW.map(({ name, description, icon }) => (
                <div
                  className="lg:mb-12 rounded-[30px] lg:h-fit shadow bg-white p-5 md:py-7 md:px-8"
                  key={name}
                >
                  <div className="flex gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image src={icon} fill alt="star" />
                    </div>
                    <div>
                      <p className="text-lg text-text-01 font-bold pb-1">
                        {name}
                      </p>
                      <Image
                        src="/images/star.svg"
                        width={95}
                        height={15}
                        alt="star"
                      />
                    </div>
                  </div>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
