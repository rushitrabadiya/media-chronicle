
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';
import { LoginCredentials } from '@/utils/types';

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

const phoneSchema = z.object({
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  password: z.string().min(1, 'Password is required'),
});

type EmailFormData = z.infer<typeof emailSchema>;
type PhoneFormData = z.infer<typeof phoneSchema>;

const LoginForm: React.FC = () => {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [credentials, setCredentials] = useState<LoginCredentials | null>(null);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const phoneForm = useForm<PhoneFormData>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  const onEmailSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would be an API call to authenticate the user
      console.log('Login with email:', data);
      setCredentials({ email: data.email, password: data.password });
      
      // Mock successful login, show OTP verification form
      setTimeout(() => {
        toast.success('Verification code sent to your email');
        setShowOtpForm(true);
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.');
      setIsSubmitting(false);
    }
  };

  const onPhoneSubmit = async (data: PhoneFormData) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would be an API call to authenticate the user
      console.log('Login with phone:', data);
      setCredentials({ phoneNumber: data.phoneNumber, password: data.password });
      
      // Mock successful login, show OTP verification form
      setTimeout(() => {
        toast.success('Verification code sent to your phone');
        setShowOtpForm(true);
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.');
      setIsSubmitting(false);
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 6) {
      toast.error('Please enter a valid 6-digit OTP');
      return;
    }

    setIsSubmitting(true);
    try {
      // In a real app, this would be an API call to verify the OTP
      console.log('Verifying OTP:', otp);
      
      // Mock successful verification
      setTimeout(() => {
        // Mock user data
        const userData = {
          id: 'user123',
          firstName: 'John',
          lastName: 'Doe',
          email: credentials?.email || 'john.doe@example.com',
          phoneNumber: credentials?.phoneNumber || '1234567890',
        };
        
        login(userData);
        toast.success('Login successful!');
        navigate('/');
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      toast.error('OTP verification failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (showOtpForm) {
    return (
      <div className="w-full max-w-md mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Verify Your Login</h2>
          <p className="text-muted-foreground">
            We've sent a 6-digit verification code to your {loginMethod === 'email' ? 'email' : 'phone'}. Enter it below to complete login.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <FormLabel>6-Digit Code</FormLabel>
            <div className="flex justify-center">
              <Input
                className="text-center text-lg py-6 tracking-widest"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                inputMode="numeric"
                placeholder="000000"
              />
            </div>
          </div>

          <Button 
            className="w-full" 
            onClick={verifyOtp}
            disabled={otp.length !== 6 || isSubmitting}
          >
            {isSubmitting ? 'Verifying...' : 'Verify & Login'}
          </Button>

          <div className="text-center">
            <Button variant="link" onClick={() => setShowOtpForm(false)}>
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Tabs 
      defaultValue="email" 
      onValueChange={(value) => setLoginMethod(value as 'email' | 'phone')}
      className="w-full"
    >
      <TabsList className="grid w-full grid-cols-2 mb-6">
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="phone">Phone</TabsTrigger>
      </TabsList>
      
      <TabsContent value="email" className="animate-fade-in">
        <Form {...emailForm}>
          <form onSubmit={emailForm.handleSubmit(onEmailSubmit)} className="space-y-4">
            <FormField
              control={emailForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="johndoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={emailForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link 
                      to="/auth/forgot-password" 
                      className="text-xs text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? 
                          <EyeOff className="h-4 w-4 text-muted-foreground" /> : 
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        }
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full mt-6" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value="phone" className="animate-fade-in">
        <Form {...phoneForm}>
          <form onSubmit={phoneForm.handleSubmit(onPhoneSubmit)} className="space-y-4">
            <FormField
              control={phoneForm.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="1234567890" 
                      {...field} 
                      onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ''))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={phoneForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link 
                      to="/auth/forgot-password" 
                      className="text-xs text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? 
                          <EyeOff className="h-4 w-4 text-muted-foreground" /> : 
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        }
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full mt-6" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  );
};

export default LoginForm;
