import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AiTwotoneDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
const ContactContainer = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 100, 100, 1) 0%,
    rgba(229, 246, 241, 1) 0%,
    rgba(182, 247, 231, 1) 100%
  );
  height: 100vh;
  overflow-y: scroll;
  .contact {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    padding: 1rem;
  }
`;
const ContactSection = styled.div`
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0.5rem;
  display: flex;

  gap: 0.5rem;
  flex-direction: column;
  .heading {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }
  .delete {
    //  display:none;
    color: red;
  }
  :hover .delete {
    display: block;
  }
`;
const ContactList = () => {
  const { contacts } = useSelector((state) => state.addContact);
  const dispatch = useDispatch();


  return (
    <>
      <ContactContainer>
        <div className="contact">
          {contacts.map((item, index) => {
            return (
              <ContactSection key={index}>
           
                
                <div className="heading">
                  <FaUserAlt /> {item.name}
                </div>
                <div className="heading">
                  <BsFillTelephoneFill /> {item.phone}
                </div>
                <div className="heading">
                  <IoMdMail />
                  {item.email}
                </div>
                <div className="dat"></div>
              </ContactSection>
            );
          })}
        </div>
      </ContactContainer>
    </>
  );
};

export default ContactList;
