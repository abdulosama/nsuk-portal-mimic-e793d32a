import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactDetailsStep = ({ formData, setFormData }: any) => {
  return (
    <div>
      <h3 className="text-center text-sm font-medium text-slate-500 mb-6 uppercase tracking-wide">
        Contact Details
      </h3>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Input placeholder="Address" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nigeria">Nigeria</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nasarawa">Nasarawa</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="LGA" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="keffi">Keffi</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsStep;
