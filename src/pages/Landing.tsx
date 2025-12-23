import { Share2, Twitter, Youtube } from "lucide-react";
import Button from "../components/Button";

export default function Landing({ onLogin, onSignup }: any) {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">M</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Mindly</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button size="md" variant="ghost" onclick={onLogin} text="Login"/>
            <Button variant="primary" size="md" onclick={onSignup} text="Get Started"/>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Your Second Brain for
            <br />
            <span className="text-blue-600">Social Content</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Save, organize, and share your favorite YouTube videos and Twitter
            posts in one place
          </p>
          <div className="flex items-center justify-center gap-3 pt-4">
            <Button variant="primary" size="lg" onclick={onSignup} text="Start Free"/>
            <Button variant="secondary" size="lg" onclick={onLogin} text="Login"/>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 ">
          <div className="p-6 text-center border rounded-lg border-zinc-200">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Youtube className="text-blue-600" size={24} />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              YouTube Videos
            </h3>
            <p className="text-sm text-gray-600">
              Save and embed videos directly
            </p>
          </div>
          <div className="p-6 text-center border rounded-lg border-zinc-200">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Twitter className="text-blue-600" size={24} />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Twitter Posts
            </h3>
            <p className="text-sm text-gray-600">
              Keep track of important tweets
            </p>
          </div>
          <div className="p-6 text-center border rounded-lg border-zinc-200">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
              <Share2 className="text-blue-600" size={24} />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">
              Easy Sharing
            </h3>
            <p className="text-sm text-gray-600">Share with a single link</p>
          </div>
        </div>
      </div>
    </div>
  );
}
