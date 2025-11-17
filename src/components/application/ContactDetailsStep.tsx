import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingSelect } from "@/components/ui/floating-select";
import { MapPin, Globe, Map } from "lucide-react";
import React from "react";

const contactDetailsSchema = z.object({
  address: z.string().min(5, "Address is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  lga: z.string().min(1, "LGA is required"),
});

type ContactDetailsForm = z.infer<typeof contactDetailsSchema>;

const ContactDetailsStep = ({ formData, setFormData, onValidationChange }: any) => {
  const { register, formState: { errors, isValid } } = useForm<ContactDetailsForm>({
    resolver: zodResolver(contactDetailsSchema),
    mode: "onChange",
    defaultValues: formData,
  });

  React.useEffect(() => {
    onValidationChange?.(isValid);
  }, [isValid, onValidationChange]);

  return (
    <div>
      <h3 className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wide">
        Contact Details
      </h3>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <FloatingInput 
              label="Address" 
              icon={<MapPin className="h-4 w-4" />}
              {...register("address")}
            />
            {errors.address && <p className="text-xs text-destructive mt-1">{errors.address.message}</p>}
          </div>
          <div>
            <FloatingSelect
              label="Country"
              icon={<Globe className="h-4 w-4" />}
              options={[
                { value: "nigeria", label: "Nigeria" },
                { value: "other", label: "Other" },
              ]}
              {...register("country")}
            />
            {errors.country && <p className="text-xs text-destructive mt-1">{errors.country.message}</p>}
          </div>
          <div>
            <FloatingSelect
              label="State"
              icon={<Map className="h-4 w-4" />}
              options={[
                { value: "nasarawa", label: "Nasarawa" },
                { value: "other", label: "Other" },
              ]}
              {...register("state")}
            />
            {errors.state && <p className="text-xs text-destructive mt-1">{errors.state.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <FloatingSelect
              label="LGA"
              icon={<Map className="h-4 w-4" />}
              options={[
                { value: "keffi", label: "Keffi" },
                { value: "other", label: "Other" },
              ]}
              {...register("lga")}
            />
            {errors.lga && <p className="text-xs text-destructive mt-1">{errors.lga.message}</p>}
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsStep;
