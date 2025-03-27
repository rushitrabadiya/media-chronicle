import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus, ChevronRight, FolderTree } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CategoryForm } from "@/components/admin/CategoryForm";
import { Category } from "@/utils/types";

// Mock data for categories
const mockCategories: Category[] = [
  {
    id: "1",
    name: "Technology",
    slug: "technology",
    subcategories: [
      {
        id: "1-1",
        name: "Software",
        slug: "software",
        parentId: "1",
      },
      {
        id: "1-2",
        name: "Hardware",
        slug: "hardware",
        parentId: "1",
      },
    ],
  },
  {
    id: "2",
    name: "Business",
    slug: "business",
    subcategories: [
      {
        id: "2-1",
        name: "Finance",
        slug: "finance",
        parentId: "2",
      },
      {
        id: "2-2",
        name: "Entrepreneurship",
        slug: "entrepreneurship",
        parentId: "2",
      },
    ],
  },
  {
    id: "3",
    name: "Health",
    slug: "health",
    subcategories: [
      {
        id: "3-1",
        name: "Fitness",
        slug: "fitness",
        parentId: "3",
      },
      {
        id: "3-2",
        name: "Nutrition",
        slug: "nutrition",
        parentId: "3",
      },
    ],
  },
];

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  
  const handleAddCategory = (newCategory: Category) => {
    if (newCategory.parentId && newCategory.parentId !== "none") {
      // Add as subcategory
      setCategories(prevCategories => {
        return prevCategories.map(category => {
          if (category.id === newCategory.parentId) {
            return {
              ...category,
              subcategories: [...(category.subcategories || []), newCategory]
            };
          }
          return category;
        });
      });
    } else {
      // Add as main category
      setCategories([...categories, newCategory]);
    }
    setIsDialogOpen(false);
  };

  const toggleCategoryExpand = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Categories Management</h1>
        <p className="text-muted-foreground">Manage categories and subcategories for content.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <CardTitle>Categories</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search categories..."
                  className="w-full pl-8 md:w-[300px]"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Category
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Create New Category</DialogTitle>
                  </DialogHeader>
                  <CategoryForm 
                    onSubmit={handleAddCategory} 
                    categories={categories}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Subcategories</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <React.Fragment key={category.id}>
                  <TableRow>
                    <TableCell className="font-medium">{category.name}</TableCell>
                    <TableCell>{category.slug}</TableCell>
                    <TableCell>
                      {category.subcategories && category.subcategories.length > 0 ? (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => toggleCategoryExpand(category.id)}
                          className="flex items-center gap-1"
                        >
                          <FolderTree className="h-4 w-4 mr-1" />
                          {category.subcategories.length} subcategories
                          <ChevronRight className={`h-4 w-4 transition-transform ${
                            expandedCategories.includes(category.id) ? 'rotate-90' : ''
                          }`} />
                        </Button>
                      ) : (
                        <span className="text-muted-foreground">None</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                  {expandedCategories.includes(category.id) && category.subcategories?.map(subcat => (
                    <TableRow key={subcat.id} className="bg-muted/30">
                      <TableCell className="pl-8 font-medium">— {subcat.name}</TableCell>
                      <TableCell>{subcat.slug}</TableCell>
                      <TableCell></TableCell>
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
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoriesPage;
