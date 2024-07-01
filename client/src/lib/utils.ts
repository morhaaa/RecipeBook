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

export function getRandomRating(): string {
  const random_number = Math.random(); // number between 0 and 1
  const value = random_number * 3; // value between 3 and 5
  const rounded_value = Math.floor(value);

  return rounded_value.toString();
}
