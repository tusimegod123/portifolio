import "./App.css";
function Navigation() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" id="gt">
          GT
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"></ul>
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            id="nav"
          >
            Say Hi!
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
