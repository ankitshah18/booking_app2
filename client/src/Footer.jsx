const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" flex justify-center  text-center w-full fixed bottom-0">
      <div className="p-4 py-6">Copyright &#169; {year} Ankit Shah </div>
    </footer>
  );
};

export default Footer;
