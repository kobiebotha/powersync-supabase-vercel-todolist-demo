import { SupabaseConfig } from '@/library/powersync/SupabaseConnector';

import { NextRequest, NextResponse } from 'next/server';

/**
 * This route exposes Supabase credentials to the client.
 */
export async function GET(request: NextRequest): Promise<NextResponse<SupabaseConfig>> {
  // TODO add any required auth logic if necessary to secure these variables
  const PowerSyncPublicInstance = 'https://651b7fa9c8f4175a3764d8c2.powersync.journeyapps.com'
  const PowerSyncPublicSupabaseApi = 'https://cnoejntmxxserasrdoyo.supabase.co'
  const PowerSyncPublicSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNub2VqbnRteHhzZXJhc3Jkb3lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MTUxNDYsImV4cCI6MjAwNjM5MTE0Nn0.78W3WLxQbkkZtjVu2iM66dP1vizP7U8xdziMOZYoR3c' 
  return NextResponse.json(
    {
      supabaseUrl: process.env.SUPABASE_URL || PowerSyncPublicSupabaseApi,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY || PowerSyncPublicSupabaseAnonKey,
      powersyncUrl: process.env.POWERSYNC_URL || PowerSyncPublicInstance
    },
    {
      status: 200
    }
  );
}
