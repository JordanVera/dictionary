import { Divider, Button } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Definitions = ({ apiResponse }) => {
  const filteredSnd = apiResponse[0].phonetics.filter((word, i) => {
    return word.audio;
  });
  const snd = new Audio(`${filteredSnd[0].audio}`);

  return (
    <div id="definitions">
      <div className="definitionsGrid">
        <div className="text">
          <h1 className="h1 word">{apiResponse[0].word}</h1>
          <h2 className="phonetic">{apiResponse[0].phonetic}</h2>
        </div>
        <div className="audioPlayer">
          <Button onClick={() => snd.play()}>
            <PlayArrowIcon className="playArrow" />
          </Button>
        </div>
      </div>

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

      <Divider />

      <h3 className="source">
        Source:{' '}
        <a href={`${apiResponse[0].sourceUrls[0]}`}>
          {apiResponse[0].sourceUrls[0]}
          <LaunchIcon className="icon" />
        </a>
      </h3>
    </div>
  );
};
export default Definitions;
