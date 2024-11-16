import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" md:flex md:justify-between md:container px-4 md:px-28 md:pt-16 flex-row md:flex-col md:gap-[15px] gap-[10px] bg-black">
      {/* Logo and Title */}
      <div className="mb-6 md:mb-0 flex flex-col ">
        <Link href="/">
          <img
            src="/acme-logo footer.webp"
            alt="Everything Talent Logo"
            className="h-40 w-40"
          />
        </Link>
        <span className="text-3xl font-semibold whitespace-nowrap text-white">
          Everything Talent
        </span>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        {/* Resources */}
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">
            Resources
          </h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <Link href="/blog" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/about/#our-story" className="hover:underline">
                Success Stories
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Case Studies
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Whitepapers
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Hiring Guides
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/support" className="hover:underline">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">
            Get Started
          </h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/use-cases/hiring-solutions"
                className="hover:underline"
              >
                Hiring Solutions
              </Link>
            </li>
            <li className="mb-4">
              <Link
                href="/use-cases/funded-startups"
                className="hover:underline"
              >
                Funded Startups
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/login" className="hover:underline">
                Free Trial
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/support" className="hover:underline">
                Contact Support
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Request Demo
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Trust
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">
            Legal
          </h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/terms" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/terms" className="hover:underline">
                CCPA Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="relative">
        <Image
          alt="San Francisco skyline top hiring"
          loading="lazy"
          width={5503}
          height={1907}
          className="max-h-[26rem] h-full w-full mt-0"
          src="/Footer.webp"
        />
        <div className="pointer-events-none absolute h-[10rem] bottom-0 right-0 w-[6rem] bg-gradient-to-l from-[#000000]"></div>
        <div className="pointer-events-none absolute h-[10rem] bottom-0 left-0 w-[6rem] bg-gradient-to-r from-[#000000]"></div>
      </section>
    </footer>
  );
};

export default Footer;
