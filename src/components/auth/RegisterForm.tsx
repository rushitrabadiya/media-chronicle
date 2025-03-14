
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RegisterData } from '@/utils/types';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  dialCode: z.string().default('+1'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number'),
  pin: z.string().length(4, 'PIN must be 4 digits'),
  address: z.string().optional(),
  postcode: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  country: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState('');
  const [registrationData, setRegistrationData] = useState<RegisterData | null>(null);
  const navigate = useNavigate();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      dialCode: '+1',
      password: '',
      pin: '',
      address: '',
      postcode: '',
      city: '',
      state: '',
      country: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would be an API call to register the user
      console.log('Registration data:', data);
      setRegistrationData(data);
      
      // Mock successful registration, show OTP verification form
      setTimeout(() => {
        toast.success('Verification code sent to your email/phone');
        setShowOtpForm(true);
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
      toast.error('Registration failed. Please try again.');
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
        toast.success('Registration successful!');
        navigate('/auth/login');
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
          <h2 className="text-2xl font-bold mb-2">Verify Your Account</h2>
          <p className="text-muted-foreground">
            We've sent a 6-digit verification code to your email/phone. Enter it below to complete registration.
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
            {isSubmitting ? 'Verifying...' : 'Verify & Complete Registration'}
          </Button>

          <div className="text-center">
            <Button variant="link" onClick={() => setShowOtpForm(false)}>
              Back to Registration
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
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

        <div className="grid grid-cols-3 gap-2">
          <FormField
            control={form.control}
            name="dialCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="+1">+1 (US)</SelectItem>
                    <SelectItem value="+44">+44 (UK)</SelectItem>
                    <SelectItem value="+91">+91 (IN)</SelectItem>
                    <SelectItem value="+61">+61 (AU)</SelectItem>
                    <SelectItem value="+86">+86 (CN)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="col-span-2">
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
        </div>

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
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

        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>4-Digit PIN</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="••••"
                  maxLength={4}
                  {...field}
                  onChange={(e) => field.onChange(e.target.value.replace(/\D/g, '').slice(0, 4))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="space-y-4">
          <h3 className="font-medium text-sm">Address Information (Optional)</h3>
          
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Street Address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main St" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Postal Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State/Province</FormLabel>
                  <FormControl>
                    <Input placeholder="State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="AU">Australia</SelectItem>
                      <SelectItem value="IN">India</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating Account...' : 'Create Account'}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
