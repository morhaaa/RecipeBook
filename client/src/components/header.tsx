import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full px-6 py-3 flex justify-between items-center bg-white shadow-sm fixed z-50">
      <Link to="/recipes">
        <h4 className="text-lg font-bold">
          <span>Recipe</span>
          <span className="text-primary-orange">Book</span>
        </h4>
      </Link>
      <div className="flex items-center">
        <button className="bg-btn-primary hover:bg-btn-primary-hovered px-4 py-1.5 rounded-md text-white font-semibold">
          Sign in
        </button>
        <span className="mx-2">or</span>
        <p className="text-primary-orange font-semibold">Login</p>
      </div>
    </header>
  );
}

export default Header;
