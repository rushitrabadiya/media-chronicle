
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Category } from "@/utils/types";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface CategoryFormProps {
  category?: Category;
  categories: Category[];
  onSubmit: (category: Category) => void;
}

export const CategoryForm: React.FC<CategoryFormProps> = ({ 
  category, 
  categories,
  onSubmit 
}) => {
  const [name, setName] = useState(category?.name || "");
  const [slug, setSlug] = useState(category?.slug || "");
  const [parentId, setParentId] = useState(category?.parentId || "none");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate slug if not provided
    const finalSlug = slug || name.toLowerCase().replace(/\s+/g, '-');
    
    const newCategory: Category = {
      id: category?.id || `category-${Date.now()}`,
      name,
      slug: finalSlug,
      ...(parentId && parentId !== "none" ? { parentId } : {}),
    };
    
    onSubmit(newCategory);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    // Auto-generate slug when typing name
    if (!slug) {
      setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Category Name</Label>
          <Input
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter category name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="Enter category slug"
            required
          />
          <p className="text-sm text-muted-foreground">
            Used in URLs: example.com/category/your-slug
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="parent">Parent Category (Optional)</Label>
          <Select value={parentId} onValueChange={setParentId}>
            <SelectTrigger id="parent">
              <SelectValue placeholder="Select a parent category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None (Top-level category)</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-sm text-muted-foreground">
            Create a subcategory by selecting a parent
          </p>
        </div>
      </div>
      
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline">Cancel</Button>
        <Button type="submit">Save Category</Button>
      </div>
    </form>
  );
};
