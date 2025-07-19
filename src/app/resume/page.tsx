import Image from "next/image";

export default function Resume() {
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Education</h2>
        <div className="p-2 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-[200px] flex justify-center">
            <Image
              src="/images/rupp.png"
              alt="Royal University Phnom Penh"
              width={200}
              height={150}
              className="object-contain rounded-lg w-full h-auto max-h-[120px]"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">
              Royal University Phnom Penh
            </h3>
            <p className="text-gray-600">
              BE, Information Technology Engineering | 2022
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Experience</h2>
        <div className="p-2 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-[200px] flex justify-center">
            <Image
              src="/images/moi.png"
              alt="Ministry of Interior"
              width={200}
              height={150}
              className="object-contain rounded-lg w-full h-auto max-h-[120px]"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold">Ministry of Interior</h3>
            <p className="text-gray-600">
              Backend Developer | Mar 2024 - Present
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">Projects</h2>
        <div className="space-y-8">
          <div className="p-2 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-[200px] flex justify-center">
              <Image
                src="/images/vcs.png"
                alt="Vechch Sal"
                width={200}
                height={150}
                className="object-contain rounded-lg w-full h-auto max-h-[120px]"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Vechch Sal</h3>
              <p className="text-gray-600">
                Backend Developer | Jan 2024 - Feb 2025
              </p>
              <a
                href="https://github.com/wh04m1-dev/VECHCH-SA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View Demo →
              </a>
            </div>
          </div>

          <div className="p-2 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-[200px] flex justify-center">
              <Image
                src="/images/myapi.png"
                alt="MyAPI Gateway"
                width={200}
                height={150}
                className="object-contain rounded-lg w-full h-auto max-h-[120px]"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">MyAPI Gateway</h3>
              <p className="text-gray-600">Developer | 2024 - Present</p>
              <a
                href="https://myapi-demo.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View Demo →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
