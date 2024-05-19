import { Checkbox } from "./ui/checkbox";

export function TodoItem() {
  return (
    <div className="items-center flex space-x-2">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Add other platforms to the parser
        </label>
      </div>
    </div>
  );
}
