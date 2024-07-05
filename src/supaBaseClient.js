import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_APP_Project_URL,
  process.env.REACT_APP_Anon_KEY
);
