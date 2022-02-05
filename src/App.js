import "./App.css";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Section from "./component/Section/Section";
import Navigation from "./component/Navigation/Navigation";
import { BallTriangle } from "react-loader-spinner";
const HomePage = lazy(() => import("./views/HomePage"));
const Movies = lazy(() => import("./views/MoviesPage"));
const MovieDetauls = lazy(() => import("./views/MovieDetailsPage"));
const App = () => {
  return (
    <>
      <Section>
        <Navigation />
      </Section>
      <Suspense
        fallback={
          <Section>
            <BallTriangle
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          </Section>
        }
      >
        <Switch>
          <Route exact path="/">
            <Section>
              <HomePage title={"Trending today"} />
            </Section>
          </Route>
          <Route exact path="/movies">
            <Section>
              <Movies />
            </Section>
          </Route>
          <Route path="/movies/:Id">
            <MovieDetauls />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
