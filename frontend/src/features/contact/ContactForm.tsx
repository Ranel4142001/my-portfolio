import { motion } from 'framer-motion';
import { Calendar as CalendarIcon, Send } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { Calendar } from '@/shared/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui/popover';
import { cn } from '@/shared/lib/utils';
import { format } from 'date-fns';

type Props = {
  date?: Date;
  setDate: (date?: Date) => void;
  isSubmitting: boolean;
  onSubmit: (form: HTMLFormElement) => void;
};

export const ContactForm = ({
  date,
  setDate,
  isSubmitting,
  onSubmit,
}: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e.currentTarget);
      }}
      className="p-8 rounded-2xl bg-card border border-border card-glow"
    >
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-4">
          <InputField id="name" label="Name" placeholder="Your name" />
          <InputField id="email" label="Email" type="email" placeholder="you@email.com" />
        </div>


        {/* Calendar */}
        <div>
          <label className="text-sm font-medium mb-2 block">
            Preferred Meeting Date (Optional)
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-auto">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">Message</label>
          <Textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about your project..."
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full py-6">
          {isSubmitting ? 'Sending…' : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

const InputField = ({ label, id, ...props }: any) => (
  <div>
    <label htmlFor={id} className="text-sm font-medium mb-2 block">
      {label}
    </label>
    <Input id={id} name={id} required {...props} />
  </div>
);
