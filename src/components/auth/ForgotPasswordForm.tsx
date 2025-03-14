
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
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

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
});

const phoneSchema = z.object({
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
});

type EmailFormData = z.infer<typeof emailSchema>;
type PhoneFormData = z.infer<typeof phoneSchema>;

const ForgotPasswordForm: React.FC = () => {
  const [resetMethod, setResetMethod] = useState<'email' | 'phone'>('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otp, setOtp] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [resetContact, setResetContact] = useState('');
  
  const navigate = useNavigate();

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: '',
    },
  });

  const phoneForm = useForm<PhoneFormData>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phoneNumber: '',
    },
  });

  const onEmailSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would be an API call to send a reset email
      console.log('Sending reset email to:', data.email);
      setResetContact(data.email);
      
      // Mock successful request
      setTimeout(() => {
        toast.success('Verification code sent to your email');
        setIsVerifying(true);
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      toast.error('Failed to send verification code. Please try again.');
      setIsSubmitting(false);
    }
  };

  const onPhoneSubmit = async (data: PhoneFormData) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would be an API call to send a reset SMS
      console.log('Sending reset SMS to:', data.phoneNumber);
      setResetContact(data.phoneNumber);
      
      // Mock successful request
      setTimeout(() => {
        toast.success('Verification code sent to your phone');
        setIsVerifying(true);
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      toast.error('Failed to send verification code. Please try again.');
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
      
      // Mock successful verification and generate token
      setTimeout(() => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ1c2hpdHBhdGVsOTkyMUBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NzliYzA2YmM3NWUyMzIxNjk1OGQ4NWEiLCJpYXQiOjE3Mzg0MTQyNjEsImV4cCI6MTczODQxNzg2MX0.e0ySlqeYmH8-O8INKtnPydzqF6KupyK3Fi_b-UQLVYU';
        setResetToken(token);
        toast.success('OTP verified successfully');
        navigate(`/auth/reset-password?token=${token}`);
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      toast.error('OTP verification failed. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (isVerifying) {
    return (
      <div className="w-full max-w-md mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Verify Your Identity</h2>
          <p className="text-muted-foreground">
            We've sent a 6-digit verification code to {resetContact}. Enter it below to continue.
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
            {isSubmitting ? 'Verifying...' : 'Verify & Continue'}
          </Button>

          <div className="text-center">
            <Button variant="link" onClick={() => setIsVerifying(false)}>
              Back to Reset Options
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Tabs 
      defaultValue="email" 
      onValueChange={(value) => setResetMethod(value as 'email' | 'phone')}
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

            <Button 
              type="submit" 
              className="w-full mt-6" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Reset Code'}
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

            <Button 
              type="submit" 
              className="w-full mt-6" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Reset Code'}
            </Button>
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  );
};

export default ForgotPasswordForm;
