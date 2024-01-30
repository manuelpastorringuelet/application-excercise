import Link from "next/link";

import { buttonVariants } from "./ui/button";
import { cn } from "~/lib/utils";

const Footer = () => {
  return (
    <div className="flex items-center justify-center border-t bg-green-100 p-2 text-sm">
      Created by
      <Link
        className={cn(buttonVariants({ variant: "link" }), "pl-1")}
        href="https://github.com/manuelpastorringuelet/"
        // className="font-bold text-blue-800"
      >
        Manuel Pastor Ringuelet
      </Link>
    </div>
  );
};

export default Footer;
