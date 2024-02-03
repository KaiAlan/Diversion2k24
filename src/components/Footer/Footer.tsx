const FooterSection = ({ title, links }: any) => (
  <section className="flex flex-col">
    <h2 className="mb-4 text-base font-semibold leading-none text-gray-600 dark:text-gray-300">{title}</h2>
    <ul className="flex flex-col gap-2">
      {links.map((link:any, index:any) => (
        <li key={index}>
          <a href={link.url} className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400">{link.name}</a>
        </li>
      ))}
    </ul>
  </section>
);

const Footer = () => {
  const sections = [
    { title: "Resources", links: [{ name: "Documentation", url: "#" }, { name: "Integration", url: "#" }, { name: "Starter guide", url: "#" }] },
    { title: "Ecosystem", links: [{ name: "Community", url: "#" }, { name: "ShowCase", url: "#" }] },
    { title: "About", links: [{ name: "Community", url: "#" }, { name: "ShowCase", url: "#" }] },
  ];

  return (
    <footer className="">
      <nav aria-label="Footer navigation" className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <FooterSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left">© 2024 . All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="/terms/" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
