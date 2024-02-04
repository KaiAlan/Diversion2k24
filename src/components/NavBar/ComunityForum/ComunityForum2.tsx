// Original Comunity Code

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const ComunityForum = () => {
  return (
    <div className="bg-white min-h-screen dark:bg-gray-900">
      <div className="flex flex-col md:flex-row">
        {/* need to make this aside responsive */}
        <aside className="w-80 bg-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Resources</h2>
          <h3 className="text-xl font-semibold mb-2">Farming Techniques</h3>
          <ul className="space-y-2 mb-4">
            <li>
              <Link className="text-black hover:text-gray-700" to="#">
                Organic Farming Guide
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
          <h3 className="text-xl font-semibold mb-2">Conservation</h3>
          <ul className="space-y-2 mb-4">
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
          <h3 className="text-xl font-semibold mb-2">Latest Event</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Organic Farming Webinar</h4>
            <p className="mb-2">
              Join us for a webinar on organic farming techniques and their
              benefits. Register now!
            </p>
            <Button className="text-blue-500 border-blue-500" variant="outline">
              Register
            </Button>
          </div>
        </aside>
        <main className="px-6 py-4 flex-grow">
          <header className=" px-6 py-8">
            <h1 className="text-4xl font-bold text-black dark:text-white">
              Community
            </h1>
          </header>
          <div className="flex items-center space-x-4 mb-6">
            <Input
              className="flex-1"
              placeholder="Search or create a post..."
            />
            <Button className="bg-blue-500 text-white">New Post</Button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div>
                <Select>
                  <SelectTrigger id="sort-view">
                    <SelectValue
                      placeholder="sort & view"
                      className="dark:text-white"
                    />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button className="text-blue-500" variant="ghost">
                  Organic Farming
                </Button>
                <Button className="text-blue-500" variant="ghost">
                  Pest Control
                </Button>
                <Button className="text-blue-500" variant="ghost">
                  Crop Rotation
                </Button>
                <Button className="text-blue-500" variant="ghost">
                  Soil Health
                </Button>
              </div>
            </div>
            <div>
              <Select>
                <SelectTrigger id="all-tags">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="all-tags">All Tags</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <Badge className="mr-2" variant="secondary">
                Organic Farming
              </Badge>
              <Badge className="mr-2" variant="secondary">
                Pest Control
              </Badge>
              <span className="text-sm text-gray-600 ml-auto">1h ago</span>
            </div>
            <h2 className="font-bold mb-2">
              Exploring Sustainable Pest Management Techniques
            </h2>
            <p className="mb-4">
              I hope you're all having a fantastic growing season! Today, I
              wanted to dive into the topic of sustainable pest
              management—something we all grapple with. Here are a few
              techniques I've been experimenting with, and I'm eager to hear
              your thoughts and experiences.
            </p>
            <Button className="text-blue-500 border-blue-500" variant="outline">
              Start the conversation
            </Button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <Badge className="mr-2" variant="secondary">
                Crop Rotation
              </Badge>
              <Badge className="mr-2" variant="secondary">
                Soil Health
              </Badge>
              <span className="text-sm text-gray-600 ml-auto">2h ago</span>
            </div>
            <h2 className="font-bold mb-2">
              The Importance of Crop Rotation for Soil Health
            </h2>
            <p className="mb-4">
              Crop rotation is a simple process that can have significant
              impacts on the health of your soil and the quality of your crops.
              Let's discuss the benefits and some effective strategies for crop
              rotation.
            </p>
            <Button className="text-blue-500 border-blue-500" variant="outline">
              Join the discussion
            </Button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <Badge className="mr-2" variant="secondary">
                Irrigation
              </Badge>
              <Badge className="mr-2" variant="secondary">
                Water Conservation
              </Badge>
              <span className="text-sm text-gray-600 ml-auto">3h ago</span>
            </div>
            <h2 className="font-bold mb-2">
              Efficient Irrigation Techniques for Water Conservation
            </h2>
            <p className="mb-4">
              Water is a precious resource, and as farmers, we have a
              responsibility to use it wisely. Let's share some efficient
              irrigation techniques that can help conserve water on our farms.
            </p>
            <Button className="text-blue-500 border-blue-500" variant="outline">
              Contribute your ideas
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ComunityForum;
