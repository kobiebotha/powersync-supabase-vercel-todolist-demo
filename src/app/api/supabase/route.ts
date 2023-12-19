import { SupabaseConfig } from '@/library/powersync/SupabaseConnector';

import { NextRequest, NextResponse } from 'next/server';

/**
 * This route exposes Supabase credentials to the client.
 */
export async function GET(request: NextRequest): Promise<NextResponse<SupabaseConfig>> {
  // TODO add any required auth logic if necessary to secure these variables
  const PowerSyncPublicInstance = 'https://64d392172a3c226cddbd5070.powersync.journeyapps.com'
  const PowerSyncPublicSupabaseApi = 'https://jrimaqxlgrpjipgssldo.supabase.co'
  const PowerSyncPublicSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyaW1hcXhsZ3JwamlwZ3NzbGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1ODY5MTAsImV4cCI6MjAwNzE2MjkxMH0.K-Qb-YFz0oVpLshUEezGU-Do-sX08zKqBzVccDoZp_Y' 
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
