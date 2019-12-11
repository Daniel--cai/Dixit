import Axios from "axios";
import {
  TellStoryCommand,
  CreateLobbyCommand,
  StartLobbyCommand,
  VoteCardCommand,
  PlayCardCommand
} from "./request";
const baseUrl = "http://dixit.danielcai.test:30000/app/api";

export class Apiclient {
  public static createLobby(command: CreateLobbyCommand) {
    return Apiclient.post("/lobby/createLobby", command);
  }

  public static startLobby(command: StartLobbyCommand) {
    return Apiclient.post("/lobby/startGame", command);
  }

  public static playCard(command: PlayCardCommand) {
    return Apiclient.post("/player/playCard", command);
  }

  public static tellStory(command: TellStoryCommand) {
    return Apiclient.post("/player/tellStory", command);
  }

  public static voteCard(command: VoteCardCommand) {
    return Apiclient.post("/player/voteCard", command);
  }

  public static get(url: string) {
    return Axios.get(`${baseUrl}${url}`);
  }

  public static post(url: string, body: any) {
    return Axios.post(`${baseUrl}${url}`, body);
  }
}
