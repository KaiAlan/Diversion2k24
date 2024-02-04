import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { ModeToggle } from "../mode-toggle";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-start w-3/5 font-semibold dark:bg-gray-900">
      <div className="font-black text-black dark:bg-gray-900 dark:text-white">LOGO</div>
      <NavigationMenu>
        <NavigationMenuList>
          {/* Nav Item 1 */}
          <NavigationMenuItem>
            <Link to={"/"} className={cn("dark:text-white",navigationMenuTriggerStyle())}>
              Home
            </Link>
          </NavigationMenuItem>
          
          {/* Nav item 2 */}
          <NavigationMenuItem>
            <Link to={"/docs"} className={cn("dark:text-white",navigationMenuTriggerStyle())}>
              Docs
            </Link>
          </NavigationMenuItem>

          {/* Nav item 3 */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="dark:text-white">Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] ">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="hover:bg-slate-200">
                    <Link
                      to={"/prediction"}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground dark:hover:bg-gray-900 focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-semibold leading-none">
                        Prediction
                      </div>
                      <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                      This technology predicts crop diseases using advanced AI models, offering early detection and actionable solutions for enhanced crop health.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="hover:bg-slate-200">
                    <Link
                      to={"/transportaion"}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground dark:hover:bg-gray-900 focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-semibold leading-none">
                        Supply Chain
                      </div>
                      <p className="line-clamp-2 text-sm font-normal leading-snug text-muted-foreground">
                      Here We utilizes blockchain for transparent supply chains, ensuring traceability and trust throughout the agricultural ecosystem.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Nav item 4 */}
          <NavigationMenuItem>
            <Link to={"/community"} className={cn("dark:text-white",navigationMenuTriggerStyle())}>
              Community
            </Link>
          </NavigationMenuItem>
          {/* Nav item 5 */}
          <NavigationMenuItem>
            <Link to={"/contacts"} className={cn("dark:text-white dark:bg-gray-900",navigationMenuTriggerStyle())}>
              Contact
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <header className="flex h-14 items-center border-b gap-x-3 bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <ModeToggle />
        <div className="ml-auto flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </nav>
  );
};

export default NavBar;
