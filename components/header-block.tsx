import { SettingBtn } from "./setting-btn";

export function HeaderBlock() {
  return (
    <div className="flex items-end">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-300">
          2024
        </h1>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Week 20 : May 13 - May 19
        </h1>
      </div>
      <SettingBtn className="ml-auto" />
    </div>
  );
}
