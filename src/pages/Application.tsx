import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApplicationLayout from "@/components/ApplicationLayout";
import PersonalDetailsStep from "@/components/application/PersonalDetailsStep";
import ContactDetailsStep from "@/components/application/ContactDetailsStep";
import NextOfKinStep from "@/components/application/NextOfKinStep";
import ProgrammeStep from "@/components/application/ProgrammeStep";
import PaymentStep from "@/components/application/PaymentStep";

const Application = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const progress = (currentStep / 5) * 100;

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setFormData({});
  };

  return (
    <ApplicationLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
            <span className="text-sm font-medium text-muted-foreground">
              Open Distance and eLearning Application
            </span>
            <span className="text-sm text-muted-foreground">100%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-teal-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-8">
          {currentStep === 1 && <PersonalDetailsStep formData={formData} setFormData={setFormData} />}
          {currentStep === 2 && <ContactDetailsStep formData={formData} setFormData={setFormData} />}
          {currentStep === 3 && <NextOfKinStep formData={formData} setFormData={setFormData} />}
          {currentStep === 4 && <ProgrammeStep formData={formData} setFormData={setFormData} />}
          {currentStep === 5 && <PaymentStep />}

          <div className="flex items-center justify-end gap-3 mt-8">
            {currentStep > 1 && currentStep < 5 && (
              <button
                onClick={handlePrevious}
                className="px-6 py-2 bg-slate-500 text-white rounded hover:bg-slate-600"
              >
                Previous
              </button>
            )}
            {currentStep < 5 && (
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Reset
              </button>
            )}
            {currentStep < 5 && (
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Proceed
              </button>
            )}
            {currentStep === 5 && (
              <button
                onClick={handlePrevious}
                className="px-6 py-2 bg-slate-500 text-white rounded hover:bg-slate-600"
              >
                Previous
              </button>
            )}
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default Application;
