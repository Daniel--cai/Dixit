import { State } from "../store";
import { GameState } from "./game/models";
export const initialise = () => {
  const initialState: State = {
    story: {
      cards: [],
      story: "",
      storyCard: 0,
      revealed: [],
      votes: [],
      currentStoryTeller: "bob"
    },
    player: {
      name: "bob",
      code: "1234",
      hand: [1, 2, 3, 4, 5, 6],
      connected: true
    },
    game: {
      players: [
        { name: "bob", score: 0 },
        { name: "smith", score: 0 },
        { name: "jones", score: 0 },
        { name: "pear", score: 0 }
      ],
      gameState: GameState.Story,
      roundNumber: 0,
      score: [
        { name: "bob", score: 0, scored: 0 },
        { name: "smith", score: 0, scored: 0 },
        { name: "jones", score: 0, scored: 0 },
        { name: "pear", score: 0, scored: 0 }
      ]
    },

    router: {
      location: {
        pathname: "",
        search: "",
        state: "",
        hash: "",
        key: undefined
      },
      action: "REPLACE"
    }
  };
  return initialState;
};
