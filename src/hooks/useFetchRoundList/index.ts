import { useState, useEffect } from "react";
import axios from "axios";
import { RoundsListProps } from "@/components/types";
import { API_URL } from "@/constants";

type ReturnedType = {
  roundsList: RoundsListProps[] | [];
  loading: boolean;
  error: string;
};
export const useFetchRoundList = (): ReturnedType => {
  const [roundsList, setRoundsList] = useState<RoundsListProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${API_URL}/rounds`)
      .then((response) => {
        setRoundsList(response.data);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { roundsList, loading, error };
};
