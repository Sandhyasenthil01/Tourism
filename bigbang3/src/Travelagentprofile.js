import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [agentDetails, setAgentDetails] = useState(null);
  const [tourPackageData, setTourPackageData] = useState([]);
  const [agentId, setAgentId] = useState(null);
  const navigate = useNavigate();

  

  useEffect(() => {
    const agent_id = sessionStorage.getItem('AgentId');

    if (agent_id) {
      setAgentId(agent_id);
      const fetchAgentDetails = async () => {
        try {
          const response = await axios.get(`https://localhost:7128/api/Agency/${agent_id}`);
          setAgentDetails(response.data);
        } catch (error) {
          console.error('Error fetching Travel Agent details:', error);
        }
      };

      fetchAgentDetails();
    }
  }, []);

  useEffect(() => {
    if (agentId) {
      fetchTourPackageData();
    }
  }, [agentId]);

  const fetchTourPackageData = () => {
    axios
      .get(`https://localhost:7128/api/Agency${agentId}`)
      .then((response) => {
        const data = response.data;
        setTourPackageData(data);
      })
      .catch((error) => {
        console.error('Error fetching tour package data:', error);
      });
  };

  if (!agentDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ marginTop: '3%' }}>
      <h1>My Profile</h1>
      <p>Name: {agentDetails.agent_name}</p>
      <p>Email: {agentDetails.agent_email}</p>
      <p>Email: {agentDetails.status}</p>

    

    </div>
  );
};

export default Profile;
