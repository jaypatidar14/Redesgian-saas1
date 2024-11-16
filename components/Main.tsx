import React from "react";
import Link from "next/link";
import Button from "./Button";

export default function MainPage() {
  
  return (
    <div className="relative flex h-full flex-col items-center justify-between md:flex-row md:pb-24 bg-black">
      {/* Main Content Section */}
      <div className="origin-center-left order-2 max-w-3xl animate-hero-text-slide-up-fade sm:shrink-0 md:order-1 lg:pl-16">
        <div className="flex items-center justify-center md:inline-flex">
          <Link href="/schedule-api">
            <div className="group relative flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40">
              <div className="animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
              🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
              <span className="animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                New Schedule API
              </span>
            </div>
          </Link>
        </div>

        <div className="flex">
          {/* Heading Text */}
          <div>
            <h1 className="font-book font-styling font-display font-effect-hero text-center md:text-left text-[4rem] md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight font-gradient mt-8">
              AI For
              <br />
              Recruiter
            </h1>

            {/* Animated Paragraph with centered lines */}
            <p className="sans mb-8 mt-4 max-w-[30rem] text-center leading-7 md:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
              <span className="block animate-typewriter text-xl md:text-2xl text-slate-300">
                <span className="block">The best way to reach Samplefly</span>
                <span className="block">instead of Resumes. Deliver people at scale.</span>
              </span>
            </p>

            {/* Action Links */}
            <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
              <Button className="w-full md:w-auto">Get Started</Button>
              <Link href="/docs" className="inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 bg-slate-1 border-slate-1 text-slate-11 hover:bg-slate-5 hover:text-slate-12 focus-visible:ring-4 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-6 disabled:hover:bg-slate-1 text-base h-12 gap-0 px-5 font-semibold">
                Documentation
                <span className="text-[#70757E] -mr-2">
                  <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Video background - only visible on larger screens */}
          <div className="hidden lg:block h-full w-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-10px right-3 w-1000px h-800px object-cover"
              src="/cube.mp4" // replace with your video file path
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// import Link from 'next/link';
// import Button from './Button';

// export default function MainPage() {
//   return (
//     <div className="relative flex h-full flex-col items-center justify-between md:flex-row md:pb-24 bg-black">
//       {/* Main Content Section */}
//       <div className="origin-center-left order-2 max-w-3xl animate-hero-text-slide-up-fade sm:shrink-0 md:order-1 lg:pl-16">
//         <div className="flex items-center justify-center md:inline-flex">
//           <Link href="/schedule-api">
//             <div className="group relative flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40">
//               <div className="animate-gradient absolute inset-0 block h-full w-full bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
//               🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
//               <span className="animate-gradient inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
//                 New Schedule API
//               </span>
//             </div>
//           </Link>
//         </div>

//         <div className="flex">
//           {/* Heading Text */}
//           <div>
//             <h1 className="font-book font-styling font-display font-effect-hero text-center md:text-left text-[4rem] md:text-7xl leading-[4.35rem] md:leading-[5rem] tracking-tight font-gradient mt-8">
//               AI For
//               <br />
//               Recruiter
//             </h1>

//             {/* Animated Paragraph with centered lines */}
//             <p className="sans mb-8 mt-4 max-w-[30rem] text-center leading-7 md:text-left text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
//               <span className="block animate-typewriter text-xl md:text-2xl text-slate-300">
//                 <span className="block">The best way to reach Samplefly</span>
//                 <span className="block">instead of Resumes. Deliver people at scale.</span>
//               </span>
//             </p>

//             {/* Action Links */}
//             <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
//               <Button className="w-full md:w-auto">Get Started</Button>
//               <Link href="/docs" className="inline-flex items-center border justify-center select-none rounded-full disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 bg-slate-1 border-slate-1 text-slate-11 hover:bg-slate-5 hover:text-slate-12 focus-visible:ring-4 focus-visible:ring-slate-7 focus-visible:outline-none focus-visible:bg-slate-6 disabled:hover:bg-slate-1 text-base h-12 gap-0 px-5 font-semibold">
//                 Documentation
//                 <span className="text-[#70757E] -mr-2">
//                   <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                       d="M10.75 8.75L14.25 12L10.75 15.25"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                     ></path>
//                   </svg>
//                 </span>
//               </Link>
//             </div>
//           </div>

//           {/* Video background */}
//           <div className="h-full w-full overflow-hidden">
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="absolute top-10px right-3 w-1000px h-800px object-cover"
//               src="/cube.mp4" // replace with your video file path
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import React from "react";
// import GradualSpacing from "./ui/gradual-spacing";
// import Meteors from "./ui/meteors";
// import ScheduleApiButton from "../components/ui/ScheduleApiButton";

// // Replace 'your-image-path' with the path to the image you provided
// // import ForImage from 'C:\Users\admin\next-projecct\talent\public\d.gif';

// function Main() {
//   return (
//     <div className="py-24 md:py-52">
//       <ScheduleApiButton />
      
//       {/* Section with "Email for developers" */}
//       <div className="text-center">
//         <GradualSpacing
//           className="font-display text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"
//           duration={2.5}
//           text="Email"
//         />
//         {/* "for" with a rounded image */}
//         <div className="inline-block align-middle">
//           <img
//             src="../../public/d.gif"
//             alt="for"
//             className="rounded-full"
//             style={{ width: 'auto', height: '1em', display: 'inline', verticalAlign: 'middle' }}
//           />
//         </div>
//         <GradualSpacing
//           className="font-display text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]"
//           duration={2.5}
//           text="developers"
//         />
//       </div>

//       <GradualSpacing
//         className="font-display text-center text-4xl font-bold -tracking-widest text-white  dark:text-white md:text-7xl md:leading-[5rem]"
//         text="simplifies hiring"
//         duration={2.5}
//       />
//       <GradualSpacing
//         className="font-display text-center text-4xl font-bold -tracking-widest text-white dark:text-violet-700 md:text-7xl md:leading-[5rem]"
//         text="ATS and AI - driven"
//         duration={2.5}
//       />
//       <GradualSpacing
//         className="font-display text-center text-4xl font-bold -tracking-widest text-white dark:text-white md:text-7xl md:leading-[5rem]"
//         text="assessments."
//         duration={2.5}
//       />
//       <Meteors number={20} />
//     </div>
//   );
// }

// export default Main;

// import React from "react";

// import GradualSpacing from "./ui/gradual-spacing";

// import Meteors from "./ui/meteors";

// function Main() {
//   return (
//     <div className=" py-24 md:py-52">
//       <GradualSpacing
//         className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
//         duration={2.5}
//         text=" Everything Talent"
//       />
//       <GradualSpacing
//         className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
//         text="simplifies hiring"
//         duration={2.5}
//       />
//       <GradualSpacing
//         className="font-display text-center text-4xl font-bold -tracking-widest text-violet-700 dark:text-violet-700 md:text-7xl md:leading-[5rem]"
//         text="ATS and AI - driven"
//         duration={2.5}
//       />
//       <GradualSpacing
//         className="font-display text-center text-4xl font-bold -tracking-widest  text-black dark:text-white md:text-7xl md:leading-[5rem]"
//         text="assessments."
//         duration={2.5}
//       />
//       <Meteors number={20} />

     
//     </div>
  
//   );
// }

// export default Main;
