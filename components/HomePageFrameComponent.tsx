import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

export const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[10.443rem] max-w-full text-left text-[0.75rem] text-dimgray font-inter mq825:gap-[5.25rem] mq450:gap-[2.625rem] ${className}`}
    >
      <div className="w-[36.313rem] flex flex-row items-end justify-between pt-[0rem] pb-[0.3rem] pr-[1.25rem] pl-[0rem] box-border gap-[1.25rem] max-w-full">
        <div className="h-[7.5rem] w-[7.5rem] relative overflow-hidden shrink-0 z-[1]">
          {/* <img
            className="absolute top-[2.313rem] left-[1.375rem] w-[4.313rem] h-[2.938rem] object-cover"
            loading="lazy"
            alt=""
            src="/logo@2x.png"
          /> */}
        </div>
        <div className="h-[4rem] w-[14.5rem] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
            <a className="[text-decoration:none] relative tracking-[0.14em] uppercase font-bold text-[inherit] inline-block min-w-[2.75rem]">
              home
            </a>
            <a className="[text-decoration:none] relative tracking-[0.14em] uppercase font-extrabold text-darkslategray-200 inline-block min-w-[4.625rem]">
              Services
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-[7.175rem] text-black">
        <div className="w-[33.813rem] relative tracking-[-0.04em] leading-[1.5rem] uppercase font-semibold flex items-center shrink-0 max-w-full z-[1] mq825:text-[3.563rem] mq825:leading-[0.875rem] mq450:text-[2.125rem] mq450:leading-[0.625rem]">
          Waitlist
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.812rem] pl-[2.687rem] box-border max-w-full text-[1.15rem] text-darkslategray-100 mq825:pl-[1.313rem] mq825:pr-[1.375rem] mq825:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[3.062rem] max-w-full mq825:gap-[1.5rem]">
          <div className="w-[16.775rem] flex flex-row items-start justify-start py-[0rem] px-[0.75rem] box-border">
            <div className="flex-1 relative tracking-[0.01em] leading-[1.953rem] font-medium">
              Transform AI into Your Learning Companion
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[3.937rem] max-w-full text-[1.125rem] text-gray mq825:gap-[1.938rem] mq450:gap-[1rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.5rem] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
                <button className="cursor-pointer pt-[0.75rem] px-[1.75rem] pb-[0.812rem] bg-[transparent] w-[9.625rem] rounded-[9.26px] [background:linear-gradient(167.04deg,_#afe9fd,_#73adc1)] box-border flex flex-row items-start justify-start whitespace-nowrap border-[1.7px] border-solid border-skyblue-100 hover:bg-cadetblue-200 hover:box-border hover:border-[1.7px] hover:border-solid hover:border-cadetblue-100">
                  <div className="h-[2.894rem] w-[9.625rem] relative rounded-[9.26px] [background:linear-gradient(167.04deg,_#afe9fd,_#73adc1)] box-border hidden border-[1.7px] border-solid border-skyblue-100" />
                  <b className="relative text-[0.869rem] tracking-[0.14em] uppercase inline-block font-inter text-white text-left min-w-[4.375rem] z-[1]">
                    Sign up
                  </b>
                </button>
                <div className="h-[14.563rem] w-[13.563rem] flex flex-col items-start justify-start pt-[0.812rem] px-[0rem] pb-[0rem] box-border min-w-[13.563rem] mq450:flex-1">
                  <div className="self-stretch flex-1 relative shadow-[54px_61px_90px_rgba(108,_198,_188,_0.51)] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#9ae0d3,_#35a7a0_96.07%)]" />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.75rem]">
              {/* <img
                className="h-[1.531rem] w-[0.688rem] relative"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
