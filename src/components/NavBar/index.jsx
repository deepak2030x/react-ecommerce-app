import { ShoppingCart } from "lucide-react";
const NavBar = () => {
  return (
    <header>
      <div>Shop Now</div>
      <nav>
        <ShoppingCart />
        <Heart />
        <CircleUserRound />
      </nav>
    </header>
  );
};

export default NavBar;
