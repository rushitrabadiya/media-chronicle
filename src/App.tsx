
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import ArticlePage from "./pages/ArticlePage";
import StoryPage from "./pages/StoryPage";
import AboutPage from "./pages/company/AboutPage";
import ContactPage from "./pages/company/ContactPage";
import CareersPage from "./pages/company/CareersPage";
import AdvertisePage from "./pages/company/AdvertisePage";
import TermsPage from "./pages/legal/TermsPage";
import PrivacyPage from "./pages/legal/PrivacyPage";
import CookiePolicyPage from "./pages/legal/CookiePolicyPage";

// Admin routes
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import UsersPage from "./pages/admin/UsersPage";
import ContentPage from "./pages/admin/ContentPage";
import AnalyticsPage from "./pages/admin/AnalyticsPage";
import SettingsPage from "./pages/admin/SettingsPage";
import RolesPage from "./pages/admin/RolesPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import MenusPage from "./pages/admin/MenusPage";
import PostsPage from "./pages/admin/PostsPage";
import { AuthProvider } from "./context/AuthContext";
import { RequireAdmin } from "./hooks/use-admin";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/auth/forgot-password" element={<ForgotPassword />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/article/:slug" element={<ArticlePage />} />
                <Route path="/story/:id" element={<StoryPage />} />
                
                {/* Company Pages */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/advertise" element={<AdvertisePage />} />
                
                {/* Legal Pages */}
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/cookies" element={<CookiePolicyPage />} />
                
                {/* Admin Routes */}
                <Route path="/admin" element={<RequireAdmin><AdminLayout /></RequireAdmin>}>
                  <Route index element={<Dashboard />} />
                  <Route path="users" element={<UsersPage />} />
                  <Route path="content" element={<ContentPage />} />
                  <Route path="posts" element={<PostsPage />} />
                  <Route path="categories" element={<CategoriesPage />} />
                  <Route path="roles" element={<RolesPage />} />
                  <Route path="menus" element={<MenusPage />} />
                  <Route path="analytics" element={<AnalyticsPage />} />
                  <Route path="settings" element={<SettingsPage />} />
                </Route>
                
                {/* Catch-all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
