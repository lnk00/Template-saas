import { ProfileBtn } from "./profile-btn";
import { SettingBtn } from "./setting-btn";
import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

export function HeaderBlock() {
  function getCurrentYear() {
    return dayjs().year();
  }

  function getWeekTitle() {
    dayjs.extend(weekOfYear);

    return `Week ${dayjs().week()} : ${dayjs().format("MMM")} ${dayjs()
      .startOf("week")
      .date()} - ${dayjs().format("MMM")} ${dayjs().endOf("week").date()}`;
  }

  return (
    <div className="flex items-end">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-300">
          {getCurrentYear()}
        </h1>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {getWeekTitle()}
        </h1>
      </div>
      <div className="flex gap-2 ml-auto">
        <SettingBtn />
        <ProfileBtn />
      </div>
    </div>
  );
}
