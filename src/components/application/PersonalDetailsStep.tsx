import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PersonalDetailsStep = ({ formData, setFormData }: any) => {
  return (
    <div>
      <h3 className="text-center text-sm font-medium text-slate-500 mb-6 uppercase tracking-wide">
        Personal Details
      </h3>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Input placeholder="Surname" />
          <Input placeholder="Middle name" />
          <Input placeholder="First name" />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Input placeholder="Place of birth" />
          <Input type="date" placeholder="Date of birth" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sex" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Marital Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Phone" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nigeria">Nigeria</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nasarawa">Nasarawa</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="LGA" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="keffi">Keffi</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Hometown" />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsStep;
