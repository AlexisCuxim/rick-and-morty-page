import { Suspense } from "react";
import { CharacterList } from "@/components/characters/CharacterList";
import ErrorBoundary from '../components/errors/ErrorBoundary';

export const HomePage = () => {
  return (
    <div className="container">
      <div className="my-16">
        <h1 className="text-5xl text-center font-semibold tracking-wider">
          Rick and Morty
        </h1>
      </div>
      <ErrorBoundary fallback={
        <div>
          Error loading products. Please try again later.
        </div>
      }>
        <Suspense fallback={<p>loading...</p>}>
          <CharacterList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
