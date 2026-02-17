import { useEffect, useState } from 'react';
import { getRecommendation, RecommendationResponse } from '../services/api';

type UseRecommendationResult = {
  recommendation: RecommendationResponse | null;
  loading: boolean;
  error: string | null;
};

export function useRecommendation(userId: string): UseRecommendationResult {
  const [recommendation, setRecommendation] = useState<RecommendationResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchRecommendation() {
      setLoading(true);
      setError(null);

      const data = await getRecommendation(userId);

      if (!isMounted) return;

      if (data) {
        setRecommendation(data);
      } else {
        setRecommendation(null);
        setError('Failed to fetch recommendation');
      }

      setLoading(false);
    }

    fetchRecommendation();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  return { recommendation, loading, error };
}
