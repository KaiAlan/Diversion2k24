import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const CommunityForum = () => {
  return (
    <div className="bg-white min-h-screen dark:bg-gray-900">
      <div className="flex flex-col md:flex-row">
        {/* Responsive aside */}
        <aside className="w-full md:w-80 bg-gray-200 p-6">
          <h2 className="text-2xl font-bold mb-4">Resources</h2>
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-semibold mb-2">Farming Techniques</h3>
              <ul className="space-y-2 mb-4">
                <li><Link className="text-black hover:text-gray-700" to="#">Organic Farming Guide</Link></li>
                <li><Link className="text-black hover:text-gray-700" to="#">Pest Control Techniques</Link></li>
                <li><Link className="text-black hover:text-gray-700" to="#">Crop Rotation Strategies</Link></li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Conservation</h3>
              <ul className="space-y-2 mb-4">
                <li><Link className="text-black hover:text-gray-700" to="#">Soil Health Resources</Link></li>
                <li><Link className="text-black hover:text-gray-700" to="#">Water Conservation Tips</Link></li>
                <li><Link className="text-black hover:text-gray-700" to="#">Biodiversity Conservation</Link></li>
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold mb-2">Latest Event</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Organic Farming Webinar</h4>
                <p className="mb-2">Join us for a webinar on organic farming techniques and their benefits. Register now!</p>
                <Button className="text-blue-500 border-blue-500" variant="outline">Register</Button>
              </div>
            </section>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <header>
            <h1 className="text-4xl font-bold text-black dark:text-white">Community Forum</h1>
          </header>
          <div className="space-y-4 mt-6">
            <div className="flex items-center space-x-4">
              <Input className="flex-1" placeholder="Search or create a post..." />
              <Button className="bg-blue-500 text-white">New Post</Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Select>
                  <SelectTrigger id="sort-view">
                    <SelectValue placeholder="Sort & View" className="dark:text-white" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="latest">Latest</SelectItem>
                    <SelectItem value="popular">Popular</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="flex gap-9 px-10 " variant="ghost">Organic Farming</Button>
                <Button className="flex gap-9 px-10 " variant="ghost">Pest Control</Button>
                <Button className="flex gap-9 px-10 " variant="ghost">Crop Rotation</Button>
                <Button className="flex gap-9 px-10 " variant="ghost">Soil Health</Button>
                
              </div>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}

export default CommunityForum;
