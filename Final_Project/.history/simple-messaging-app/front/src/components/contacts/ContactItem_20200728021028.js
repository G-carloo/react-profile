import React from "react";
import Morefilledin from "@ant-design/icons";

const ContactItem = ({ contact }) => {
  const { id, name, phone, type } = contact;

  return (
    <div className=''>
      <h3>{name}</h3>
      <h4>
        <span
          className={
            "badge" +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h4>
      <ul>
        {phone && (
          <p>
            <i className='fas fa-user' />
            {phone}
          </p>
        )}
        {id && (
          <p>
            <i className='fas fa-id' />
            {id}
          </p>
        )}
      </ul>
      <p>
        {/* <MoreOutlined /> */}
        <button>
          <Morefilledin />
        </button>
      </p>
    </div>
  );
};

export default ContactItem;
