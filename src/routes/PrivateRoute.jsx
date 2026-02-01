import { Navigate } from "react-router-dom";
import StudentHome from "../pages/student/StudentHome";
import TeacherHome from "../pages/teacher/TeacherHome";
import ClassHome from "../pages/class/ClassHome";
import AssignmentHome from "../pages/assignment/AssignmentHome";
import ExamHome from "../pages/exam/ExamHome";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("token");

  return isLoggedIn ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;


