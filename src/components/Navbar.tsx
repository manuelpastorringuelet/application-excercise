import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-center p-2">
      <div className="flex max-w-2xl flex-1 items-center justify-between">
        <Link className={buttonVariants({ variant: "ghost" })} href="/">
          My Blog
        </Link>
        <Link className={buttonVariants({ variant: "default" })} href="/new">
          New Post
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
