import React from "react";


const Journey = () => {
  return (
    <div>
      <div className="w-full px-4 md:px-24 bg-white border-white dark:bg-neutral-950 pt-8 md:py-16">
        {/* <!-- Container for the journey section --> */}
        <div className="flex justify-center md:container px-4 sm:px-6 mb-6 md:mb-40">
          {/* <!-- Text container for heading and description --> */}
          <div className="text-center md:w-[80vw]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl opacity-80 mb-4">
              Since our founding in 2021, Arctic Wolf has risen to the rank of
              market leader in security operations, adding thousands of
              employees and customers, as well as a trophy case of awards along
              the way.
            </p>
          </div>
        </div>

        {/* <!-- Timeline container --> */}
        <div className="w-full bg-white dark:bg-neutral-950 md:container px-4 sm:px-6">
          <div className="relative mx-auto flex">
            <div className="flex flex-col w-full gap-0">
              {/* <!-- Timeline event (repeated block) --> */}
              <div className="relative -mt-20 flex justify-start w-1/2 flex-col">
                {/* <!-- Sticky label for each event --> */}
                <div className="sticky flex flex-col items-end border py-2 z-10 top-60 self-end bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] rotate-180">
                  <div className="h-14 w-14 absolute -left-[15%] -top-4 flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                    <div className="h-12 w-12 rounded-full bg-black border border-blue-500 flex items-center justify-center dark:border-neutral-700">
                      <span className="text-white">
                        {/* <!-- SVG Icon --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white dark:text-sky-500"
                        >
                          <path d="M12 16v5"></path>
                          <path d="M16 14v7"></path>
                          <path d="M20 10v11"></path>
                          <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path>
                          <path d="M4 18v3"></path>
                          <path d="M8 14v7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <h3 className="w-48"></h3>
                </div>

                <div className="relative -mt-6 flex h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                  <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">
                      Aug 2021
                    </p>
                    <div>
                      <img
                        alt="IDC Names Arctic Wolf a Leader"
                        className="rounded-lg border max-h-[212px] w-[317px] h-full"
                        src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fhome%2Fai1.jpg&w=256&q=75"
                      />
                    </div>
                    <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                      IDC Names Arctic Wolf a Leader
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                      >
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                      </svg>
                    </h3>
                  </div>
                </div>
              </div>
              {/* 2 */}

              <div className="relative -mt-20 flex justify-end w-1/2 flex-col self-end">
                {/* <!-- Sticky label for each event --> */}
                <div className="sticky flex flex-col items-start self-start border py-2 z-10 top-60  bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] ">
                  <div className="h-14 w-14 absolute -left-[14%] -top-4 flex  rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                    <div className="h-12 w-12 rounded-full bg-black border border-blue-500 flex items-center justify-center dark:border-neutral-700">
                      <span className="text-white">
                        {/* <!-- SVG Icon --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white dark:text-sky-500"
                        >
                          <path d="M12 16v5"></path>
                          <path d="M16 14v7"></path>
                          <path d="M20 10v11"></path>
                          <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path>
                          <path d="M4 18v3"></path>
                          <path d="M8 14v7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <h3 className="w-48"></h3>
                </div>

                <div className="relative -mt-6 flex h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                  <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">
                      Feb 2022
                    </p>
                    <div>
                      <img
                        alt="Arctic Wolf Incident Launch"
                        className="rounded-lg border max-h-[212px] w-[317px] h-full"
                        src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fhome%2Ftools.jpg&w=256&q=75"
                      />
                    </div>
                    <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                      Arctic Wolf Incident Launch
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                      ></svg>
                    </h3>
                  </div>
                </div>
              </div>
              {/* 3 */}

              <div className="relative -mt-20 flex justify-start w-1/2 flex-col ">
                {/* <!-- Sticky label for each event --> */}
                <div className="sticky flex flex-col items-end  border py-2 z-10 top-60 self-end bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] rotate-180">
                  <div className="h-14 w-14 absolute -left-[15%] -top-4 flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                    <div className="h-12 w-12 rounded-full bg-black border border-blue-500 flex items-center justify-center dark:border-neutral-700">
                      <span className="text-white">
                        {/* <!-- SVG Icon --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white dark:text-sky-500"
                        >
                          <path d="M12 16v5"></path>
                          <path d="M16 14v7"></path>
                          <path d="M20 10v11"></path>
                          <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path>
                          <path d="M4 18v3"></path>
                          <path d="M8 14v7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <h3 className="w-48"></h3>
                </div>

                <div className="relative -mt-6 flex h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                  <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">
                      Oct 2022
                    </p>
                    <div>
                      <img
                        alt="Arctic Wolf Expands to ANZ"
                        className="rounded-lg border max-h-[212px] w-[317px] h-full"
                        src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fhome%2Fai2.jpg&w=256&q=75"
                      />
                    </div>
                    <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                      Arctic Wolf Expands to ANZ
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white dark:text-sky-500"
                      ></svg>
                    </h3>
                  </div>
                </div>
              </div>

              {/* 4 */}

              <div className="relative -mt-20 flex justify-start w-1/2 flex-col self-end">
                {/* <!-- Sticky label for each event --> */}
                <div className="sticky flex flex-col items-end self-start border py-2 z-10 top-60 bg-gradient-to-r from-[#003f6c] via-[#61beef] to-[#00aaff] dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] ">
                  <div className="h-14 w-14 absolute -left-[14%] -top-4 flex self-end rounded-full bg-sky-500 items-center justify-center dark:bg-sky-500">
                    <div className="h-12 w-12 rounded-full bg-black border border-blue-500 flex items-center justify-center dark:border-neutral-700">
                      <span className="text-white">
                        {/* <!-- SVG Icon --> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white dark:text-sky-500"
                        >
                          <path d="M12 16v5"></path>
                          <path d="M16 14v7"></path>
                          <path d="M20 10v11"></path>
                          <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path>
                          <path d="M4 18v3"></path>
                          <path d="M8 14v7"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <h3 className="w-48"></h3>
                </div>

                <div className="relative -mt-6 flex h-fit md:w-[90%] lg:w-[80%] justify-end z-20">
                  <div className="relative border border-blue-300 dark:border-[#3577f39a] py-4 px-8 max-w-[24rem] bg-gradient-to-br from-black via-violet-900 to-violet-500 dark:bg-gradient-to-b dark:from-[#000] dark:to-[#120a1d] transition-all duration-500 shadow-lg hover:shadow-[0_4px_8px_0_rgba(75,0,130,0.5)] rounded-lg">
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:bg-[linear-gradient(to_right,_#3c3cbf_0%,_#FFFFFF_50%)] font-bold text-xl">
                      May 2023
                    </p>
                    <div>
                      <img
                        alt="IDC Names Arctic Wolf a Leader"
                        className="rounded-lg border max-h-[212px] w-[317px] h-full"
                        src="https://everythingtalent.ai/_next/image?url=%2Fassets%2Fhome%2Farticle.jpg&w=256&q=75"
                      />
                    </div>
                    <h3 className="text-[16px] flex gap-2 items-center font-bold text-white dark:text-gray-300 mt-2">
                      Arctic Wolf on CNBC Disruptor 50
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                      ></svg>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -mt-40 left-1/2 transform -translate-x-1/2 top-0 w-4 h-[calc(100%+10rem)] bg-gradient-to-r from-black via-violet-950 to-violet-800 dark:bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] dark:from-transparent dark:from-[0%] dark:via-purple-400 dark:to-transparent dark:to-[99%] mask-image-[linear-gradient(to_bottom,transparent_0%,black_1%,black_99%,transparent_100%)]">
              <div className="absolute inset-x-0 top-8 w-4 bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
