import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const CommunityForum = () => {
  return (
    <div className="bg-white min-h-screen dark:bg-gray-900">
      <div className="flex flex-col md:flex-row">
        {/* Responsive sidebar */}
        <aside className="w-full md:w-80 bg-gray-200 p-4 md:p-6 space-y-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Resources</h2>
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Farming Techniques</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-black hover:text-gray-700" to="#">
                  Farming Guide
                </Link>
              </li>
              <li>
                <Link className="text-black hover:text-gray-700" to="#">
                  Pest Control Techniques
                </Link>
              </li>
              <li>
                <Link className="text-black hover:text-gray-700" to="#">
                  Crop Rotation Strategies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-2">Conservation</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-black hover:text-gray-700" to="#">
                  Soil Health Resources
                </Link>
              </li>
              <li>
                <Link className="text-black hover:text-gray-700" to="#">
                  Water Conservation Tips
                </Link>
              </li>
              <li>
                <Link className="text-black hover:text-gray-700" to="#">
                  Biodiversity Conservation
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Organic Farming Webinar</h4>
            <p className="mb-2">
              Join us for a webinar on organic farming techniques and their benefits. Register now!
            </p>
            <Button className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors" variant="outline">
              Register
            </Button>
          </div>
        </aside>
        <main className="flex-grow p-4 md:p-6">
          <header className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold dark:text-white">Community Forum</h1>
          </header>
          <div className="flex items-center space-x-4 mb-6">
            <Input className="flex-1" placeholder="Search or create a post..." />
            <Button className="bg-blue-500 text-white">New Post</Button>
          </div>
          <div className="flex items-center mb-4">
            <div className="">
              <Select>
                <SelectTrigger id="sort-view">
                  <SelectValue placeholder="Sort & View" className="dark:text-white" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
              <Button className="text-blue-500" variant="ghost">Organic Farming</Button>
              <Button className="text-blue-500" variant="ghost">Pest Control</Button>
              <Button className="text-blue-500" variant="ghost">Crop Rotation</Button>
              <Button className="text-blue-500" variant="ghost">Soil Health</Button>
            </div>
            <Select>
              <SelectTrigger id="all-tags">
                <SelectValue placeholder="All Tags" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="all-tags">All Tags</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Example post */}
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <Badge className="mr-2" variant="secondary">Organic Farming</Badge>
              <span className="text-sm text-gray-600 ml-auto">1h ago</span>
            </div>
            <h2 className="font-bold mb-2">Exploring Sustainable Pest Management Techniques</h2>
            <p className="mb-4">
              I hope you're all having a fantastic growing season! Today, I wanted to dive into the topic of sustainable pest management...
            </p>
            <Button className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors" variant="outline">
              Start the conversation
            </Button>
          </div>
          {/* Repeat for other posts */}
        </main>
      </div>
    </div>
  );
};

export default CommunityForum;
