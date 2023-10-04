import { Database } from "./supabase.types";

export type Location = Database["public"]["Tables"]["locations"]["Row"]

export type ShopAndServices = Database["public"]["Tables"]["shops_and_services"]["Row"]
export type Utilities = Database["public"]["Tables"]["utilities"]["Row"]
export type PublicService = Database["public"]["Tables"]["public_services"]["Row"]
export type Sights = Database["public"]["Tables"]["sights"]["Row"]