export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      locations: {
        Row: {
          created_at: string
          description: string
          id: number
          img: string
          lat: number
          long: number
          name: string
          public_services_id: number | null
          rating: number | null
          restaurants: number | null
          shops_and_services: number | null
          sights: number | null
          type: string
          utilities: number | null
        }
        Insert: {
          created_at?: string
          description: string
          id?: number
          img: string
          lat: number
          long: number
          name: string
          public_services_id?: number | null
          rating?: number | null
          restaurants?: number | null
          shops_and_services?: number | null
          sights?: number | null
          type: string
          utilities?: number | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: number
          img?: string
          lat?: number
          long?: number
          name?: string
          public_services_id?: number | null
          rating?: number | null
          restaurants?: number | null
          shops_and_services?: number | null
          sights?: number | null
          type?: string
          utilities?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "locations_public_services_id_fkey"
            columns: ["public_services_id"]
            referencedRelation: "public_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_restaurants_fkey"
            columns: ["restaurants"]
            referencedRelation: "restaurant"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_shops_and_services_fkey"
            columns: ["shops_and_services"]
            referencedRelation: "shops_and_services"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_sights_fkey"
            columns: ["sights"]
            referencedRelation: "sights"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_utilities_fkey"
            columns: ["utilities"]
            referencedRelation: "utilities"
            referencedColumns: ["id"]
          }
        ]
      }
      public_services: {
        Row: {
          city: string | null
          created_at: string
          englishSpeaking: boolean | null
          id: number
          openingHours: string[] | null
          phoneNumber: number | null
          postalCode: number | null
          services: string[] | null
          serviceType: string | null
          street: string | null
          streetNumber: number | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          englishSpeaking?: boolean | null
          id?: number
          openingHours?: string[] | null
          phoneNumber?: number | null
          postalCode?: number | null
          services?: string[] | null
          serviceType?: string | null
          street?: string | null
          streetNumber?: number | null
        }
        Update: {
          city?: string | null
          created_at?: string
          englishSpeaking?: boolean | null
          id?: number
          openingHours?: string[] | null
          phoneNumber?: number | null
          postalCode?: number | null
          services?: string[] | null
          serviceType?: string | null
          street?: string | null
          streetNumber?: number | null
        }
        Relationships: []
      }
      restaurant: {
        Row: {
          city: string | null
          created_at: string
          englishSpeaking: boolean | null
          foodType: string | null
          id: number
          openingHours: string[] | null
          ownerName: string | null
          phoneNumber: number | null
          street: string | null
          streetNumber: number | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          englishSpeaking?: boolean | null
          foodType?: string | null
          id?: number
          openingHours?: string[] | null
          ownerName?: string | null
          phoneNumber?: number | null
          street?: string | null
          streetNumber?: number | null
        }
        Update: {
          city?: string | null
          created_at?: string
          englishSpeaking?: boolean | null
          foodType?: string | null
          id?: number
          openingHours?: string[] | null
          ownerName?: string | null
          phoneNumber?: number | null
          street?: string | null
          streetNumber?: number | null
        }
        Relationships: []
      }
      shops_and_services: {
        Row: {
          businessType: string | null
          city: string | null
          created_at: string
          englishSpeaking: boolean | null
          id: number
          openingHours: string[] | null
          ownerName: string | null
          phoneNumber: number | null
          postalCode: number | null
          productType: string | null
          street: string | null
          streetNumber: number | null
        }
        Insert: {
          businessType?: string | null
          city?: string | null
          created_at?: string
          englishSpeaking?: boolean | null
          id?: number
          openingHours?: string[] | null
          ownerName?: string | null
          phoneNumber?: number | null
          postalCode?: number | null
          productType?: string | null
          street?: string | null
          streetNumber?: number | null
        }
        Update: {
          businessType?: string | null
          city?: string | null
          created_at?: string
          englishSpeaking?: boolean | null
          id?: number
          openingHours?: string[] | null
          ownerName?: string | null
          phoneNumber?: number | null
          postalCode?: number | null
          productType?: string | null
          street?: string | null
          streetNumber?: number | null
        }
        Relationships: []
      }
      sights: {
        Row: {
          activity: string | null
          created_at: string
          difficulty: string | null
          id: number
          sightType: string | null
        }
        Insert: {
          activity?: string | null
          created_at?: string
          difficulty?: string | null
          id?: number
          sightType?: string | null
        }
        Update: {
          activity?: string | null
          created_at?: string
          difficulty?: string | null
          id?: number
          sightType?: string | null
        }
        Relationships: []
      }
      utilities: {
        Row: {
          city: string | null
          created_at: string
          englishSpeaking: boolean | null
          id: number
          openingHours: string[] | null
          phoneNumber: number | null
          postalCode: number | null
          street: string | null
          streetNumber: number | null
          utilityType: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          englishSpeaking?: boolean | null
          id?: number
          openingHours?: string[] | null
          phoneNumber?: number | null
          postalCode?: number | null
          street?: string | null
          streetNumber?: number | null
          utilityType?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          englishSpeaking?: boolean | null
          id?: number
          openingHours?: string[] | null
          phoneNumber?: number | null
          postalCode?: number | null
          street?: string | null
          streetNumber?: number | null
          utilityType?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
