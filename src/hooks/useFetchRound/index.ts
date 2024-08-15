import { useState, useCallback } from "react";
import axios from "axios";
import { RoundProps } from "@/components/types";
import { API_URL } from "@/constants";

type ReturnedType = {
  round: RoundProps | null;
  loading: boolean;
  error: string;
  fetchData: () => void;
};

export const useFetchRound = (id: string): ReturnedType => {
  const [round, setRound] = useState<RoundProps | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchData = useCallback(async (): Promise<void> => {
    setLoading(true);
    axios
      .get(`${API_URL}/round/${id}`)
      .then((response) => {
        setRound(response.data);
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
  }, [id]);

  return { round, loading, error, fetchData };
};
