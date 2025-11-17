import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const ProgrammeStep = ({ formData, setFormData }: any) => {
  const [passport, setPassport] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPassport(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <label className="block text-xs text-muted-foreground mb-2">Programme of study</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="B.Sc Public Administration (ODEL)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bsc-public-admin">B.Sc Public Administration (ODEL)</SelectItem>
            <SelectItem value="other">Other Programmes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col items-center mb-6">
        <label className="text-sm text-muted-foreground mb-3">Passport (recent)</label>
        <div className="w-32 h-32 bg-gray-100 rounded flex items-center justify-center mb-3 overflow-hidden">
          {passport ? (
            <img src={passport} alt="Passport" className="w-full h-full object-cover" />
          ) : (
            <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          )}
        </div>
        <label htmlFor="passport-upload">
          <Button type="button" className="bg-teal-500 hover:bg-teal-600" asChild>
            <span className="cursor-pointer">Change</span>
          </Button>
        </label>
        <input
          id="passport-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      <div className="border rounded-lg p-4 mb-6">
        <div className="flex items-start gap-3">
          <Checkbox id="declaration" />
          <label htmlFor="declaration" className="text-sm text-muted-foreground leading-relaxed">
            I hereby declare that particulars given in this form are to best of my knowledge and belief correct,
            and that if admitted into the University, I shall regard myself bound by Act Status and Regulations
            of the University as they affect me. I also accept that the University reserves the right to withdraw
            admission made in error, and cancel my admission or enrolment if it is subsequently discovered
            that I have given false information or withheld information to aid my application or admission. The decision of
            the University on all matters pertaining to this application is final and no communication will be
            entertained from any candidate whose application is unsuccessful
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeStep;
