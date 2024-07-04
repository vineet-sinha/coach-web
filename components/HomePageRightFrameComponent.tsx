import type { NextPage } from "next";

export type FrameComponent1Type = {
  className?: string;
};

export const FrameComponentRHS: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[46.625rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-left text-[0.75rem] text-dimgray font-inter mq825:flex-wrap ${className}`}
    >
      <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
        <a className="[text-decoration:none] relative tracking-[0.14em] uppercase font-bold text-[inherit] inline-block min-w-[4.75rem] z-[1]">
          About us
        </a>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.75rem] pb-[0rem] pr-[0.25rem] pl-[0rem]">
        <a className="[text-decoration:none] relative tracking-[0.14em] uppercase font-bold text-[inherit] inline-block min-w-[4.5rem] z-[1]">
          contact
        </a>
      </div>
      <div className="w-[17.625rem] flex flex-col items-start justify-start">
        <button className="cursor-pointer pt-[0.625rem] pb-[0.687rem] pr-[1.75rem] pl-[1.812rem] bg-[transparent] w-[6.688rem] rounded-lg [background:linear-gradient(196.78deg,_#9ae0d3,_#35a7a0_96.07%)] box-border flex flex-row items-start justify-start z-[1] border-[1.5px] border-solid border-mediumturquoise-200 hover:bg-darkcyan-200 hover:box-border hover:border-[1.5px] hover:border-solid hover:border-darkcyan-100">
          <div className="h-[2.5rem] w-[6.688rem] relative rounded-lg [background:linear-gradient(196.78deg,_#9ae0d3,_#35a7a0_96.07%)] box-border hidden border-[1.5px] border-solid border-mediumturquoise-200" />
          <a className="[text-decoration:none] relative text-[0.75rem] tracking-[0.14em] uppercase font-bold font-inter text-white text-left inline-block min-w-[2.875rem] z-[2]">
            login
          </a>
        </button>
      </div>
      <div className="h-[18.375rem] w-[0.75rem] flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border text-[0.875rem] text-whitesmoke">
        <div className="w-[17.25rem] relative tracking-[0.5em] leading-[88%] uppercase font-semibold inline-block [transform:_rotate(90deg)] z-[3]">
          For Domain Experts
        </div>
      </div>
    </div>
  );
};
