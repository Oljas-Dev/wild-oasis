import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://obbjybawfhwfrbwllblb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iYmp5YmF3Zmh3ZnJid2xsYmxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc0OTM0MDYsImV4cCI6MjAyMzA2OTQwNn0.ga28AIpjjWL29A92mdseJlVZeTsZree-q6lBapew2Hc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
