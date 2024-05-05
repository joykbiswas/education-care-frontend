const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content justify-between">
        <aside>
          <img
            className="w-20"
            src="https://i.ibb.co/2YNVVsP/edu-logo.jpg"
            alt=""
          />
          <p className="text-2xl">
            <span className="font-semibold text-red-400">EDUCATION CARE</span>{" "}
            Industries Ltd.
            <br />
            Online Course Since 1990
          </p>
        </aside>
        <nav className="text-2xl">
          <header className="footer-title text-3xl">Services</header>
          <a className="link link-hover">Training</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="text-2xl">
          <header className="footer-title text-3xl">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="text-2xl">
          <header className="footer-title text-3xl">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="text-center my-4">
        <h2 className="text-xl">
          © 2023 Crafted by Joy Biswas , All Rights Reserved
        </h2>
      </div>
    </div>
  );
};

export default Footer;
