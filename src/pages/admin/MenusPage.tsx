
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Plus, MoveVertical, Menu as MenuIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MenuForm } from "@/components/admin/MenuForm";
import { Menu } from "@/utils/types";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { MenuPermissionsForm } from "@/components/admin/MenuPermissionsForm";

// Mock data for menus
const mockMenus: Menu[] = [
  {
    id: "1",
    name: "Dashboard",
    path: "/admin",
    icon: "LayoutDashboard",
    order: 1,
    permissions: ["admin.dashboard.view"],
  },
  {
    id: "2",
    name: "Users",
    path: "/admin/users",
    icon: "Users",
    order: 2,
    permissions: ["admin.users.view"],
  },
  {
    id: "3",
    name: "Content",
    path: "/admin/content",
    icon: "FileText",
    order: 3,
    permissions: ["admin.content.view"],
  },
  {
    id: "4",
    name: "Categories",
    path: "/admin/categories",
    icon: "FolderTree",
    order: 4,
    permissions: ["admin.categories.view"],
  },
  {
    id: "5",
    name: "Roles",
    path: "/admin/roles",
    icon: "Shield",
    order: 5,
    permissions: ["admin.roles.view"],
  },
  {
    id: "6",
    name: "Menus",
    path: "/admin/menus",
    icon: "Menu",
    order: 6,
    permissions: ["admin.menus.view"],
  },
];

const MenusPage: React.FC = () => {
  const [menus, setMenus] = useState<Menu[]>(mockMenus);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPermissionsDialogOpen, setIsPermissionsDialogOpen] = useState(false);
  const [selectedMenuId, setSelectedMenuId] = useState<string | null>(null);
  
  const handleAddMenu = (newMenu: Menu) => {
    setMenus([...menus, newMenu]);
    setIsDialogOpen(false);
  };

  const handleDeleteMenu = (menuId: string) => {
    setMenus(menus.filter(menu => menu.id !== menuId));
  };

  const handleMoveItem = (menuId: string, direction: 'up' | 'down') => {
    const menuIndex = menus.findIndex(m => m.id === menuId);
    if ((direction === 'up' && menuIndex === 0) || 
        (direction === 'down' && menuIndex === menus.length - 1)) {
      return;
    }
    
    const newMenus = [...menus];
    const targetIndex = direction === 'up' ? menuIndex - 1 : menuIndex + 1;
    
    // Swap the items
    [newMenus[menuIndex], newMenus[targetIndex]] = [newMenus[targetIndex], newMenus[menuIndex]];
    
    // Update order values
    newMenus.forEach((menu, index) => {
      menu.order = index + 1;
    });
    
    setMenus(newMenus);
  };

  const handlePermissionsUpdate = (menuId: string, permissions: string[]) => {
    setMenus(prevMenus => 
      prevMenus.map(menu => 
        menu.id === menuId 
          ? { ...menu, permissions }
          : menu
      )
    );
    setIsPermissionsDialogOpen(false);
  };

  const getSelectedMenu = () => {
    return menus.find(menu => menu.id === selectedMenuId) || null;
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Menu Management</h1>
        <p className="text-muted-foreground">Manage menu items and their permissions.</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
            <CardTitle>Menus</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search menus..."
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
                    Add Menu
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Create New Menu Item</DialogTitle>
                  </DialogHeader>
                  <MenuForm onSubmit={handleAddMenu} />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Path</TableHead>
                <TableHead>Icon</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {menus.map((menu) => (
                <TableRow key={menu.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleMoveItem(menu.id, 'up')}
                        disabled={menu.order === 1}
                        className="h-6 w-6"
                      >
                        <MoveVertical className="h-4 w-4 rotate-180" />
                      </Button>
                      <span>{menu.order}</span>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleMoveItem(menu.id, 'down')}
                        disabled={menu.order === menus.length}
                        className="h-6 w-6"
                      >
                        <MoveVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium flex items-center gap-2">
                    <MenuIcon className="h-4 w-4" />
                    {menu.name}
                  </TableCell>
                  <TableCell>{menu.path}</TableCell>
                  <TableCell>{menu.icon}</TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        setSelectedMenuId(menu.id);
                        setIsPermissionsDialogOpen(true);
                      }}
                    >
                      {menu.permissions?.length || 0} permissions
                    </Button>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-red-500">
                          Delete
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Delete Menu Item</AlertDialogTitle>
                          <AlertDialogDescription>
                            Are you sure you want to delete this menu item? This action cannot be undone.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDeleteMenu(menu.id)} className="bg-red-500 hover:bg-red-600">
                            Delete
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isPermissionsDialogOpen} onOpenChange={setIsPermissionsDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Menu Permissions: {getSelectedMenu()?.name}</DialogTitle>
          </DialogHeader>
          {selectedMenuId && (
            <MenuPermissionsForm 
              menu={getSelectedMenu()!} 
              onSubmit={(permissions) => handlePermissionsUpdate(selectedMenuId, permissions)} 
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenusPage;
