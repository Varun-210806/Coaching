import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://xmysbeppsjgkvduhczyk.supabase.co";
const SUPABASE_KEY = "sb_publishable_3aOPb_Xi3ijo16Niw2l1TQ_wX2ysWwq";

window.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
