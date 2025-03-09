import { PAYMET_SOLUTIONS } from "@/constants";
import Image from "next/image";

export default function Review() {
  return <div className="bg-[#f8f8f8]">
  <div className="container py-16 lg:py-24">
    <div className="grid lg:grid-cols-2 gap-16">
      <div className="relative flex justify-center">
        <div className="relative w-[255px] h-[500px] xl:w-[280px] xl:h-[550px] rounded-2xl overflow-hidden">
          <Image src="/images/phone.png" fill alt="icon" />
        </div>
        <div className="absolute -top-[32px] left-[10%]  md:left-[27%] sm-lg:left-[28%] lg:left-[2%] 2xl:left-[18%]">
          <div className="hidden md:block relative w-[159px] h-[190px] xl:w-[205px] xl:h-[244px]">
            <Image
              src="/images/phone-1.svg"
              fill
              alt="icon"
              className="shadow rounded-[30px]"
            />
          </div>
        </div>
        <div className="absolute bottom-[7%] right-[20%] sm-lg:right-[20%] lg:right-[0] 2xl:right-[15%]">
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
          Sangjeomecom provides efficient and seamless online payment services for mobile recharges and bill payments.
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
</div>;
}
