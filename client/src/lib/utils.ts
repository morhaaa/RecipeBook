import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const BASE_URL: string =
  import.meta.env.VITE_APP_API_SERVICE || "http://localhost:8080";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolvePath(path: string): string {
  return BASE_URL + path;
}
