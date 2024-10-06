import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://67023987bd7c8c1ccd3e38f7.mockapi.io/Rickdelete")
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.error("Error fetching characters:", error);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://67023987bd7c8c1ccd3e38f7.mockapi.io/Rickdelete/${id}`)
          .then(() => {
            setCharacters(characters.filter((character) => character.id !== id));
            Swal.fire("Deleted!", "Your character has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting character:", error);
          });
      }
    });
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto justify-center text-center text-white p-10">
      <h1 className="text-2xl font-bold text-white mb-2">Character List</h1>

      <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-5">
        <button onClick={() => navigate("/newcharacter")} className="btn btn-black text-white px-4 py-2">
          Add New Character
        </button>

        <input
          type="text"
          placeholder="Search for a character"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-white p-2 px-4 rounded-md w-full sm:w-auto"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <div key={character.id} className="card  text-white p-4 ">
              <img
                src={character.image || "https://via.placeholder.com/150"}
                alt={character.name}
                className="card-img w-full h-90 object-cover rounded-md"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
              <h2 className="text-xl font-semibold my-4">{character.name}</h2>
              <button onClick={() => handleDelete(character.id)} className="btn btn-black text-white mt-2 px-4 py-2">
                Delete
              </button>
            </div>
          ))
        ) : (
          <h2 className="col-span-full text-xl">Oops!</h2>
        )}
      </div>
    </div>
  );
};

export default App;
