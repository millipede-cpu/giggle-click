export default function JokeList({ newJokes }: any) {
  return (
    <div>
      {newJokes.map((newJoke: any) => (
        <div className="joke-list" key={newJoke.addJoke}>
          <p>{newJoke.addJoke}</p>
          <p>{newJoke.punchline}</p>
        </div>
      ))}
    </div>
  );
}
