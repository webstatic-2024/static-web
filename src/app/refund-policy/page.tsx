import { RefundPolicyContent } from "@/constants";

export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center lg:flex-row flex-col pb-[50px] items-center">
        <article>
          <div className="text-center py-[30px] sm:py-[40px] lg:py-[60px] xl:py-[80px]">
            <div className="w-full px-[15px] sm:px-[20px] lg:px-[30px] max-w-[940px] mx-auto">
              <h1 className="w-full text-[#110d34] mb-[10px] text-[36px] sm:text-[45px] lg:text-[50px] xl:text-[55px] font-bold leading-[1.1em] font-generalsans">
                {RefundPolicyContent.title}
              </h1>
            </div>
          </div>
          <div className="pb-[50px] md:pb-[70px] lg:pb-[80px]">
            <div className="max-w-[1400px] px-[20px] md:px-[30px] lg:max-w-[940px] mx-auto">
              <div className="bg-[#faf5ff] rounded-[30px] p-[20px]">
                {RefundPolicyContent.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[#0a1015] text-[16px] leading-[1.5] font-normal mb-[30px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
