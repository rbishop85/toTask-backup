import React from 'react';
import { useQuery } from '@apollo/client';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Stack from 'react-bootstrap/Stack';
import Placeholder from 'react-bootstrap/Placeholder';

// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
      <p aria-hidden="true">
        <Placeholder xs={6} />
      </p>
        <Stack gap={2} className="col-md-5 mx-auto">
      <Link to="/login">
                  <Button variant="secondary" className="m-2" size="lg">
                    Login
                  </Button>
                </Link>

                <Link to="/signup">
                  <Button variant="outline-secondary" className="m-2" size="lg">
                    Signup
                  </Button>
                </Link>
                </Stack>
      </div>
    </main>
  );
};

export default Home;
