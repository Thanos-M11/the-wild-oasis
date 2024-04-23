import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ndifyxyxhwbdnteiolyr.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kaWZ5eHl4aHdiZG50ZWlvbHlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI0ODA5MDcsImV4cCI6MjAyODA1NjkwN30.ZYoXk6RYf6FUfvysBICxLP0386RtBcMx63fR9v9X78c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
