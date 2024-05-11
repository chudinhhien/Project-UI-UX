import { useNavigate, useRoutes } from "react-router-dom";
import { routes } from "../../routes"
import { useEffect } from "react";

function AllRoute(){
  const navigate = useNavigate();
  useEffect(() => {
    const currentPath = window.location.pathname;
    if(currentPath === "/"){
      navigate("/dashboard");
    }
    
  },[navigate])
  return useRoutes(routes);
}

export default AllRoute;