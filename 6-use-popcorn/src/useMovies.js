import { useState, useEffect } from "react";

const KEY = "cd27b91d";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // callback?.();
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );

        // prettier-ignore
        if (!res.ok) throw new Error(`Something went wrong with fetching movies`);

        const data = await res.json();

        if (data.Response === "False") throw new Error(data.Error);

        setMovies(data.Search);
        setError("");
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error.message);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
