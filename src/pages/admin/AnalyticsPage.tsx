
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock data for analytics
const visitorData = [
  { name: "Jan", visitors: 4000, pageViews: 2400 },
  { name: "Feb", visitors: 3000, pageViews: 1398 },
  { name: "Mar", visitors: 2000, pageViews: 9800 },
  { name: "Apr", visitors: 2780, pageViews: 3908 },
  { name: "May", visitors: 1890, pageViews: 4800 },
  { name: "Jun", visitors: 2390, pageViews: 3800 },
  { name: "Jul", visitors: 3490, pageViews: 4300 },
];

const trafficSourceData = [
  { name: "Search", value: 400 },
  { name: "Direct", value: 300 },
  { name: "Social", value: 300 },
  { name: "Referral", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const categoryData = [
  { name: "Technology", articles: 40 },
  { name: "Business", articles: 30 },
  { name: "Science", articles: 20 },
  { name: "Politics", articles: 25 },
  { name: "Culture", articles: 15 },
];

const AnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Detailed analytics and statistics about your website's performance.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Visitors & Page Views</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                visitors: {
                  label: "Visitors",
                  color: "#8A2BE2", // Purple color
                },
                pageViews: {
                  label: "Page Views",
                  color: "#38BDF8", // Blue color
                },
              }}
              className="h-80"
            >
              <LineChart data={visitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip
                  content={<ChartTooltipContent />}
                />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  name="visitors"
                  stroke="var(--color-visitors)"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="pageViews"
                  name="pageViews"
                  stroke="var(--color-pageViews)"
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                source: {
                  label: "Traffic Source",
                  color: "#8A2BE2", // Purple color
                },
              }}
              className="h-80"
            >
              <PieChart>
                <Pie
                  data={trafficSourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {trafficSourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Articles by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              articles: {
                label: "Articles",
                color: "#8A2BE2", // Purple color
              },
            }}
            className="h-80"
          >
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="articles" name="articles" fill="var(--color-articles)" />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Most Viewed Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="font-bold text-2xl text-muted-foreground">#{i + 1}</div>
                  <div>
                    <h3 className="font-semibold">Popular Article Title {i + 1}</h3>
                    <div className="text-sm text-muted-foreground">
                      Category • Published {(i + 1) * 2} days ago
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{1000 - i * 150} views</div>
                  <div className="text-sm text-muted-foreground">
                    {20 - i * 3} shares
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsPage;
