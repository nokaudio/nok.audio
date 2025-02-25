import React from 'react';
import { Bell, BookOpen, Users, MessageSquare } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-800">
      <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
      <div className="space-y-4">
        <a href="#" className="flex items-center text-gray-300 hover:text-accent">
          <Bell className="h-5 w-5 mr-2" />
          <span>Notifications</span>
        </a>
        <a href="#" className="flex items-center text-gray-300 hover:text-accent">
          <BookOpen className="h-5 w-5 mr-2" />
          <span>Documentation</span>
        </a>
        <a href="#" className="flex items-center text-gray-300 hover:text-accent">
          <Users className="h-5 w-5 mr-2" />
          <span>Team</span>
        </a>
        <a href="#" className="flex items-center text-gray-300 hover:text-accent">
          <MessageSquare className="h-5 w-5 mr-2" />
          <span>Support</span>
        </a>
      </div>
    </div>
  );
}