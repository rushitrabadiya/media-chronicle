
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your website settings and preferences.
        </p>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Manage your website's general settings and information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="My News Website" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-description">Site Description</Label>
                  <Textarea id="site-description" defaultValue="A modern news and media platform." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-email">Contact Email</Label>
                  <Input id="site-email" type="email" defaultValue="contact@example.com" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Content Settings</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="articles-per-page">Articles Per Page</Label>
                    <div className="text-sm text-muted-foreground">
                      Number of articles to display per page.
                    </div>
                  </div>
                  <Input
                    id="articles-per-page"
                    type="number"
                    defaultValue="10"
                    className="w-20"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="comment-moderation">Comment Moderation</Label>
                    <div className="text-sm text-muted-foreground">
                      Manually approve comments before they appear.
                    </div>
                  </div>
                  <Switch id="comment-moderation" defaultChecked />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>
                Customize how your website looks to your visitors.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <div className="text-sm text-muted-foreground">
                      Enable dark mode for your website.
                    </div>
                  </div>
                  <Switch id="dark-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-author">Show Author</Label>
                    <div className="text-sm text-muted-foreground">
                      Show author information on articles.
                    </div>
                  </div>
                  <Switch id="show-author" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="show-date">Show Date</Label>
                    <div className="text-sm text-muted-foreground">
                      Show publication date on articles.
                    </div>
                  </div>
                  <Switch id="show-date" defaultChecked />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Manage your email and push notification preferences.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-new-user">New User Registrations</Label>
                    <div className="text-sm text-muted-foreground">
                      Receive an email when a new user registers.
                    </div>
                  </div>
                  <Switch id="email-new-user" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-new-comment">New Comments</Label>
                    <div className="text-sm text-muted-foreground">
                      Receive an email when a new comment is posted.
                    </div>
                  </div>
                  <Switch id="email-new-comment" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-newsletter">Newsletter Subscriptions</Label>
                    <div className="text-sm text-muted-foreground">
                      Receive an email when someone subscribes to the newsletter.
                    </div>
                  </div>
                  <Switch id="email-newsletter" defaultChecked />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>
                Configure advanced settings for your website. Be careful with these options.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta-keywords">Meta Keywords</Label>
                  <Input
                    id="meta-keywords"
                    defaultValue="news, articles, media, technology"
                  />
                  <p className="text-sm text-muted-foreground">
                    Comma-separated keywords for SEO.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="google-analytics">Google Analytics ID</Label>
                  <Input id="google-analytics" placeholder="UA-XXXXXXXXX-X" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <div className="text-sm text-muted-foreground">
                      Put your website in maintenance mode.
                    </div>
                  </div>
                  <Switch id="maintenance-mode" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-red-500">Danger Zone</h3>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="clear-cache">Clear Cache</Label>
                    <div className="text-sm text-muted-foreground">
                      Clear all cached data on your website.
                    </div>
                  </div>
                  <Button variant="outline" className="text-red-500">
                    Clear Cache
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="reset-settings">Reset to Default</Label>
                    <div className="text-sm text-muted-foreground">
                      Reset all settings to their default values.
                    </div>
                  </div>
                  <Button variant="outline" className="text-red-500">
                    Reset Settings
                  </Button>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
