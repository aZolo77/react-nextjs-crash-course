import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import Spinner from "../ui/Spinner";

import useUser from "../features/authentication/useUser";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // #1. Load the authenticated User
  const { isLoading, isAuthenticated } = useUser();

  // #2. If there is NO authenticated User, redirect to the Login Page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  // #3. While loading: show a Spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // #4. If there is an authenticated User, render the App
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
