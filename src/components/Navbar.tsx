import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-center p-2">
      <div className="flex max-w-2xl flex-1 justify-between">
        <Link href="/">My Blog</Link>
        <Link href="/new">New Post</Link>
      </div>
    </nav>
  );
};

export default Navbar;
