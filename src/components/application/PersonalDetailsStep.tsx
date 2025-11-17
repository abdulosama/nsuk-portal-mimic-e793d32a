import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React from "react";
import { FloatingInput } from "@/components/ui/floating-input";
import { FloatingSelect } from "@/components/ui/floating-select";
import { User, MapPin, Calendar, Heart, Phone, Globe, Map } from "lucide-react";

const personalDetailsSchema = z.object({
  surname: z.string().min(2, "Surname is required"),
  middleName: z.string().optional(),
  firstName: z.string().min(2, "First name is required"),
  placeOfBirth: z.string().min(2, "Place of birth is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  sex: z.string().min(1, "Sex is required"),
  maritalStatus: z.string().min(1, "Marital status is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  country: z.string().min(1, "Country is required"),
  state: z.string().min(1, "State is required"),
  lga: z.string().min(1, "LGA is required"),
  hometown: z.string().min(2, "Hometown is required"),
});

type PersonalDetailsForm = z.infer<typeof personalDetailsSchema>;

const PersonalDetailsStep = ({ formData, setFormData, onValidationChange }: any) => {
  const { register, formState: { errors, isValid } } = useForm<PersonalDetailsForm>({
    resolver: zodResolver(personalDetailsSchema),
    mode: "onChange",
    defaultValues: formData,
  });

  React.useEffect(() => {
    onValidationChange?.(isValid);
  }, [isValid, onValidationChange]);

  return (
    <div>
      <h3 className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wide">
        Personal Details
      </h3>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <FloatingInput 
              label="Surname" 
              icon={<User className="h-4 w-4" />}
              {...register("surname")}
            />
            {errors.surname && <p className="text-xs text-destructive mt-1">{errors.surname.message}</p>}
          </div>
          <div>
            <FloatingInput 
              label="Middle name" 
              icon={<User className="h-4 w-4" />}
              {...register("middleName")}
            />
          </div>
          <div>
            <FloatingInput 
              label="First name" 
              icon={<User className="h-4 w-4" />}
              {...register("firstName")}
            />
            {errors.firstName && <p className="text-xs text-destructive mt-1">{errors.firstName.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <FloatingInput 
              label="Place of birth" 
              icon={<MapPin className="h-4 w-4" />}
              {...register("placeOfBirth")}
            />
            {errors.placeOfBirth && <p className="text-xs text-destructive mt-1">{errors.placeOfBirth.message}</p>}
          </div>
          <div>
            <FloatingInput 
              type="date" 
              label="Date of birth" 
              icon={<Calendar className="h-4 w-4" />}
              {...register("dateOfBirth")}
            />
            {errors.dateOfBirth && <p className="text-xs text-destructive mt-1">{errors.dateOfBirth.message}</p>}
          </div>
          <div>
            <FloatingSelect
              label="Sex"
              icon={<User className="h-4 w-4" />}
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
              ]}
              {...register("sex")}
            />
            {errors.sex && <p className="text-xs text-destructive mt-1">{errors.sex.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <FloatingSelect
              label="Marital Status"
              icon={<Heart className="h-4 w-4" />}
              options={[
                { value: "single", label: "Single" },
                { value: "married", label: "Married" },
                { value: "divorced", label: "Divorced" },
                { value: "widowed", label: "Widowed" },
              ]}
              {...register("maritalStatus")}
            />
            {errors.maritalStatus && <p className="text-xs text-destructive mt-1">{errors.maritalStatus.message}</p>}
          </div>
          <div>
            <FloatingInput 
              label="Phone" 
              icon={<Phone className="h-4 w-4" />}
              {...register("phone")}
            />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
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
        </div>

        <div className="grid grid-cols-3 gap-4">
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
          <div>
            <FloatingInput 
              label="Hometown" 
              icon={<MapPin className="h-4 w-4" />}
              {...register("hometown")}
            />
            {errors.hometown && <p className="text-xs text-destructive mt-1">{errors.hometown.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsStep;
