// components/SaasflyBanner.js
export default function SaasflyBanner() {
    return (
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]">
        <p className="flex flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl">
          {['Saasfly', 'will', 'change', 'the', 'way', 'you', 'build', 'SaaS', 'apps.'].map((word, index) => (
            <span key={index} className="xl:lg-3 relative mx-1 lg:mx-2.5">
              <span className="absolute opacity-30">{word}</span>
              <span style={{ opacity: index < 6 ? 1 : 0 }} className="text-black dark:text-white">
                {word}
              </span>
            </span>
          ))}
        </p>
      </div>
    );
  }
  