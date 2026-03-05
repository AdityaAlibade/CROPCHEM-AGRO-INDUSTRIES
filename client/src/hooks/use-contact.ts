import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real application, this would send data to your backend
      console.log("Contact form submission:", data);

      return { success: true, message: "Message received" };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting CropChem Agro Industries. We will respond shortly.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "An error occurred while sending your message.",
        variant: "destructive",
      });
    },
  });
}
