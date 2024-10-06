import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateCharacter = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    axios.get(`https://67023987bd7c8c1ccd3e38f7.mockapi.io/Rickdelete/${id}`).then((response) => {
      const character = response.data;
      setName(character.name);
      setImage(character.image);
      setGender(character.gender);
    });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCharacter = { name, image, gender };
    console.log("Updated data", updatedCharacter);

    axios.put(`https://67023987bd7c8c1ccd3e38f7.mockapi.io/Rickdelete/${id}`, updatedCharacter).then(() => {
      navigate("/"); 
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-white">Update Character</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input w-full p-2 border border-gray-300 rounded-md bg-gray-300 text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
              className="input w-full p-2 border border-gray-300 rounded-md bg-gray-300 text-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Gender</label>
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              className="input w-full p-2 border border-gray-300 rounded-md bg-gray-300 text-black"
            />
          </div>
          <button type="submit" className=" w-full p-2 bg-black text-white rounded-md">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCharacter;
