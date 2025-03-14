
import React from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="page-container">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold mb-2">Forgot Password</h1>
              <p className="text-muted-foreground">
                Enter your email or phone number to receive a reset code.
              </p>
            </div>
            
            <div className="bg-white shadow-soft rounded-lg p-6 md:p-8">
              <ForgotPasswordForm />
              
              <div className="mt-6 text-center text-sm">
                <p className="text-muted-foreground">
                  Remembered your password?{' '}
                  <Link to="/auth/login" className="text-primary font-medium hover:underline">
                    Back to login
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

export default ForgotPassword;
