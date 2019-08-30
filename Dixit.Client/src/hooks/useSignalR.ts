import { useEffect, useState } from "react";
import * as signalR from "@aspnet/signalr";
export const useSignalR = () => {
  const [connection, setConnection] = useState(true);
  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("/lobbyevents")
      .build();
    connection
      .start()
      .then(() => {
        connection.stream("StreamStocks").subscribe({
          next: stock => {
            console.log(stock);
            setConnection(false);
            // console.log(stock.Symbol + " " + stock.Price);
          },
          error: err => {},
          complete: () => {}
        });
      })
      .catch(err => console.error(err));

    connection.on("lobbyJoined", () => {
      console.log("received messgaed");
    });
  }, []);
  return connection;
};
