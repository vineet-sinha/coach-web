import Head from 'next/head';
import { FrameComponent } from '../components/HomePageFrameComponent';
import { FrameComponentRHS } from '../components/HomePageRightFrameComponent';

export default function Home() {
  return (
    <div className="relative shadow-[36px_46px_124px_rgba(137,_173,_200,_0.88)] rounded-[30px] [background:radial-gradient(50%_50%_at_50%_50%,_#ebf3f5_6.99%,_#c5e2f0)] box-border w-full overflow-hidden flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[2.125rem] leading-[normal] tracking-[normal] [row-gap:20px] text-left text-[1.125rem] text-gray font-inter border-[3px] border-solid border-lightblue-100 mq1450:flex-wrap mq1450:pl-[1.25rem] mq1450:pr-[1.25rem] mq1450:pb-[1.25rem] mq1450:box-border">
      <div className="h-[30.688rem] w-[7.375rem] relative [background:radial-gradient(50%_50%_at_50%_50%,_#9ae0d3,_#35a7a0_96.07%)] hidden z-[0]" />
      {/* <img
        className="h-[1.531rem] w-[0.688rem] absolute !m-[0] right-[14rem] bottom-[3.375rem] object-contain z-[3]"
        loading="lazy"
        alt=""
        src="/vector.svg"
      /> */}
      <div className="w-[37.25rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border min-w-[37.25rem] max-w-full text-[1.55rem] text-black mq825:min-w-full mq1450:flex-1">
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
          <div className="w-[52.113rem] absolute !m-[0] top-[13.938rem] right-[-18.931rem] tracking-[0.73em] leading-[1.375rem] uppercase font-medium flex items-center z-[1] mq450:text-[1.25rem] mq450:leading-[1.063rem]">{`Join the `}</div>
          <div
            className={`flex-1 flex flex-col items-start justify-start gap-[10.443rem] max-w-full text-left text-[0.75rem] text-dimgray font-inter mq825:gap-[5.25rem] mq450:gap-[2.625rem]`}
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


        </div>
      </div>
      <div className="h-[61.375rem] w-[54.75rem] flex flex-col items-end justify-start pt-[30.687rem] px-[0rem] pb-[0rem] box-border min-w-[54.75rem] max-w-full text-[6rem] text-white font-bebas-neue lg:min-w-full mq825:h-auto mq825:pt-[12.938rem] mq825:box-border mq450:pt-[8.438rem] mq450:box-border mq1450:flex-1 mq1450:pt-[19.938rem] mq1450:box-border">
        <div className="mt-[-66.063rem] mr-[-40rem] w-[94.75rem] flex flex-col items-start justify-start pt-[38.875rem] px-[4.937rem] pb-[33.5rem] box-border relative gap-[2.875rem] shrink-0 max-w-[174%] lg:pl-[2.438rem] lg:pr-[2.438rem] lg:box-border mq825:gap-[1.438rem] mq825:pt-[16.438rem] mq825:pb-[14.125rem] mq825:box-border mq1450:pt-[25.25rem] mq1450:pb-[21.75rem] mq1450:box-border">
          <div
            className={`w-[46.625rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full text-left text-[0.75rem] text-dimgray font-inter mq825:flex-wrap`}
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
          <div className="w-[54.75rem] flex flex-row items-start justify-center max-w-full">
            <h1 className="m-0 relative text-inherit leading-[1.125rem] uppercase font-normal font-inherit z-[1] mq825:text-[3rem] mq825:leading-[0.688rem] mq450:text-[1.813rem] mq450:leading-[0.438rem]">
              Learn with AI
            </h1>
          </div>
          <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem]">
            <div className="absolute h-full w-full top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-[50%] [background:linear-gradient(135.94deg,_#d8e6ef_8.44%,_#b4d8e4),_#d9d9d9]" />
            {/* <textarea
              className="bg-skyblue-200 h-[5.969rem] w-[28.313rem] [outline:none] absolute top-[83.563rem] left-[5.313rem] [backdrop-filter:blur(26.12px)] rounded-[17.11px] box-border z-[1] border-[1.5px] border-solid border-skyblue-300"
              rows={5}
              cols={23}
            /> */}
            <div className="absolute top-[34.125rem] left-[35.063rem] [filter:blur(316px)] rounded-[50%] bg-mediumturquoise-300 w-[17.625rem] h-[17.625rem] z-[2]" />
            <div className="absolute top-[75.75rem] left-[32.063rem] [filter:blur(316px)] rounded-[50%] bg-lightskyblue w-[17.625rem] h-[17.625rem] z-[2]" />
            <div className="absolute top-[90.375rem] left-[45.313rem] rounded-[50%] bg-mediumturquoise-100 w-[4.375rem] h-[4.375rem] z-[3]" />
            <div className="absolute top-[92.25rem] left-[2.625rem] rounded-[50%] bg-lightblue-200 w-[0.625rem] h-[0.625rem] z-[1]" />
            <div className="absolute top-[92.25rem] left-[3.938rem] rounded-[50%] bg-lightblue-200 w-[0.625rem] h-[0.625rem] z-[1]" />
            <div className="absolute top-[92.25rem] left-[5.25rem] rounded-[50%] bg-lightblue-200 w-[0.625rem] h-[0.625rem] z-[1]" />
            <div className="absolute top-[92.25rem] left-[6.563rem] rounded-[50%] bg-lightblue-200 w-[0.625rem] h-[0.625rem] z-[1]" />
            <div className="absolute top-[66.313rem] left-[4.938rem] shadow-[9px_59px_90px_rgba(131,_196,_220,_0.47)] rounded-[50%] [background:linear-gradient(135.94deg,_#dff3ff_8.44%,_#9acdde)] w-[11rem] h-[11.219rem] z-[1]" />
          </div>
        </div>
        <div className="w-[7.375rem] h-[30.688rem] [background:linear-gradient(180deg,_#89c8dd,_#73adc1)] flex flex-row items-start justify-start pt-[5.75rem] pb-[6.5rem] pr-[3.187rem] pl-[3.437rem] box-border shrink-0 z-[1] mt-[-28.688rem] text-[0.875rem] text-whitesmoke font-inter mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <div className="h-[30.688rem] w-[7.375rem] relative [background:linear-gradient(180deg,_#89c8dd,_#73adc1)] hidden" />
          <div className="w-[18.438rem] relative tracking-[0.5em] leading-[88%] uppercase font-semibold inline-block [transform:_rotate(90deg)] shrink-0 z-[2]">
            For Course Creators
          </div>
        </div>
      </div>
    </div>
  );
};
