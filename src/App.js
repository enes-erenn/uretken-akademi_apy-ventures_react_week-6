// Dependencies and Packages
import axios from "axios";
import { Component } from "react";
// Styles
import "./App.css";

class App extends Component {
  state = { isFetching: false };

  // Component "Mount" Edildiğinde "Fetch" işlemini başlatıyoruz.
  componentDidMount() {
    // İlk Önce "Fetch" işleminin başladığını belirtmek için ve "Loading", tetiklemek için state'i değiştiriyoruz.
    this.setState({ isFetching: true });

    // Burada "Fetch" işleminden önce bir "Timeout" veriyorum.
    setTimeout(
      function () {
        this.setState({ isFetching: false });
      }.bind(this),
      1000
    );

    // "Fetch" İşlemini Gerçekleştirip "state" üzerine yazıyoruz.
    axios("https://jsonplaceholder.typicode.com/users").then((data) => {
      this.setState({ users: data });
    });
  }

  render() {
    return (
      <div>
        {/* Burada "state"imizdeki "isFetching" ancak  "falsy" bir değere sahipse "List"i göster diyoruz.*/}
        {!this.state.isFetching && (
          <ul
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "1rem",
              flexDirection: "column",
              backgroundColor: "#001219",
              width: "100%",
              height: "100vh",
              margin: "0",
              padding: "0",
            }}
          >
            <h2 style={{ color: "#ffffff", padding: "2rem 1rem 0 1rem" }}>
              User List
            </h2>
            {this.state.users?.data?.map((user) => (
              <li
                style={{
                  display: "flex",
                  gap: "1rem",
                  backgroundColor: "lightGray",
                  width: "100%",
                  padding: "4px 0",
                  margin: "0",
                }}
                key={user?.id}
              >
                <p style={{ fontWeight: "bold", paddingLeft: "  1rem" }}>
                  {user.id})
                </p>
                <p style={{ fontWeight: "bold" }}>{user.username}:</p>

                <p>{user.name}</p>
              </li>
            ))}
          </ul>
        )}
        {/* Burada "state"imizdeki "isFetching" ancak  "truthy" bir değere sahipse "Loading"i göster diyoruz.*/}
        {this.state.isFetching && (
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#001219",
              width: "100%",
              height: "100vh",
              margin: "0",
              padding: "0",
              color: "#FFFFFF",
            }}
          >
            Loading...
          </p>
        )}
      </div>
    );
  }
}

export default App;
