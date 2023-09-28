import { Database } from "./supabase.types";

export type ShopAndServices = Database["public"]["Tables"]["shops_and_services"]["Row"]
export type Utilities = Database["public"]["Tables"]["utilities"]["Row"]
export type PublicServices = Database["public"]["Tables"]["public_services"]["Row"]
export type Sights = Database["public"]["Tables"]["sights"]["Row"]