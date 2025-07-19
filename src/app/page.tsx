export default function Home() {
  return (
    <main className="px-4 py-8 space-y-16">
      {/* Hero Section */}
      <section className="space-y-4 text-center">
        <h1 className="text-5xl font-bold leading-snug">
          Hello There.
          <br />
          I’m Seng Chanthea.
          <br />
          Welcome to my website.
        </h1>
        <p className="text-xl text-gray-600">
          I specialize in Software Engineering.
        </p>
      </section>

      {/* About Me Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <p className="text-lg text-gray-700">
          My name is Seng Chanthea, a recent graduate with a Bachelor&apos;s degree
          from the Royal University of Phnom Penh (RUPP). I’m passionate about
          Backend Development and DevOps, focusing on building scalable,
          reliable systems. My recent projects involve integrating CI/CD
          pipelines with Spring-based microservices, leveraging modern DevOps
          practices.
        </p>
        <p className="text-lg text-gray-700">
          I’m particularly interested in robust API Gateway architectures that
          manage and secure service-to-service communication. My long-term
          vision is to build a cloud-native platform to support scalable web
          services and fund a self-sustaining research lab focused on web
          infrastructure technologies.
        </p>
      </section>

      {/* Contact Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="text-lg text-gray-700">
          Whether you&apos;re interested in collaborating or just want to say hello,
          feel free to reach out. I&apos;m always open to connecting with like-minded
          developers and innovators.
        </p>
        <div className="text-lg text-gray-800 space-y-2">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:s.chanthea.dev@gmail.com"
              className="text-blue-600 hover:underline"
            >
              s.chanthea.dev@gmail.com
            </a>
          </p>
          <p>
            💬 Telegram:{" "}
            <a
              href="https://t.me/schanthea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              @schanthea
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
