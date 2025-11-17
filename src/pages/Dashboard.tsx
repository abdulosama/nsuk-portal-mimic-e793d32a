import ApplicationLayout from "@/components/ApplicationLayout";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <ApplicationLayout>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-bold mb-8">Dashboard</h2>

          <div className="grid grid-cols-[300px_1fr] gap-8">
            <div className="space-y-4">
              <div className="w-full aspect-square bg-teal-500 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <Button className="w-full bg-teal-500 hover:bg-teal-600">Update photo</Button>
              <Button className="w-full bg-red-500 hover:bg-red-600">Reset Application</Button>
              <Button variant="outline" className="w-full border-orange-500 bg-orange-500 hover:bg-orange-600 text-white">
                ! Update phone if there is a problem with payment
              </Button>
              
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded" />
                <span className="text-sm text-muted-foreground">Update phone</span>
              </label>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Name</span>
                  <span className="text-sm font-medium">OSAMA Ibrahim Abdul</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Applicant ID</span>
                  <span className="text-sm font-medium">ghostking59@gmail.com</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Phone</span>
                  <span className="text-sm font-medium">08145096343</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Year of admission</span>
                  <span className="text-sm font-medium">2025/2026</span>
                </div>

                <div className="flex justify-between col-span-2">
                  <span className="text-sm text-muted-foreground">Programme Type</span>
                  <span className="text-sm font-medium">ODEL</span>
                </div>

                <div className="flex justify-between col-span-2">
                  <span className="text-sm text-muted-foreground">Faculty</span>
                  <span className="text-sm font-medium">Directorate of Open Distance and eLearning</span>
                </div>

                <div className="flex justify-between col-span-2">
                  <span className="text-sm text-muted-foreground">Department</span>
                  <span className="text-sm font-medium">Public Administration (ODEL)</span>
                </div>

                <div className="flex justify-between col-span-2">
                  <span className="text-sm text-muted-foreground">Programme</span>
                  <span className="text-sm font-medium">B.Sc Public Administration (ODEL)</span>
                </div>

                <div className="flex justify-between col-span-2">
                  <span className="text-sm text-muted-foreground">Mode of entry</span>
                  <span className="text-sm font-medium">100</span>
                </div>
              </div>

              <div className="border-l-2 pl-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-teal-500 -ml-[42px] mt-1"></div>
                  <div>
                    <h4 className="font-medium">Admission</h4>
                    <p className="text-sm text-muted-foreground">Open Distance and eLearning Application</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-teal-500 -ml-[42px] mt-1"></div>
                  <div>
                    <h4 className="font-medium">Session</h4>
                    <p className="text-sm text-muted-foreground">2025/2026</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-teal-500 -ml-[42px] mt-1"></div>
                  <div>
                    <h4 className="font-medium">Mode of study</h4>
                    <p className="text-sm text-muted-foreground">PART_TIME</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 -ml-[42px] mt-1"></div>
                  <div>
                    <h4 className="font-medium">Status</h4>
                    <p className="text-sm text-muted-foreground">APPLICATION_PENDING</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default Dashboard;
