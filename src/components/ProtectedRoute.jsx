import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const hoje = new Date();
    const dataLiberacao = new Date('2027-12-25T12:00:00-03:00');
    
    if (hoje < dataLiberacao) {
        return <Navigate to="/games/insomnia" replace />;
    }
    
    return children;
}