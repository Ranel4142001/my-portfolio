import { useState } from "react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { ContactRequest, ContactService } from "@/api/services/contact.service";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState<Date | undefined>();
  const { toast } = useToast();

  const submit = async (form: HTMLFormElement) => {
    setIsSubmitting(true);

    const formData = new FormData(form);

    const payload: ContactRequest = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      preferredDate: date ? format(date, "yyyy-MM-dd") : undefined,
    };

    try {
      await ContactService.submitContact(payload);

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });

      form.reset();
      setDate(undefined);
    } catch (error: any) {
      // Best Practice: Handle specific API errors
      toast({
        variant: "destructive",
        title: "Failed to send",
        description:
          error.response?.data?.message || "Could not reach the database.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    date,
    setDate,
    isSubmitting,
    submit,
  };
};
