import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yaylybiicrirorqfcvmx.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlheWx5YmlpY3Jpcm9ycWZjdm14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEwNTMyMDksImV4cCI6MjA0NjYyOTIwOX0.ExZqLXe_5y1SbRE0mUS_5KBoqHHMZ-Y2dE-zOpoKOzg";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
