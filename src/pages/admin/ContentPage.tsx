
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, FileText, Plus } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// Mock data for articles
const mockArticles = Array.from({ length: 8 }).map((_, i) => ({
  id: `article-${i + 1}`,
  title: `Article Title ${i + 1}`,
  category: i % 2 === 0 ? "Technology" : "Business",
  status: i % 3 === 0 ? "Draft" : "Published",
  author: `Author ${i % 4 + 1}`,
  date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString(),
  views: Math.floor(Math.random() * 1000),
}));

// Mock data for stories
const mockStories = Array.from({ length: 5 }).map((_, i) => ({
  id: `story-${i + 1}`,
  title: `Story Title ${i + 1}`,
  author: `Author ${i % 3 + 1}`,
  date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString(),
  status: i % 2 === 0 ? "Active" : "Archived",
}));

const ContentPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Management</h1>
        <p className="text-muted-foreground">Manage your website's articles, stories, and other content.</p>
      </div>

      <Tabs defaultValue="articles">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="articles">Articles</TabsTrigger>
            <TabsTrigger value="stories">Stories</TabsTrigger>
          </TabsList>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-8 md:w-[300px]"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New
            </Button>
          </div>
        </div>

        <TabsContent value="articles" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Articles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockArticles.map((article) => (
                  <Card key={article.id} className="overflow-hidden">
                    <div className="h-40 bg-primary/10 flex items-center justify-center">
                      <FileText className="h-12 w-12 text-primary/40" />
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2 flex justify-between items-start">
                        <h3 className="font-semibold">{article.title}</h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            article.status === "Published"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {article.status}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {article.category} • {article.views} views
                      </div>
                      <div className="text-sm">By {article.author} • {article.date}</div>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm" className="flex-1">Edit</Button>
                        <Button variant="outline" size="sm" className="flex-1 text-red-500">Delete</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stories" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockStories.map((story) => (
                  <div
                    key={story.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div>
                      <h3 className="font-semibold">{story.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        By {story.author} • {story.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          story.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {story.status}
                      </span>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">Edit</Button>
                        <Button variant="ghost" size="sm" className="text-red-500">Delete</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentPage;
