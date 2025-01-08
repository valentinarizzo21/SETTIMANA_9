const MyFooter = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5 position-sticky bottom-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2025 Valentina.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
              <li className="mx-3">
                <a href="#" className="text-white">
                  Facebook
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-white">
                  Twitter
                </a>
              </li>
              <li className="mx-3">
                <a href="#" className="text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
