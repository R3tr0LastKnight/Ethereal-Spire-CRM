import { createClient } from "@supabase/supabase-js";

const Project_URL = "https://lwlqecmxqvtbmetququq.supabase.co";
const Anon_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3bHFlY214cXZ0Ym1ldHF1cXVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjAwMDQwNjcsImV4cCI6MjAzNTU4MDA2N30.netQoJf9lHuFoBWFZk0GFnfCTaMjNCoZ3Nh7igXL2-k";

export const supabase = createClient(Project_URL, Anon_KEY);
