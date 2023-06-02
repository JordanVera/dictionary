const Definitions = ({ apiResponse }) => {
  console.log(apiResponse[0].meanings[0].definitions);
  return (
    <div id="definitions">
      <h1 className="h1">{apiResponse[0].word}</h1>
      <h2 className="phonetic">{apiResponse[0].phonetic}</h2>
      {/* <p>{apiResponse[0].meanings[0].definitions[0].definition}</p> */}
      <h2 className="partOfSpeech">
        <span>{apiResponse[0].meanings[0].partOfSpeech}</span>
      </h2>
      <h3 className="meaning">Meaning</h3>
      <ul>
        {apiResponse[0].meanings[0].definitions.map((meaning, i) => {
          return (
            <>
              <li>
                <span>{meaning.definition}</span>
              </li>
            </>
          );
        })}
      </ul>
      <h3 className="meaning">
        Synonoyms:{' '}
        <span className="purpleTxt syn">
          {apiResponse[0].meanings[0].synonyms}
        </span>
      </h3>
      <h3></h3>
    </div>
  );
};
export default Definitions;
