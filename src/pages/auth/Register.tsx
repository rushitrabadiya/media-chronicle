
import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '@/components/auth/RegisterForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="page-container">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold mb-2">Create Account</h1>
              <p className="text-muted-foreground">
                Join our community and stay informed with the latest news.
              </p>
            </div>
            
            <div className="bg-white shadow-soft rounded-lg p-6 md:p-8">
              <RegisterForm />
              
              <div className="mt-6 text-center text-sm">
                <p className="text-muted-foreground">
                  Already have an account?{' '}
                  <Link to="/auth/login" className="text-primary font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
