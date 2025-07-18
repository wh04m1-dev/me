import Image from "next/image";

export default function Resume() {
  return (
    <main className="space-y-8 p-4">
      <section>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="flex gap-4 items-center">
          <div className="w-1/2">
            <Image
              src="/images/rupp.png"
              alt="Royal University Phnom Penh"
              width={200}
              height={150}
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-xl font-semibold">
              Royal University Phnom Penh
            </h3>
            <h4 className="text-md text-gray-600">
              BE, Information Technology Engineering | 2022
            </h4>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="flex gap-4 items-center">
          <div className="w-1/2">
            <Image
              src="/images/moi.png"
              alt="Company Logo"
              width={200}
              height={150}
            />
          </div>
          <div className="w-1/2">
            <h3 className="text-xl font-semibold">Ministry of Interior</h3>
            <h4 className="text-md text-gray-600">
              Backend Developer | Mar 2024 - Present
            </h4>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="space-y-8">
          {/* Project 1 */}
          <div className="flex gap-4 items-center">
            <div className="w-1/2">
              <Image
                src="/images/vcs.png"
                alt="Vechch Sal"
                width={200}
                height={150}
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-xl font-semibold">Vechch Sal</h3>
              <h4 className="text-md text-gray-600">
                Backend Developer | Jan 2024 - Feb 2025
              </h4>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex gap-4 items-center">
            <div className="w-1/2">
              <Image
                src="/images/myAPI.png"
                alt="MyAPI Gateway"
                width={200}
                height={150}
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-xl font-semibold">MyAPI Gateway</h3>
              <h4 className="text-md text-gray-600">
                Developer | 2024 - Present
              </h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
