import { useState } from "react";

function App() {
  var id = Number(620610818);
  var n = Number(1);
  const [count, setCount] = useState(620610818);

  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}
      {persons.map((it) => {
        return (
          <>
            <table class="table is-bordered mb-3">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Age</th>
                </tr>
                <tr>
                  <td>{it.name}</td>
                  <td>{it.male}</td>
                  <td>{it.age}</td>
                </tr>
              </tbody>
            </table>
          </>
        );
      })}
      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Sunisa Deeratrum</td>
            <td>Female</td>
            <td>21</td>
          </tr>
        </tbody>
      </table>

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>{count}</p>
      <button
        onClick={(e) => {
          setCount(count - n);
          n++;
        }}
      >
        -
      </button>
      <button
        onClick={(e) => {
          setCount(id);
          n = 1;
        }}
      >
        reset
      </button>
      <button
        onClick={(e) => {
          setCount(count + n);
          n++;
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
