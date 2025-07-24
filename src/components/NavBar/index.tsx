import { CircleUserRound, Heart, ShoppingCart } from "lucide-react";

const NavBar = () => {
  return (
    <header className="flex justify-between bg-green-900 p-4 mb-4">
      <div>
        <h1 className="text-5xl">Shop Now</h1>
      </div>
      <nav className="flex justify-around gap-6">
        <ShoppingCart size={36} />
        <Heart size={36} />
        <CircleUserRound size={36} />
      </nav>
    </header>
  );
};

export default NavBar;
