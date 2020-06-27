import React, { useState, useEffect } from "react";

const TechListModal = () => {
  const [tech, setTech] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    gettechs();
    // eslint-disable-next-line
  }, []);

  const gettechs = async () => {
    setLoading(true);
    const res = await fetch("/techs");
    const data = await res.json();

    setTech(data);
    setLoading(false);
  };

  return (
    <div id='tech-list-modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            tech.map((tech) => (
              <li className='collection-item'>{tech.firstName}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
