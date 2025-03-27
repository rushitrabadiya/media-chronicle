
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus, FileText, BookOpen, Newspaper } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Article, Story, News } from "@/utils/types";

// Mock data for articles, stories, and news
const mockArticles: Article[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `article-${i + 1}`,
  title: `Article ${i + 1}`,
  slug: `article-${i + 1}`,
  excerpt: `This is a sample excerpt for article ${i + 1}...`,
  content: `Full content for article ${i + 1}...`,
  coverImage: "/placeholder.svg",
  publishedAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
  readTime: Math.floor(Math.random() * 10) + 3,
  categories: [{ id: "1", name: "Technology", slug: "technology" }],
  author: { id: "1", name: "John Doe" },
}));

const mockStories: Story[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `story-${i + 1}`,
  title: `Story ${i + 1}`,
  coverImage: "/placeholder.svg",
  authorName: "Jane Smith",
  authorImage: "/placeholder.svg",
  content: `Story content ${i + 1}...`,
  publishedAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
}));

const mockNews: News[] = Array.from({ length: 5 }).map((_, i) => ({
  id: `news-${i + 1}`,
  title: `News ${i + 1}`,
  content: `News content ${i + 1}...`,
  excerpt: `News excerpt ${i + 1}...`,
  coverImage: "/placeholder.svg",
  type: i % 2 === 0 ? "full" : "short",
  publishedAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)),
  author: { id: "2", name: "News Reporter" },
  categories: [{ id: "2", name: "Business", slug: "business" }],
}));

const PostsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("articles");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Management</h1>
        <p className="text-muted-foreground">Manage articles, stories, and news content.</p>
      </div>

      <Tabs defaultValue="articles" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="articles" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Articles
          </TabsTrigger>
          <TabsTrigger value="stories" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Stories
          </TabsTrigger>
          <TabsTrigger value="news" className="flex items-center gap-2">
            <Newspaper className="h-4 w-4" />
            News
          </TabsTrigger>
        </TabsList>

        {/* Articles Tab */}
        <TabsContent value="articles">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <CardTitle>Articles</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      className="w-full pl-8 md:w-[300px]"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Article
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Slug</TableHead>
                    <TableHead>Categories</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell className="font-medium">{article.title}</TableCell>
                      <TableCell>{article.slug}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {article.categories.map((category) => (
                            <Badge key={category.id} variant="outline">
                              {category.name}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{article.author?.name}</TableCell>
                      <TableCell>{article.publishedAt.toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Stories Tab */}
        <TabsContent value="stories">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <CardTitle>Stories</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search stories..."
                      className="w-full pl-8 md:w-[300px]"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New Story
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockStories.map((story) => (
                    <TableRow key={story.id}>
                      <TableCell className="font-medium">{story.title}</TableCell>
                      <TableCell>{story.authorName}</TableCell>
                      <TableCell>{story.publishedAt?.toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* News Tab */}
        <TabsContent value="news">
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <CardTitle>News</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search news..."
                      className="w-full pl-8 md:w-[300px]"
                    />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    New News
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Categories</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockNews.map((news) => (
                    <TableRow key={news.id}>
                      <TableCell className="font-medium">{news.title}</TableCell>
                      <TableCell>
                        <Badge variant={news.type === "full" ? "default" : "outline"}>
                          {news.type === "full" ? "Full Article" : "Short News"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {news.categories.map((category) => (
                            <Badge key={category.id} variant="outline">
                              {category.name}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>{news.author.name}</TableCell>
                      <TableCell>{news.publishedAt.toLocaleDateString()}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500">
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PostsPage;
