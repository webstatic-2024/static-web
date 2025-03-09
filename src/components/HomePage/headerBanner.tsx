import Image from "next/image";

export default function HeaderBanner() {
  return (
    <div className="grid grid-rows-[1fr,0.6fr] mg:grid-rows-[1fr,0.75fr] sm-lg:grid-rows-1 sm-lg:grid-cols-2 gap-[50px] md:gap-[70px] lg-xl:gap-[100px]">
      <div>
        <div className="flex items-center gap-4">
          <div className="w-1 h-1 rounded-full bg-primary"></div>
          <p className="text-primary font-bold">First Step of Digitization</p>
        </div>
        <p className="text-4xl md:text-7xl font-bold leading-[1.1em]">
          Seamless Online <br /> Payments <br /> for India
        </p>
        <p className="py-6 md:py-8 md:text-lg">
          Effortlessly manage all your essential payments with Sangjeomecom. Our
          platform streamlines mobile recharges, utility bills, and other
          crucial service payments into one convenient location. Experience a
          seamless and secure process with our intuitive interface, designed to
          save you time and eliminate payment hassles. Let Sangjeomecom handle
          your transactions so you can focus on what truly matters.
        </p>
        <div className="flex flex-col items-center justify-center rounded-full px-8 py-1 md:py-2 bg-primary">
          <p className="text-white">★★★★★</p>
          <p className="text-sm text-white uppercase">Rated 4.6 out of 5</p>
        </div>
      </div>
      <div className="relative w-full boxCard col-span-1 justify-self-center sm-lg:justify-self-start">
        <div className="absolute w-[340px] mg:w-[370px] h-[230px] md:w-[474px] md:h-[295px] sm-lg:w-[370px] sm-lg:h-[230px] xl:w-[474px] xl:h-[295px]">
          <Image
            src="/images/front-card.png"
            fill
            alt="card"
            className="object-contain h-full transform md:translate-x-[-102px] md:translate-y-[59px] rotate-0 sm-lg:translate-x-0 sm-lg:translate-y-[230px] lg:translate-y-[180px] sm-lg:rotate-[44.17deg] xl:translate-y-[130px] xl:rotate-41.17 z-10"
          />
        </div>
        <div className="hidden md:block absolute w-[474px] h-[295px] sm-lg:w-[370px] sm-lg:h-[230px] xl:w-[474px] xl:h-[295px] transform z-1 backCard">
          <Image src="/images/back-card.png" fill alt="card" />
        </div>
        <div className="w-[56px] h-[56px] bg-white rounded-[5px] hidden sm-lg:flex justify-center items-center absolute top-[0] left-[0] xl:-top-[69px] xl:left-[1px] rotate-[-26.14deg] shadow-[0_0_40px_5px_rgba(132,132,132,0.2)] transform-gpu will-change-transform preserve-3d paypal-card">
          <Image src="/images/paypal.svg" width={31} height={31} alt="icon" />
        </div>
        <div className="w-[58px] h-[58px] bg-white rounded-full hidden sm-lg:flex justify-center items-center absolute -top-[28%] left-[22%] lg:-top-[35%] xl:-top-[52%] 1300px:-top-[57%] xl:left-[24%] shadow-[0_0_40px_5px_rgba(132,132,132,0.2)] transform-gpu will-change-transform preserve-3d master-card">
          <Image
            src="/images/mastercard.svg"
            width={31}
            height={31}
            alt="icon"
          />
        </div>
        <div className="w-[70px] h-[70px] bg-white rounded-full hidden sm-lg:flex justify-center items-center absolute top:-top-[12%] right-[5%] lg:-top-[17%] lg:right-[10%] xl:-top-[15%] xl:right-[50px] shadow-[0_0_40px_5px_rgba(132,132,132,0.2)] transform-gpu will-change-transform preserve-3d visa-card">
          <Image src="/images/visa.svg" width={39} height={39} alt="icon" />
        </div>
      </div>
    </div>
  );
}
