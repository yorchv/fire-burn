import { createClient } from "@/utils/supabase/client";
import useSWR from "swr";

const fetcher = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from("foods").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getFood = () => {
  return useSWR("foods", fetcher);
};
