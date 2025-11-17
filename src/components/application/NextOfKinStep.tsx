import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NextOfKinStep = ({ formData, setFormData }: any) => {
  return (
    <div>
      <h3 className="text-center text-sm font-medium text-slate-500 mb-6 uppercase tracking-wide">
        Next of Kin Details
      </h3>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Input placeholder="Name" />
          <Input placeholder="phone" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Relationship" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="spouse">Spouse</SelectItem>
              <SelectItem value="sibling">Sibling</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Input placeholder="Address" className="col-span-3" />
        </div>
      </div>
    </div>
  );
};

export default NextOfKinStep;
