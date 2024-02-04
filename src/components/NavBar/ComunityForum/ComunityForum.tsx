// Modified Community code
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ComunityForum = () => {
  return (
    <div className="bg-white min-h-screen dark:bg-gray-900">
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-80 bg-gray-200 p-6 dark:bg-gray-800 transition-all duration-300 ease-in-out">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Resources
          </h2>
          <div className="space-y-4">
            {["Farming Techniques", "Conservation", "Latest Event"].map(
              (section) => (
                <div key={section}>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    {section}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    <li>
                      <Link
                        className="text-black hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
                        to="#"
                      >
                        Link Placeholder
                      </Link>
                    </li>
                  </ul>
                </div>
              )
            )}
          </div>
        </aside>
        <main className="flex-grow p-6 dark:bg-gray-800 transition-all duration-300 ease-in-out">
          <header className="mb-6">
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Community
            </h1>
          </header>
          <section className="space-y-4">
            <div className="flex items-center space-x-4">
              <Input
                className="flex-1"
                placeholder="Search or create a post..."
              />
              <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200">
                New Post
              </Button>
            </div>
            <div className="flex justify-center items-center space-x-20">
              <Select>
                <SelectTrigger id="sort-view">
                  <SelectValue
                    placeholder="Sort & View"
                    className="dark:text-white"
                  />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
              <Button className="flex gap-9 px-10 " variant="ghost">
                Organic Farming
              </Button>
              <Button className="flex gap-9 px-10 " variant="ghost">
                Pest Control
              </Button>
              <Button className="flex gap-9 px-10 " variant="ghost">
                Crop Rotation
              </Button>
              <Button className="flex gap-9 px-10 " variant="ghost">
                Soil Health
              </Button>
              <Select>
                <SelectTrigger className="flex justify-center items-center ">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      value="all-tags"
                      className="items-center flex mx-auto"
                    >
                      All Tags
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 ease-in-out">
              <h2 className="font-bold mb-2 text-gray-900 dark:text-white">
                Efficient Irrigation Techniques for Water Conservation
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Water is a precious resource, and as farmers, we have a
                responsibility to use it wisely. Let's share some efficient
                irrigation techniques that can help conserve water on our farms.
              </p>
              <Button className="text-blue-500 border-blue-500 hover:bg-blue-100 dark:hover:bg-gray-600 transition-all duration-200">
                Action
              </Button>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 ease-in-out">
              <h2 className="font-bold mb-2 text-gray-900 dark:text-white">
                Efficient Irrigation Techniques for Water Conservation
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Water is a precious resource, and as farmers, we have a
                responsibility to use it wisely. Let's share some efficient
                irrigation techniques that can help conserve water on our farms.
              </p>
              <Button className="text-blue-500 border-blue-500 hover:bg-blue-100 dark:hover:bg-gray-600 transition-all duration-200">
                Action
              </Button>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 ease-in-out">
              <h2 className="font-bold mb-2 text-gray-900 dark:text-white">
                Efficient Irrigation Techniques for Water Conservation
              </h2>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Water is a precious resource, and as farmers, we have a
                responsibility to use it wisely. Let's share some efficient
                irrigation techniques that can help conserve water on our farms.
              </p>
              <Button className="text-blue-500 border-blue-500 hover:bg-blue-100 dark:hover:bg-gray-600 transition-all duration-200">
                Action
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ComunityForum;
