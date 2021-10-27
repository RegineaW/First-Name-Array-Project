import "./styles.css";
//Write array below
export default function App() {
  let firstNames = [
    "Reginea",
    "Omari",
    "Melody",
    "Alod",
    "Amori",
    "Laurent",
    "Ye",
    "Matt",
    "Judy",
    "Sami",
    "Maxwell",
    "Groana",
    "Aland",
    "Jean",
    "Lorena"
  ];
  return (
    <div className="App">
      <table>
        <th>First Name</th>
        <tr>
          <td>{firstNames[0]}</td>
        </tr>
        <tr>
          <td>{firstNames[1]}</td>
        </tr>
        <tr>
          <td>{firstNames[2]}</td>
        </tr>
        <tr>
          <td>{firstNames[3]}</td>
        </tr>
        <tr>
          <td>{firstNames[4]}</td>
        </tr>
        <tr>
          <td>{firstNames[5]}</td>
        </tr>
        <tr>
          <td>{firstNames[6]}</td>
        </tr>
      </table>
    </div>
  );
}
