import { useState } from "react";
export default function StudentList() {
  const [students, setStudent] = useState([
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 21 },
    { id: 3, name: "kong", age: 32 },
  ]);
  const [show, setShow] = useState(true);

  function deleteStusent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }
  const handleButtonClick = () => {
    setShow(!show);
  };

  return (
    <>
      <ul className="border rounded-2xl mt-3 p-4 border-zinc-400">
        <div className="flex justify-between items-center mx-5 my-2 py-3 px-2 ">
          <h1 className="font-body text-4xl ">
            ຈຳນວນນັກຮຽນ = {students.length}
          </h1>
          <button
            className={show? "font-body btn btn-outline btn-secondary": "font-body btn btn-outline btn-accent"}
            onClick={handleButtonClick}
          >
            {show ? "ບໍ່ແດງ" : "ສະແດງ"}
          </button>
        </div>

        {show &&
          students.map((item) => (
            <li
              className="flex justify-between items-center shadow-lg mx-5 my-1 p-6 text-2xl rounded-lg"
              key={item.id}
            >
              <p>
                {item.id}-{item.name}
              </p>
              <button
                className="font-body btn btn-outline  btn-secondary"
                onClick={() => deleteStusent(item.id)}
              >
                ລົບ
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
