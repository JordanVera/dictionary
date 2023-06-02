const Definitions = ({ apiResponse }) => {
  console.log(apiResponse[0].meanings[0].definitions);
  return (
    <div id="definitions">
      <h1 className="h1">{apiResponse[0].word}</h1>
      <h2 className="phonetic">{apiResponse[0].phonetic}</h2>
      {/* <p>{apiResponse[0].meanings[0].definitions[0].definition}</p> */}

      {apiResponse[0].meanings.map((meaning, i) => {
        return (
          <>
            <h2 className="partOfSpeech">
              <span>{meaning.partOfSpeech}</span>
            </h2>

            <h3 className="meaning">Meaning</h3>
            <ul>
              {apiResponse[0].meanings[i].definitions.map((meaning, i) => {
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
                {apiResponse[0].meanings[i].synonyms}
              </span>
            </h3>
          </>
        );
      })}
    </div>
  );
};
export default Definitions;
