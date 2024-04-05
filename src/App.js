import Label from "./components/Label/Label";
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";

function App() {
  const selectOptions = [
    {
      value: 1,
      label: "Option 1"
    },
    {
      value: 2,
      label: "Option 2"
    },
    {
      value: 3,
      label: "Option 3"
    }
  ]
  return (
    <div className="App h-screen">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Type something..." />
                </div>
                <Select options={selectOptions} placeholder="Select something..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
