import { FC } from "react";
import { PrivacyPolicyContent } from "@/constants";

const PrivacyPolicyPage: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between lg:flex-row flex-col pt-[100px] xl:pt-[133px] pb-[50px] items-center">
        <article className="max-w-[812px] m-auto">
          <h1 className="text-[40px] xl:text-[64px] leading-tight font-bold text-[#0a1015] mb-6">
            {PrivacyPolicyContent.title}
          </h1> 

          <h2 className="text-[#0a1015] text-[16px] leading-[1.5] font-normal mb-[30px]">
            {PrivacyPolicyContent.subtitle}
          </h2>

          {PrivacyPolicyContent.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-[#0a1015] text-[16px] leading-[1.5] font-normal mb-[30px]"
            >
              {paragraph}
            </p>
          ))}
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
