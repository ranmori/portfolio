// Contact.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

/* ---------- schema ---------- */
const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid e-mail address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});
type FormData = z.infer<typeof schema>;

/* ---------- component ---------- */
const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange', // validate while typing
  });

  const onSubmit = (data: FormData) => {
    // TODO: wire your backend / email service here
    console.log(data);
    alert('Message sent (check console)');
  };

  return (
    <div className="h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
        {/* Left Info Panel (unchanged styling) */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="opacity-70 text-lg leading-relaxed">
              I&apos;m currently available for freelance work and full-time
              opportunities. If you have a project that needs some creative
              code, drop me a line.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:naemamohmed348@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-base-100/50 border border-white/10 hover:bg-white/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs opacity-50 font-bold tracking-wider">
                  EMAIL
                </div>
                <div className="font-mono">naemamohmed348@gmail.com</div>
              </div>
              <ArrowUpRight
                className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                size={16}
              />
            </a>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-100/50 border border-white/10">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                <MapPin size={24} />
              </div>
              <div>
                <div className="text-xs opacity-50 font-bold tracking-wider">
                  LOCATION
                </div>
                <div className="font-mono">SipPing a coffee somewhere</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com/ranmori"
              className="btn btn-circle btn-ghost bg-base-200 hover:bg-black hover:text-white transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/naema-mohmed-36aa01310/"
              className="btn btn-circle btn-ghost bg-base-200 hover:bg-blue-600 hover:text-white transition-all"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Form Panel (with validation) */}
        <div className="bg-base-200/30 rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col justify-center">
          <form
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xs opacity-70">
                  NAME
                </span>
              </label>
              <input
                type="text"
                className={`input input-bordered bg-base-100/50 border-white/10 focus:border-primary w-full rounded-xl ${
                  errors.name ? 'input-error' : ''
                }`}
                placeholder="John Doe"
                {...register('name')}
              />
              {errors.name && (
                <label className="label label-text-alt text-error text-xs">
                  {errors.name.message}
                </label>
              )}
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xs opacity-70">
                  EMAIL ADDRESS
                </span>
              </label>
              <input
                type="email"
                className={`input input-bordered bg-base-100/50 border-white/10 focus:border-primary w-full rounded-xl ${
                  errors.email ? 'input-error' : ''
                }`}
                placeholder="john@example.com"
                {...register('email')}
              />
              {errors.email && (
                <label className="label label-text-alt text-error text-xs">
                  {errors.email.message}
                </label>
              )}
            </div>

            {/* Message */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xs opacity-70">
                  MESSAGE
                </span>
              </label>
              <textarea
                className={`textarea textarea-bordered h-32 bg-base-100/50 border-white/10 focus:border-primary rounded-xl resize-none leading-relaxed ${
                  errors.message ? 'textarea-error' : ''
                }`}
                placeholder="Tell me about your project..."
                {...register('message')}
              />
              {errors.message && (
                <label className="label label-text-alt text-error text-xs">
                  {errors.message.message}
                </label>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!isValid}
              className={`btn btn-primary w-full rounded-xl mt-2 shadow-lg shadow-primary/20 ${
                !isValid ? 'btn-disabled opacity-60' : ''
              }`}
            >
              Send Message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;