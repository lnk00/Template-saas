import { Tables } from "@/lib/supabase/database.types";
import { atom } from "jotai";

export const tasks = atom<Tables<"tasks">[]>([]);
