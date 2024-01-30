import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-center border-b bg-secondary py-2">
      <div className="flex w-2/3 max-w-2xl flex-1 items-center justify-between">
        <Link className={buttonVariants({ variant: "link" })} href="/">
          My Blog
        </Link>
        <Link className={buttonVariants({ variant: "outline" })} href="/new">
          New Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
