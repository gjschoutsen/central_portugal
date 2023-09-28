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
      public_services: {
        Row: {
          city: string | null
          coordinates: number[] | null
          created_at: string
          description: string | null
          englishSpeaking: boolean | null
          id: number
          img: string[] | null
          name: string | null
          openingHours: string[] | null
          phoneNumber: number | null
          postalCode: number | null
          rating: number | null
          services: string[] | null
          serviceType: string | null
          street: string | null
          streetNumber: number | null
          type: string | null
        }
        Insert: {
          city?: string | null
          coordinates?: number[] | null
          created_at?: string
          description?: string | null
          englishSpeaking?: boolean | null
          id?: number
          img?: string[] | null
          name?: string | null
          openingHours?: string[] | null
          phoneNumber?: number | null
          postalCode?: number | null
          rating?: number | null
          services?: string[] | null
          serviceType?: string | null
          street?: string | null
          streetNumber?: number | null
          type?: string | null
        }
        Update: {
          city?: string | null
          coordinates?: number[] | null
          created_at?: string
          description?: string | null
          englishSpeaking?: boolean | null
          id?: number
          img?: string[] | null
          name?: string | null
          openingHours?: string[] | null
          phoneNumber?: number | null
          postalCode?: number | null
          rating?: number | null
          services?: string[] | null
          serviceType?: string | null
          street?: string | null
          streetNumber?: number | null
          type?: string | null
        }
        Relationships: []
      }
      shops_and_services: {
        Row: {
          businessType: string | null
          city: string | null
          coordinates: number[] | null
          created_at: string
          description: string | null
          englishSpeaking: boolean | null
          id: number
          img: string[] | null
          name: string | null
          openingHours: string[] | null
          ownerName: string | null
          phoneNumber: number | null
          postalCode: number | null
          productType: string | null
          rating: number | null
          street: string | null
          streetNumber: number | null
          type: string | null
        }
        Insert: {
          businessType?: string | null
          city?: string | null
          coordinates?: number[] | null
          created_at?: string
          description?: string | null
          englishSpeaking?: boolean | null
          id?: number
          img?: string[] | null
          name?: string | null
          openingHours?: string[] | null
          ownerName?: string | null
          phoneNumber?: number | null
          postalCode?: number | null
          productType?: string | null
          rating?: number | null
          street?: string | null
          streetNumber?: number | null
          type?: string | null
        }
        Update: {
          businessType?: string | null
          city?: string | null
          coordinates?: number[] | null
          created_at?: string
          description?: string | null
          englishSpeaking?: boolean | null
          id?: number
          img?: string[] | null
          name?: string | null
          openingHours?: string[] | null
          ownerName?: string | null
          phoneNumber?: number | null
          postalCode?: number | null
          productType?: string | null
          rating?: number | null
          street?: string | null
          streetNumber?: number | null
          type?: string | null
        }
        Relationships: []
      }
      sights: {
        Row: {
          activity: string | null
          coordinates: number[] | null
          created_at: string
          description: string | null
          difficulty: string | null
          id: number
          img: string[] | null
          name: string | null
          rating: number | null
          sightType: string | null
          type: string | null
        }
        Insert: {
          activity?: string | null
          coordinates?: number[] | null
          created_at?: string
          description?: string | null
          difficulty?: string | null
          id?: number
          img?: string[] | null
          name?: string | null
          rating?: number | null
          sightType?: string | null
          type?: string | null
        }
        Update: {
          activity?: string | null
          coordinates?: number[] | null
          created_at?: string
          description?: string | null
          difficulty?: string | null
          id?: number
          img?: string[] | null
          name?: string | null
          rating?: number | null
          sightType?: string | null
          type?: string | null
        }
        Relationships: []
      }
      utilities: {
        Row: {
          city: string | null
          coordinates: number[] | null
          created_at: string
          description: string | null
          englishSpeaking: boolean | null
          id: number
          img: string[] | null
          name: string | null
          openingHours: string[] | null
          phoneNumber: number | null
          postalCode: number | null
          rating: number | null
          street: string | null
          streetNumber: number | null
          type: string | null
          utilityType: string | null
        }
        Insert: {
          city?: string | null
          coordinates?: number[] | null
          created_at?: string
          description?: string | null
          englishSpeaking?: boolean | null
          id?: number
          img?: string[] | null
          name?: string | null
          openingHours?: string[] | null
          phoneNumber?: number | null
          postalCode?: number | null
          rating?: number | null
          street?: string | null
          streetNumber?: number | null
          type?: string | null
          utilityType?: string | null
        }
        Update: {
          city?: string | null
          coordinates?: number[] | null
          created_at?: string
          description?: string | null
          englishSpeaking?: boolean | null
          id?: number
          img?: string[] | null
          name?: string | null
          openingHours?: string[] | null
          phoneNumber?: number | null
          postalCode?: number | null
          rating?: number | null
          street?: string | null
          streetNumber?: number | null
          type?: string | null
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
